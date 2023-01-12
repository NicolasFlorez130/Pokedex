import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const TopTab = createMaterialTopTabNavigator<PokemonDescNavigationProps>();

const Details = () => {
   return (
      <View>
         <Text>Pokemon details</Text>
      </View>
   );
};

export default Details;
