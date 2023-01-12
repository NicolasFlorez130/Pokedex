import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home/Home';
import Pokedex from './src/screens/Pokedex/Pokedex';
import Details from './src/screens/Pokemon/components/Details';

const BottomTab = createBottomTabNavigator<RootNavigationProps>();

export default function App() {
   return (
      <SafeAreaProvider>
         <NavigationContainer>
            <BottomTab.Navigator screenOptions={{ headerShown: false }}>
               <BottomTab.Screen name="Pokedex" component={Pokedex} />
               <BottomTab.Screen name="Home" component={Home} />
            </BottomTab.Navigator>
         </NavigationContainer>
      </SafeAreaProvider>
   );
}
