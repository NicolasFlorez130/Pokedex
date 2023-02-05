import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import PokemonCard from '../../components/PokemonCard';
import { keys } from '../../utils/keys';

const Favorites = () => {
   const [favorites, setFavorites] = useState<Pokemon[]>([]);

   const callFavorites = async () => {
      const string = await AsyncStorage.getItem(keys.favorites);
      setFavorites(string ? JSON.parse(string) : []);
   };

   useEffect(() => {
      callFavorites();
   }, []);

   return (
      <SafeAreaView className="mx-4">
         <Text className="font-poppins-bold mx-4 my-2 text-2xl">Favorites</Text>
         <Pressable onPress={callFavorites} className="flex-row items-center mx-2">
            <Ionicons color="blue" size={18} name="reload" />
            <Text className="font-medium ml-2 text-blue-500 text-lg">Reload favorites</Text>
         </Pressable>
         {!favorites.length && (
            <View className="flex-row items-center h-full justify-center">
               <Text className="font-poppins-medium m-4 text-center text-lg">
                  It looks like you don't have any Favorite Pokemon yet{'\n'}¿Why don't you take a
                  look in the Pokedex?
               </Text>
            </View>
         )}
         <FlatList
            numColumns={2}
            data={favorites}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <PokemonCard data={item} />}
         />
      </SafeAreaView>
   );
};

export default Favorites;
