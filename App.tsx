import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { AppNavigationProps, RootNavigationProps } from './types/navigation';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useEffect, useState } from 'react';
import Pokedex from './src/screens/Pokedex/Pokedex';
import Home from './src/screens/Home/Home';
import Favorites from './src/screens/Favorites/Favorites';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';
import { CaughtSearch } from './types/pokemons';
import { CaughtSearchContext } from './src/global/context/caught-search-slice';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import Pokemon from './src/screens/Pokemon/Pokemon';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootNavigationContext } from './src/global/context/root-navigation-slice';

SplashScreen.preventAutoHideAsync();

const StackNav = createStackNavigator<RootNavigationProps>();

const BottomTab = createBottomTabNavigator<AppNavigationProps>();

const App = () => {
   const [fontsLoaded] = useFonts({
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
      'Poppins-Light': require('./assets/fonts/Poppins-Light.ttf'),
   });

   const [state, setter] = useState<CaughtSearch | null>(null);

   useEffect(() => {
      fontsLoaded && SplashScreen.hideAsync();
   }, [fontsLoaded]);

   return (
      <>
         {fontsLoaded && (
            <CaughtSearchContext.Provider value={{ state, setter }}>
               <NavigationContainer>
                  <StackNav.Navigator screenOptions={{ headerShown: false }}>
                     <StackNav.Screen name="App" component={BottomTabNavigator} />
                     <StackNav.Screen name="Pokemon" component={Pokemon} />
                  </StackNav.Navigator>
               </NavigationContainer>
            </CaughtSearchContext.Provider>
         )}
      </>
   );
};

type Props = StackScreenProps<RootNavigationProps>;

const BottomTabNavigator = ({ navigation }: Props) => {
   return (
      <RootNavigationContext.Provider value={navigation}>
         <BottomTab.Navigator screenOptions={{ headerShown: false }}>
            <BottomTab.Screen
               name="Home"
               component={Home}
               options={{
                  tabBarIcon: ({ size, color }) => (
                     <Feather name="home" size={size} color={color} />
                  ),
               }}
            />
            <BottomTab.Screen
               name="Pokedex"
               component={Pokedex}
               options={{
                  tabBarIcon: ({ size, focused }) => (
                     <Image
                        style={{
                           height: '200%',
                           bottom: '50%',
                        }}
                        className="animate-spin aspect-square relative z-10"
                        source={require('./src/assets/pokeball-color.png')}
                     />
                  ),
               }}
            />
            <BottomTab.Screen
               name="Favorites"
               component={Favorites}
               options={{
                  tabBarIcon: ({ size, color }) => (
                     <Feather name="heart" size={size} color={color} />
                  ),
               }}
            />
         </BottomTab.Navigator>
      </RootNavigationContext.Provider>
   );
};

export default App;
