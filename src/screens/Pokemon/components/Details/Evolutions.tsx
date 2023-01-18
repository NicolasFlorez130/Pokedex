import { ChainLink, EvolutionChain, EvolutionClient, PokemonClient } from 'pokenode-ts';
import { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Evolution from '../../../../components/Evolution';
import { PokemonDataContext } from '../../context/pokemon-data-slice';

const evoCli = new EvolutionClient();
const pokeCli = new PokemonClient();

const Evolutions = () => {
   const data = useContext(PokemonDataContext);
   const [evolutions, setEvolutions] = useState<ChainLink[]>([]);

   const addEvolution = (chain: ChainLink | undefined) => {
      if (!chain || !chain.evolves_to.length) {
         return;
      }

      setEvolutions(last => [...last, chain]);

      chain.evolves_to.forEach(addEvolution);
   };

   const getEvolutionChains = async () => {
      try {
         const specie = await pokeCli.getPokemonSpeciesById(data?.id as number);

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
      <ScrollView showsVerticalScrollIndicator={false} className="bg-white py-4">
         <View className="mb-20">
            <Text className="font-poppins-bold my-2 text-lg">Evolution Chain</Text>
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
