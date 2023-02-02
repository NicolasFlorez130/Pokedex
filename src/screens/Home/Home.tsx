import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigationProps, RootNavigationProps } from '../../../types/navigation';
import Results from '../Results/Results';
import WIP from '../WIP/WIP';
import { HomeNavigationContext } from './context/home-navigation-context';
import Index from './Index';

const TabNavigator = createStackNavigator<HomeNavigationProps>();

type Props = BottomTabScreenProps<RootNavigationProps, 'Home'>;

const Home = ({ navigation }: Props) => {
   return (
      <HomeNavigationContext.Provider value={navigation}>
         <TabNavigator.Navigator
            screenOptions={{
               headerShown: false,
            }}>
            <TabNavigator.Screen name="Index" component={Index} />
            <TabNavigator.Screen name="Results" component={Results} />
            <TabNavigator.Screen options={{ headerShown: true }} name="WIP" component={WIP} />
         </TabNavigator.Navigator>
      </HomeNavigationContext.Provider>
   );
};

export default Home;
