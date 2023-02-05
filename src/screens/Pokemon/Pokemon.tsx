import { SafeAreaView, Text, View } from 'react-native';
import Details from './components/Details/Details';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationProps } from '../../../types/navigation';
import { useEffect, useState } from 'react';
import PokemonContextProvider from './context/PokemonContextProvider';
import Top from './components/Top';
import { POKEMON_TYPE_COLORS, POKEMON_TYPE_NAMES } from '../../utils/pokemon-types';
import { ScrollView } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';

type Props = StackScreenProps<RootNavigationProps, 'Pokemon'>;

const Pokemon = ({ navigation, route }: Props) => {
   const { data } = route.params;

   const [isFav, setIsFav] = useState(false);

   return (
      <PokemonContextProvider navigation={navigation} pokemon={data}>
         <SafeAreaView
            style={{
               backgroundColor: POKEMON_TYPE_COLORS[data.types[0].type.name as POKEMON_TYPE_NAMES],
            }}
            className="h-full">
            <View>
               <Top />
               <Details />
            </View>
         </SafeAreaView>
      </PokemonContextProvider>
   );
};

export default Pokemon;
