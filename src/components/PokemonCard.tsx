import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Pokemon } from 'pokenode-ts';
import { Image, Pressable, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { PokedexNavigationProps } from '../../types/navigation';
// import * as SplashScreen from 'expo-splash-screen';

interface Props {
   data: Pokemon;
   navigation: NativeStackNavigationProp<PokedexNavigationProps, 'List'>;
}

const PokemonCard = ({ data, navigation }: Props) => {
   // const [fontsLoaded] = useFonts({
   //    'Poppins-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
   // });

   // SplashScreen.preventAutoHideAsync();

   const imageUrl = data.sprites.other?.['official-artwork'].front_default ?? '';

   return (
      <Pressable
         className="aspect-[4/3] bg-red-500 flex flex-1 m-2 relative rounded-xl"
         onPress={() => navigation.navigate('Pokemon', { data })}>
         <Text className="capitalize font-poppins-bold ml-4 mt-6 text-lg text-white relative z-10">
            {data.name}
         </Text>
         <Image
            className="absolute h-3/4 bottom-2 right-2 aspect-square"
            source={{ uri: imageUrl }}
         />
      </Pressable>
   );
};

export default PokemonCard;
