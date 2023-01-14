import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { RootNavigationProps } from './types/navigation';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import Pokedex from './src/screens/Pokedex/Pokedex';
import Home from './src/screens/Home/Home';
import Favorites from './src/screens/Favorites/Favorites';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const BottomTab = createBottomTabNavigator<RootNavigationProps>();

const App = () => {
   const [fontsLoaded] = useFonts({
      'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
      'Poppins-Black': require('./assets/fonts/Poppins-Black.ttf'),
      'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
   });

   useEffect(() => {
      fontsLoaded && SplashScreen.hideAsync();
   }, [fontsLoaded]);

   return (
      <>
         {fontsLoaded && (
            <SafeAreaProvider>
               <NavigationContainer>
                  <BottomTab.Navigator screenOptions={{ headerShown: false }}>
                     <BottomTab.Screen name="Home" component={Home} />
                     <BottomTab.Screen name="Pokedex" component={Pokedex} />
                     <BottomTab.Screen name="Favorites" component={Favorites} />
                  </BottomTab.Navigator>
               </NavigationContainer>
            </SafeAreaProvider>
         )}
      </>
   );
};

export default App;
