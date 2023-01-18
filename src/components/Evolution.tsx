import { AntDesign } from '@expo/vector-icons';
import { NavigationContext } from '@react-navigation/native';
import { ChainLink, Pokemon, PokemonClient } from 'pokenode-ts';
import { useContext, useEffect, useRef, useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { RootNavigationProps } from '../../types/navigation';

interface Props {
   chain: ChainLink;
}

const pokeCli = new PokemonClient();

const Evolution = ({ chain }: Props) => {
   const [firstPokemon, setFirstPokemon] = useState<Pokemon>();
   const [secondPokemon, setSecondPokemon] = useState<Pokemon>();

   const { current: level } = useRef(chain.evolves_to.at(0)?.evolution_details.at(0)?.min_level);

   const getPokemons = async () => {
      try {
         const pokemonNames = [chain.species.name, chain.evolves_to.at(0)?.species.name as string];

         const [first, second] = await Promise.all(
            pokemonNames.map(name => pokeCli.getPokemonByName(name))
         );

         setFirstPokemon(first);
         setSecondPokemon(second);
      } catch (error) {
         console.error(error);
      }
   };

   useEffect(() => {
      getPokemons();
   }, []);

   return (
      <>
         {firstPokemon && secondPokemon && (
            <View className="flex-row items-center w-full">
               <Bubble pokemon={firstPokemon} />
               <View className="flex-col items-center w-1/3">
                  <AntDesign name="arrowright" size={30} color={'rgb(209, 213, 219)'} />
                  <Text className="font-poppins-bold mt-2">Lvl {level}</Text>
               </View>
               <Bubble pokemon={secondPokemon} />
            </View>
         )}
      </>
   );
};

const Bubble = ({ pokemon }: { pokemon: Pokemon }) => {
   const navigation = useContext(NavigationContext);

   const navigate = () => {
      if (!navigate) {
         return;
      }

      navigation?.navigate('Pokedex', {
         screen: 'Pokemon',
         params: {
            data: pokemon,
         },
      });

      navigation?.navigate('BaseStats');
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
               className="absolute h-full w-5/6 self-center opacity-10"
               source={require('../assets/black-flat-pokeball.png')}
            />
         </View>
         <Text className="capitalize font-poppins-medium">{pokemon.name}</Text>
      </Pressable>
   );
};

export default Evolution;
