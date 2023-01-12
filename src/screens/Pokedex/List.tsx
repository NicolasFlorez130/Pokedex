import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, Text, View } from 'react-native';

type Props = NativeStackScreenProps<PokedexNavigationProps, 'List'>;

const List = ({ navigation }: Props) => {
   return (
      <SafeAreaView>
         <Text>List</Text>
         <Text onPress={() => navigation.navigate('Pokemon')}>Go to pokemon</Text>
      </SafeAreaView>
   );
};

export default List;
