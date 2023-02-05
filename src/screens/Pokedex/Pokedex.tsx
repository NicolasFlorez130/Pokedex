import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PokedexNavigationProps, AppNavigationProps } from '../../../types/navigation';
import { Pokemons } from '../../../types/pokemons';
import PokemonCard from '../../components/PokemonCard';
import SpinningPokeball from '../../components/SpinningPokeball';

type Props = NativeStackScreenProps<AppNavigationProps, 'Pokedex'>;

const Stack = createStackNavigator<PokedexNavigationProps>();

const api = new PokemonClient();

const Pokedex = ({}: Props) => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
   const [isFetching, setIsFetching] = useState(false);
   const [isLoading, setIsLoading] = useState(true);

   const getPokemons = async () => {
      if (isFetching) {
         return;
      }

      try {
         setIsFetching(true);

         const response = await fetch(url);
         const json: Pokemons = await response.json();

         const newPokemons = await Promise.all(
            json.results.map(result => api.getPokemonByName(result.name))
         );

         setPokemons(last => [...last, ...newPokemons]);
         // setPokemons(last => [...newPokemons]);

         setUrl(json.next);

         setIsLoading(false);
      } catch (error) {
         console.error(error);
      } finally {
         setIsFetching(false);
      }
   };

   useEffect(() => {
      getPokemons();
   }, []);

   return (
      <View>
         {isLoading && (
            <View className="items-center flex-row h-screen justify-center w-full">
               <SpinningPokeball />
            </View>
         )}

         <FlatList
            className="p-4"
            numColumns={2}
            data={pokemons}
            keyExtractor={item => String(item.id + Math.random())}
            renderItem={item => <PokemonCard data={item.item} />}
            showsVerticalScrollIndicator={false}
            onEndReached={getPokemons}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
               !isLoading ? (
                  <View className="items-center flex-row justify-center py-6 w-full">
                     <SpinningPokeball />
                  </View>
               ) : (
                  <></>
               )
            }
         />
      </View>
   );
};

export default Pokedex;
