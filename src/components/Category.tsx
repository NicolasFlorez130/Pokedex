import { Text, View, Pressable, Image } from 'react-native';
import { POKEMON_TYPE_COLORS, POKEMON_TYPE_NAMES } from '../utils/pokemon-types';

interface Props {
   name: string;
   navigate: () => void;
   color: POKEMON_TYPE_NAMES;
   index?: number;
}

const Category = ({ name, navigate, color, index }: Props) => {
   return (
      <Pressable
         style={{
            backgroundColor: POKEMON_TYPE_COLORS[color],
            marginLeft: index ? (index % 2 ? 20 : 0) : 0,
            marginBottom: index ? 20 : 0,
            shadowColor: POKEMON_TYPE_COLORS[color],
         }}
         className="aspect-video justify-center flex flex-1 rounded-2xl shadow-md"
         onPress={navigate}>
         <Text className="font-poppins-bold m-4 text-white text-lg">{name}</Text>
         <View className="absolute inset-0 overflow-hidden">
            <View className="absolute aspect-square h-[120%] opacity-20 overflow-hidden right-[-15%] top-[-10%]">
               <Image
                  className="h-full w-full"
                  source={require('./../assets/white-flat-pokeball.png')}
               />
            </View>
            <View className="absolute aspect-square bg-white left-[-15%] opacity-20 rounded-full top-[-25%] w-2/5" />
         </View>
      </Pressable>
   );
};

export default Category;
