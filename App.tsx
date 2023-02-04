import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { RootNavigationProps } from './types/navigation';
import * as SplashScreen from 'expo-splash-screen';
import { createContext, useEffect, useState } from 'react';
import Pokedex from './src/screens/Pokedex/Pokedex';
import Home from './src/screens/Home/Home';
import Favorites from './src/screens/Favorites/Favorites';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';
import { CaughtSearch } from './types/pokemons';
import { CaughtSearchContext } from './src/global/context/caught-search';

SplashScreen.preventAutoHideAsync();

const BottomTab = createBottomTabNavigator<RootNavigationProps>();

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
            <SafeAreaProvider>
               <CaughtSearchContext.Provider value={{ state, setter }}>
                  <NavigationContainer>
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
                  </NavigationContainer>
               </CaughtSearchContext.Provider>
            </SafeAreaProvider>
         )}
      </>
   );
};

export default App;
