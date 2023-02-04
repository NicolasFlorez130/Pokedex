import { Image, SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const WIP = () => {
   return (
      <SafeAreaView className="bg-white h-full">
         <ScrollView className="mb-6">
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
            </Text>
         </ScrollView>
      </SafeAreaView>
   );
};

export default WIP;
