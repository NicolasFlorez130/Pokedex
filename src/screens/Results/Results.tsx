import { StackScreenProps } from '@react-navigation/stack';
import { Pokemon, PokemonClient } from 'pokenode-ts';
import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { HomeNavigationProps } from '../../../types/navigation';
import { CaughtSearch } from '../../../types/pokemons';
import PokemonCard from '../../components/PokemonCard';
import SpinningPokeball from '../../components/SpinningPokeball';
import { CaughtSearchContext } from '../../global/context/caught-search-slice';
import { HomeNavigationContext } from '../Home/context/home-navigation-slice';

type Props = StackScreenProps<HomeNavigationProps, 'Results'>;

const pokemonCli = new PokemonClient();

const Results = ({ route }: Props) => {
   const context = useContext(CaughtSearchContext);
   const { query } = route.params;

   const [search, setSearch] = useState<CaughtSearch | null>(null);
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);
   const [isLoading, setIsLoading] = useState(true);

   const getCaughtResults = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
      const data = await res.json();

      context?.setter({ pokemons: data });
      setSearch({ pokemons: data });
   };

   const getPokemons = async () => {
      const names = search?.pokemons.results
         .filter(pokemon => pokemon.name.includes(query))
         .map(pokemon => pokemon.name);

      const res = await Promise.all(names?.map(name => pokemonCli.getPokemonByName(name)) ?? []);

      setPokemons(res);
      setIsLoading(false);
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
         {isLoading ? (
            <View className="items-center justify-center h-full w-full">
               <SpinningPokeball />
            </View>
         ) : (
            !pokemons.length && (
               <View className="flex-row h-full justify-center items-center w-full">
                  <Text className="font-poppins-medium m-4 text-center text-lg">
                     It looks like there aren't matches with your query{'\n'}¿Why don't you take a
                     look in the Pokedex?
                  </Text>
               </View>
            )
         )}

         <FlatList
            numColumns={2}
            data={pokemons}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <PokemonCard data={item} />}
         />
      </View>
   );
};

export default Results;
