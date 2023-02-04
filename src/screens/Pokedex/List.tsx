import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PokedexNavigationProps } from '../../../types/navigation';
import { Pokemons } from '../../../types/pokemons';
import PokemonCard from '../../components/PokemonCard';

type Props = NativeStackScreenProps<PokedexNavigationProps, 'List'>;

const api = new PokemonClient();

const List = ({ navigation }: Props) => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=0&limit=50');
   const [isLoading, setIsLoading] = useState(false);

   const getPokemons = async () => {
      if (isLoading) {
         return;
      }

      try {
         setIsLoading(true);

         const response = await fetch(url);
         const json: Pokemons = await response.json();

         const newPokemons = await Promise.all(
            json.results.map(result => api.getPokemonByName(result.name))
         );

         setPokemons(last => [...last, ...newPokemons]);
         // setPokemons(last => [...newPokemons]);

         setUrl(json.next);
      } catch (error) {
         console.error(error);
      } finally {
         setIsLoading(false);
      }
   };

   useEffect(() => {
      getPokemons();
   }, []);

   return (
      <SafeAreaView>
         <FlatList
            className="m-4 mb=0"
            numColumns={2}
            data={pokemons}
            keyExtractor={item => String(item.id + Math.random())}
            renderItem={item => (
               <PokemonCard
                  navigation={() =>
                     navigation.navigate('Pokemon', { data: item.item, from: 'pokedex' })
                  }
                  data={item.item}
               />
            )}
            showsVerticalScrollIndicator={false}
            onEndReached={getPokemons}
            ListFooterComponent={<ActivityIndicator />}
         />
      </SafeAreaView>
   );
};

export default List;
