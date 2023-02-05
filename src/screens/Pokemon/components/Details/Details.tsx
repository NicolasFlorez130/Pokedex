import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ScrollView, View } from 'react-native';
import { PokemonDetailsNavigationProps } from '../../../../../types/navigation';
import BaseStats from './BaseStats';
import Evolutions from './Evolutions';
import Moves from './Moves';

const Tab = createMaterialTopTabNavigator<PokemonDetailsNavigationProps>();

const Details = () => {
   return (
      <View className="bg-white h-3/5 rounded-[35px] p-6 overflow-visible">
         <Tab.Navigator
            screenOptions={{
               tabBarLabelStyle: {
                  textTransform: 'capitalize',
                  fontSize: 14,
                  fontFamily: 'Poppins-Bold',
               },
            }}>
            <Tab.Screen
               options={{ tabBarLabel: 'Base Stats' }}
               name="BaseStats"
               component={BaseStats}
            />
            <Tab.Screen name="Evolutions" component={Evolutions} />
            <Tab.Screen name="Moves" component={Moves} />
         </Tab.Navigator>
      </View>
   );
};

export default Details;
