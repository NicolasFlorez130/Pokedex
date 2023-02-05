import { Image, SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as Linking from 'expo-linking';

const WIP = () => {
   return (
      <SafeAreaView className="bg-white h-full">
         <ScrollView className="h-screen mb-6">
            <View className="px-6">
               <Image
                  style={{ resizeMode: 'contain' }}
                  className="w-full"
                  source={require('./../../assets/concerned-pikachu.jpeg')}
               />
            </View>
            <Text className="font-poppins-bold mx-6 my-4 text-center text-gray-800 text-lg">
               This app is still in progress, so certain functionalities are still in development.
               {'\n'}
               {'\n'}If you have some idea, recommendation, or directly you want to contribute with
               its development you can do so via the github repository:
               {'\n'}
            </Text>
            <Text
               onPress={() => Linking.openURL('https://github.com/NicolasFlorez130/Pokedex')}
               className="font-poppins-medium text-xl text-blue-500 text-center">
               nicolasFlorez130/pokedex
            </Text>
         </ScrollView>
      </SafeAreaView>
   );
};

export default WIP;
