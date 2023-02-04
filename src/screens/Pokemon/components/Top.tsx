import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { From } from '../../../../types/navigation';
import TypeChip from '../../../components/TypeChip';
import { PokemonScreenNavigationContext } from '../context/navigation-slice';
import { PokemonDataContext } from '../context/pokemon-data-slice';

interface Props {
   fav: {
      isFav: boolean;
      setIsFav: React.Dispatch<React.SetStateAction<boolean>>;
   };
   from: From;
}

const Top = ({ fav, from }: Props) => {
   const navigation = useContext(PokemonScreenNavigationContext);
   const data = useContext(PokemonDataContext);

   const rootNav = useNavigation() as any;

   const { isFav, setIsFav } = fav;

   const nav = useCallback(() => {
      navigation?.navigate('List');

      if (from === 'results') {
         rootNav.navigate('Home');
      }
   }, [from]);

   useEffect(() => {
      console.log('from');
   }, [from]);

   return (
      <View className="h-1/3 relative z-10">
         <View className="absolute bg-white w-1/2 rounded-3xl aspect-square opacity-20 top-[-30%] left-[-25%] rotate-[-20deg]" />
         <View className="absolute bg-white w-1/3 rounded-3xl aspect-square opacity-20 right-0 top-10 rotate-12" />
         <View className="flex-row justify-between m-6">
            <AntDesign onPress={nav} name="arrowleft" color="white" size={30} />
            <AntDesign
               onPress={() => setIsFav(last => !last)}
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
