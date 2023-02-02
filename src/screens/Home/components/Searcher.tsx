import { Entypo } from '@expo/vector-icons';
import { Button, Pressable, Text, TextInput, View } from 'react-native';

const Searcher = () => {
   return (
      <View className="m-6">
         <Text className="font-poppins-bold text-3xl">
            What pokemon
            {'\n'}
            are you looking for?
         </Text>
         <View className="bg-gray-200 flex flex-row my-4 p-2 rounded-full w-max">
            <Entypo size={30} name="magnifying-glass" />
            <TextInput
               className="font-poppins-medium ml-2 truncate"
               placeholder="Search Pokemon, Move, Ability etc"
            />
         </View>
         <Pressable className="bg-black p-4 rounded-full w-max">
            <Text className="font-poppins-bold text-center text-white w-max">Search</Text>
         </Pressable>
      </View>
   );
};

export default Searcher;
