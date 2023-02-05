import {
   ChainLink,
   EvolutionChain,
   EvolutionClient,
   PokemonClient,
   PokemonSpecies,
} from 'pokenode-ts';
import { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Evolution from '../../../../components/Evolution';
import { PokemonDataContext } from '../../context/pokemon-data-slice';

const evoCli = new EvolutionClient();
const pokeCli = new PokemonClient();

const Evolutions = () => {
   const data = useContext(PokemonDataContext);
   const [evolutions, setEvolutions] = useState<ChainLink[]>([]);
   const [species, setSpecies] = useState<PokemonSpecies>();

   const addEvolution = (chain: ChainLink | undefined) => {
      if (!chain || !chain.evolves_to.length) {
         return;
      }

      setEvolutions(last => [...last, chain]);

      chain.evolves_to.forEach(chain => addEvolution(chain));
   };

   const getEvolutionChains = async () => {
      try {
         const specie = await pokeCli.getPokemonSpeciesById(data?.id as number);

         setSpecies(specie);

         const chain = await evoCli.getEvolutionChainById(
            parseInt(specie.evolution_chain.url.split('/').at(-2) as string)
         );

         addEvolution(chain.chain);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getEvolutionChains();
   }, []);

   return (
      <ScrollView className="bg-white h-full pt-4">
         <Text className="font-poppins-bold text-lg">Evolution Chain</Text>
         <View className="h-full">
            {evolutions.map((evolution, i) => (
               <View key={i} className="my-2">
                  <Evolution chain={evolution} />
               </View>
            ))}
         </View>
      </ScrollView>
   );
};

export default Evolutions;
