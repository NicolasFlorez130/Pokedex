import { AntDesign } from '@expo/vector-icons';
import { NavigationContext } from '@react-navigation/native';
import { ChainLink, Pokemon, PokemonClient } from 'pokenode-ts';
import { useContext, useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { AppNavigationProps } from '../../types/navigation';
import { RootNavigationContext } from '../global/context/root-navigation-slice';

interface Props {
   chain: ChainLink;
}

const pokeCli = new PokemonClient();

const Evolution = ({ chain }: Props) => {
   const [basePokemon, setBasePokemon] = useState<Pokemon>();
   const [evolutions, setEvolutions] = useState<Pokemon[]>([]);

   const getPokemons = async () => {
      try {
         const evolutionsNames = chain.evolves_to.map(evo => evo.species.name);

         const basePokemonPromise = pokeCli.getPokemonByName(chain.species.name);
         const evolutionsPromise = evolutionsNames.map(name => pokeCli.getPokemonByName(name));

         const response = await Promise.all([basePokemonPromise, ...evolutionsPromise]);

         setBasePokemon(response.at(0));
         setEvolutions(response.slice(1));
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getPokemons();
   }, []);

   return (
      <>
         {evolutions.map((evolution, i) => (
            <View key={evolution.id} className="flex-row items-center w-full">
               {basePokemon && <Bubble pokemon={basePokemon} />}
               <View className="flex-col items-center w-1/3">
                  <AntDesign name="arrowright" size={30} color={'rgb(209, 213, 219)'} />
                  {
                     <Text className="capitalize font-poppins-bold mt-2">
                        {chain.evolves_to.at(i)?.evolution_details.at(-1)?.min_level
                           ? `Lvl ${chain.evolves_to.at(i)?.evolution_details.at(-1)?.min_level}`
                           : chain.evolves_to
                                .at(i)
                                ?.evolution_details.at(-1)
                                ?.item?.name.replaceAll('-', ' ') ?? 'Unknown'}
                     </Text>
                  }
               </View>
               <Bubble pokemon={evolution} />
            </View>
         ))}
      </>
   );
};

const Bubble = ({ pokemon }: { pokemon: Pokemon }) => {
   const navigation = useContext(RootNavigationContext);

   const relativeNav = useContext(NavigationContext);

   const navigate = () => {
      navigation?.navigate('Pokemon', {
         data: pokemon,
      });

      relativeNav?.navigate('BaseStats');
   };

   return (
      <Pressable onPress={navigate} className="flex-col items-center w-1/3 p-2">
         <View className="relative w-full aspect-square flex-col">
            <Image
               className="aspect-square relative w-full z-10"
               source={{ uri: pokemon.sprites.other?.['official-artwork'].front_default ?? '' }}
            />
            <Image
               style={{ resizeMode: 'contain' }}
               className="absolute h-full w-5/6 self-center opacity-5"
               source={require('../assets/black-flat-pokeball.png')}
            />
         </View>
         <Text className="capitalize font-poppins-medium">{pokemon.name}</Text>
      </Pressable>
   );
};

export default Evolution;
