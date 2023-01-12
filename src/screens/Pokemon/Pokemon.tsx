import { SafeAreaView, Text, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import Details from './components/Details';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<PokedexNavigationProps, 'Pokemon'>;

const Pokemon = ({ navigation }: Props) => {
   return (
      <SafeAreaView>
         <Text onPress={navigation.goBack}>Go back</Text>
         <Text>Pokemon</Text>
         <View>
            <Details />
         </View>
      </SafeAreaView>
   );
};

export default Pokemon;
