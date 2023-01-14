import { SafeAreaView, Text, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import Details from './components/Details';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokedexNavigationProps } from '../../../types/navigation';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import PokemonContextProvider from './context/PokemonContextProvider';
import Top from './components/Top';
import { POKEMON_TYPE_COLORS, POKEMON_TYPE_NAMES } from '../../utils/pokemon-type-color';

type Props = NativeStackScreenProps<PokedexNavigationProps, 'Pokemon'>;

const Pokemon = ({ navigation, route }: Props) => {
   const { data } = route.params;

   const [isFav, setIsFav] = useState(false);

   return (
      <PokemonContextProvider navigation={navigation} pokemon={data}>
         <SafeAreaView
            style={{
               backgroundColor: POKEMON_TYPE_COLORS[data.types[0].type.name as POKEMON_TYPE_NAMES],
            }}>
            <Top fav={{ isFav, setIsFav }} />
         </SafeAreaView>
      </PokemonContextProvider>
   );
};

export default Pokemon;
