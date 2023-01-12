import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import Pokemon from '../Pokemon/Pokemon';
import List from './List';

type Props = NativeStackScreenProps<RootNavigationProps, 'Pokedex'>;

const Stack = createStackNavigator<PokedexNavigationProps>();

const Pokedex = ({}: Props) => {
   return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name="List" component={List} />
         <Stack.Screen name="Pokemon" component={Pokemon} />
      </Stack.Navigator>
   );
};

export default Pokedex;
