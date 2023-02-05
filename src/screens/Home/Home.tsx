import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeNavigationProps, AppNavigationProps } from '../../../types/navigation';
import Results from '../Results/Results';
import WIP from '../WIP/WIP';
import { HomeNavigationContext } from './context/home-navigation-slice';
import Index from './Index';

const TabNavigator = createStackNavigator<HomeNavigationProps>();

type Props = BottomTabScreenProps<AppNavigationProps, 'Home'>;

const Home = ({ navigation }: Props) => {
   return (
      <HomeNavigationContext.Provider value={navigation}>
         <TabNavigator.Navigator>
            <TabNavigator.Screen
               options={{
                  headerShown: false,
               }}
               name="Index"
               component={Index}
            />
            <TabNavigator.Screen
               options={({ route }) => ({ title: `Search: "${route.params.query}"` })}
               name="Results"
               component={Results}
            />
            <TabNavigator.Screen
               options={{
                  title: 'Work in Progress',
               }}
               name="WIP"
               component={WIP}
            />
         </TabNavigator.Navigator>
      </HomeNavigationContext.Provider>
   );
};

export default Home;
