import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { PokedexNavigationProps } from '../../../types/navigation';
import { Pokemons } from '../../../types/pokemons';
import PokemonCard from '../../components/PokemonCard';

type Props = NativeStackScreenProps<PokedexNavigationProps, 'List'>;

const api = new PokemonClient();

const List = ({ navigation }: Props) => {
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');

   const getPokemons = async () => {
      try {
         const response = await fetch(url);
         const json: Pokemons = await response.json();

         // for await (const result of json.results) {
         //    const pokemon = await api.getPokemonByName(result.name);
         //    setPokemons(last => [...last, pokemon]);
         // }

         const newPokemons = await Promise.all(
            json.results.map(result => api.getPokemonByName(result.name))
         );

         setPokemons(last => [...last, ...newPokemons]);

         setUrl(json.next);
      } catch (error) {
         console.error(error);
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
            renderItem={item => <PokemonCard navigation={navigation} data={item.item} />}
            showsVerticalScrollIndicator={false}
            onEndReached={getPokemons}
            onEndReachedThreshold={0.5}
            ListFooterComponent={<ActivityIndicator />}
         />
         {/* <ScrollView>
            {pokemons.map(pokemon => (
               <PokemonCard data={pokemon} key={pokemon.id} />
            ))}
         </ScrollView> */}
      </SafeAreaView>
   );
};

export default List;
