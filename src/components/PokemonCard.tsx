import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { Pokemon } from 'pokenode-ts';
import { Image, Pressable, StyleSheet, Text, Touchable, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { PokedexNavigationProps } from '../../types/navigation';
import { POKEMON_TYPE_COLORS, POKEMON_TYPE_NAMES } from '../utils/pokemon-type-color';
import TypeChip from './TypeChip';

interface Props {
   data: Pokemon;
   navigation: NativeStackNavigationProp<PokedexNavigationProps, 'List'>;
}

const PokemonCard = ({ data, navigation }: Props) => {
   const imageUrl = data.sprites.other?.['official-artwork'].front_default ?? '';

   return (
      <Pressable
         style={{
            backgroundColor: POKEMON_TYPE_COLORS[data.types[0].type.name as POKEMON_TYPE_NAMES],
         }}
         className="aspect-[4/3] flex-1 m-2 overflow-hidden relative rounded-xl"
         onPress={() => navigation.navigate('Pokemon', { data })}>
         <Text className="absolute font-poppins-bold opacity-20 right-3 top-2">
            #{data.id.toString().padStart(3, '0')}
         </Text>
         <Text className="capitalize font-poppins-bold ml-3 mt-4 relative text-lg text-white z-20">
            {data.name}
         </Text>
         <View className="mx-2 flex-col">
            {data.types.map((type, i) => (
               <TypeChip key={i} name={type.type.name} />
            ))}
         </View>
         <Image
            className="absolute aspect-square bottom-0 h-2/3  right-0 z-10"
            source={{ uri: imageUrl }}
         />
         <View className="absolute aspect-square bottom-[-10%] h-4/5 opacity-25 right-[-10%]">
            <Image
               style={{ resizeMode: 'contain', aspectRatio: 1 / 1 }}
               className="h-full w-full"
               source={require('../../src/assets/white-flat-pokeball.png')}
            />
         </View>
      </Pressable>
   );
};

export default PokemonCard;
