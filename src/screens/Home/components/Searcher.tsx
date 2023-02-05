import { Entypo } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Alert, Button, Pressable, Text, TextInput, View } from 'react-native';
import { HomeNavigationProps } from '../../../../types/navigation';

interface Props {
   navigation: NativeStackNavigationProp<HomeNavigationProps, 'Index'>;
}

const Searcher = ({ navigation }: Props) => {
   const [query, setQuery] = useState('');

   const goToResults = () =>
      query.length >= 3
         ? navigation.navigate('Results', { query })
         : Alert.alert('Incomplete query', 'You must write at least 3 letters to search');

   return (
      <View className="my-6">
         <Text className="font-poppins-bold text-3xl">
            What pokemon
            {'\n'}
            are you looking for?
         </Text>
         <View className="bg-gray-200 flex flex-row my-4 p-2 rounded-full w-max">
            <Entypo size={30} name="magnifying-glass" />
            <TextInput
               autoCorrect={false}
               autoCapitalize="none"
               onChangeText={setQuery}
               className="font-poppins-medium ml-2 truncate w-full"
               placeholder="Search Pokemon, Move, Ability etc"
            />
         </View>
         <Pressable className="bg-black p-4 rounded-full w-max" onPress={goToResults}>
            <Text className="font-poppins-bold text-center text-white w-max">Search</Text>
         </Pressable>
         <Text className="font-poppins-bold mt-6 text-2xl">Explore</Text>
      </View>
   );
};

export default Searcher;
