import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HomeNavigationProps } from '../../../types/navigation';
import Categories from './components/Categories';
import Searcher from './components/Searcher';

type Props = NativeStackScreenProps<HomeNavigationProps, 'Index'>;

const Index = ({ navigation }: Props) => {
   return (
      <SafeAreaView>
         <Categories navigation={navigation} />
      </SafeAreaView>
   );
};

export default Index;
