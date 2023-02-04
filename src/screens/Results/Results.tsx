import { StackScreenProps } from '@react-navigation/stack';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HomeNavigationProps } from '../../../types/navigation';
import { CaughtSearch } from '../../../types/pokemons';
import PokemonCard from '../../components/PokemonCard';
import { CaughtSearchContext } from '../../global/context/caught-search';
import { HomeNavigationContext } from '../Home/context/home-navigation-slice';

type Props = StackScreenProps<HomeNavigationProps, 'Results'>;

const pokemonCli = new PokemonClient();

const Results = ({ route }: Props) => {
   const context = useContext(CaughtSearchContext);
   const { query } = route.params;

   const [search, setSearch] = useState<CaughtSearch | null>(null);
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const rootNavigation = useContext(HomeNavigationContext);

   const getCaughtResults = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
      const data = await res.json();

      console.log('searched');

      context?.setter({ pokemons: data });
      setSearch({ pokemons: data });
   };

   const getPokemons = async () => {
      const names = search?.pokemons.results
         .filter(pokemon => pokemon.name.includes(query))
         .map(pokemon => pokemon.name);

      const res = await Promise.all(names?.map(name => pokemonCli.getPokemonByName(name)) ?? []);

      setPokemons(res);
   };

   useEffect(() => {
      if (!context?.state) {
         getCaughtResults();
      } else {
         setSearch(context.state);
      }
   }, []);

   useEffect(() => {
      if (search?.pokemons) {
         getPokemons();
      }
   }, [search]);

   return (
      <View className="p-4">
         <FlatList
            numColumns={2}
            data={pokemons}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
               <PokemonCard
                  data={item}
                  navigation={() =>
                     rootNavigation?.navigate('Pokedex', {
                        screen: 'Pokemon',
                        params: { data: item, from: 'results' },
                     })
                  }
               />
            )}
         />
      </View>
   );
};

export default Results;
