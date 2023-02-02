import { Image, Text, View } from 'react-native';
import { iconImports, POKEMON_TYPE_COLORS, POKEMON_TYPE_NAMES } from '../utils/pokemon-types';

interface Props {
   name: string;
   element: string;
   learnedAt: number;
   method: string;
}

const Movement = ({ element, learnedAt, method, name }: Props) => {
   return (
      <View className="border-gray-300 border-y-[.5px] flex-row justify-between py-4">
         <View>
            <Text className="capitalize font-poppins-medium">{name.replaceAll('-', ' ')}</Text>
            <Text className="capitalize font-poppins-light">
               {learnedAt === 0 ? 'Base' : `Level ${learnedAt}`} - Method:{' '}
               {method.replaceAll('-', ' ')}
            </Text>
         </View>
         <View
            className="aspect-square mr-2 p-1 rounded-full shadow-sm w-10"
            style={{
               shadowColor: POKEMON_TYPE_COLORS[element as POKEMON_TYPE_NAMES],
               backgroundColor: POKEMON_TYPE_COLORS[element as POKEMON_TYPE_NAMES],
            }}>
            <Image
               className="fill-white rounded-full w-full h-full"
               style={{
                  resizeMode: 'contain',
               }}
               source={iconImports[element as POKEMON_TYPE_NAMES]}
            />
         </View>
         {/* <Text>{method}</Text> */}
      </View>
   );
};

export default Movement;
