import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { Pokemon } from 'pokenode-ts';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { From } from '../../../../types/navigation';
import TypeChip from '../../../components/TypeChip';
import { RootNavigationContext } from '../../../global/context/root-navigation-slice';
import { keys } from '../../../utils/keys';
import { PokemonDataContext } from '../context/pokemon-data-slice';

const Top = () => {
   const navigation = useContext(RootNavigationContext);
   const data = useContext(PokemonDataContext);

   const [isFav, setIsFav] = useState(false);

   const detectFav = async () => {
      const string = await AsyncStorage.getItem(keys.favorites);
      if (!string) {
         return;
      }
      const favorites: Pokemon[] = JSON.parse(string) ?? [];

      setIsFav(favorites.findIndex(el => el.id === data?.id) >= 0);
   };

   const toggleFav = async () => {
      const string = await AsyncStorage.getItem(keys.favorites);
      const favorites: Pokemon[] = string ? JSON.parse(string) : [];
      const id = favorites.findIndex(el => el.id === data?.id);

      if (id >= 0) {
         const aux = [...favorites];

         aux.splice(id, 1);

         await AsyncStorage.setItem(keys.favorites, JSON.stringify(aux));

         setIsFav(false);
      } else {
         await AsyncStorage.setItem(keys.favorites, JSON.stringify([...favorites, data]));

         setIsFav(true);
      }
   };

   useEffect(() => {
      detectFav();
   }, []);

   useEffect(() => {
      detectFav();
   }, [data]);

   return (
      <View className="h-2/5 relative z-10">
         <View className="absolute bg-white w-1/2 rounded-3xl aspect-square opacity-20 top-[-30%] left-[-25%] rotate-[-20deg]" />
         <View className="absolute bg-white w-1/3 rounded-3xl aspect-square opacity-20 right-0 top-10 rotate-12" />
         <View className="flex-row justify-between m-6">
            <AntDesign
               onPress={() => navigation?.navigate('App')}
               name="arrowleft"
               color="white"
               size={30}
            />
            <AntDesign
               onPress={toggleFav}
               name={isFav ? 'heart' : 'hearto'}
               color="white"
               size={30}
            />
         </View>
         <View className="mx-6">
            <View className="flex-row justify-between mb-2 w-full">
               <Text className="capitalize font-poppins-bold text-4xl text-white">
                  {data?.name}
               </Text>
               <Text className="font-poppins-bold text-xl text-white">
                  #{data?.id.toString().padStart(3, '0')}
               </Text>
            </View>
            <View className="flex-row">
               {data?.types.map(type => (
                  <React.Fragment key={type.type.name}>
                     <TypeChip name={type.type.name} />
                     <View className="w-2" />
                  </React.Fragment>
               ))}
            </View>
         </View>
         <Image
            className="absolute w-full bottom-[-40px] h-2/3 z-10"
            source={{ uri: data?.sprites.other?.['official-artwork'].front_default ?? '' }}
            style={{
               resizeMode: 'contain',
            }}
         />
         <Image
            className="absolute w-full bottom-[-45px] h-3/5 opacity-20"
            source={require('../../../assets/white-flat-pokeball.png')}
            style={{
               resizeMode: 'contain',
            }}
         />
      </View>
   );
};

export default Top;
