import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createContext } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
import { HomeNavigationProps } from '../../../types/navigation';
import Categories from './components/Categories';
import Searcher from './components/Searcher';
import { HomeNavigationContext } from './context/home-navigation-context';

type Props = NativeStackScreenProps<HomeNavigationProps, 'Index'>;

const Index = ({ navigation }: Props) => {
   return (
      <SafeAreaView>
         <Searcher />
         <Categories navigation={navigation} />
      </SafeAreaView>
   );
};

export default Index;
