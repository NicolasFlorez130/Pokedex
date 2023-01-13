import { SafeAreaView, Text, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import Details from './components/Details';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PokedexNavigationProps } from '../../../types/navigation';

type Props = NativeStackScreenProps<PokedexNavigationProps, 'Pokemon'>;

const Pokemon = ({ navigation, route }: Props) => {
   const { data } = route.params;

   return (
      <SafeAreaView>
         <Text onPress={navigation.goBack}>Go back</Text>
         <Text>{data.name}</Text>
         <View>
            <Details />
         </View>
      </SafeAreaView>
   );
};

export default Pokemon;
