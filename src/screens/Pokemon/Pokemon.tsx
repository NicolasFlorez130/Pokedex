import { SafeAreaView } from 'react-native';
import Details from './components/Details/Details';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokedexNavigationProps, RootNavigationProps } from '../../../types/navigation';
import { useState } from 'react';
import PokemonContextProvider from './context/PokemonContextProvider';
import Top from './components/Top';
import { POKEMON_TYPE_COLORS, POKEMON_TYPE_NAMES } from '../../utils/pokemon-types';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<PokedexNavigationProps, 'Pokemon'>;

const Pokemon = ({ navigation, route }: Props) => {
   const { data, from } = route.params;

   const [isFav, setIsFav] = useState(false);

   return (
      <PokemonContextProvider navigation={navigation} pokemon={data} from={from}>
         <SafeAreaView
            style={{
               backgroundColor: POKEMON_TYPE_COLORS[data.types[0].type.name as POKEMON_TYPE_NAMES],
            }}
            className="h-full">
            <ScrollView className="h-screen">
               <Top from={from} fav={{ isFav, setIsFav }} />
               <Details />
            </ScrollView>
         </SafeAreaView>
      </PokemonContextProvider>
   );
};

export default Pokemon;
