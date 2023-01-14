import { AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { View } from 'react-native';
import { POKEMON_TYPE_COLORS, POKEMON_TYPE_NAMES } from '../../../utils/pokemon-type-color';
import { PokemonScreenNavigationContext } from '../context/navigation-slice';
import { PokemonDataContext } from '../context/pokemon-data-slice';

interface Props {
   fav: {
      isFav: boolean;
      setIsFav: React.Dispatch<React.SetStateAction<boolean>>;
   };
}

const Top = ({ fav }: Props) => {
   const navigation = useContext(PokemonScreenNavigationContext);
   const data = useContext(PokemonDataContext);

   const { isFav, setIsFav } = fav;

   return (
      <View className="h-2/5">
         <View className="flex-row justify-between m-6">
            <AntDesign
               onPress={navigation?.goBack}
               className=""
               name="arrowleft"
               color="white"
               size={30}
            />
            <AntDesign
               onPress={() => setIsFav(last => !last)}
               className=""
               name={isFav ? 'heart' : 'hearto'}
               color="white"
               size={30}
            />
         </View>
      </View>
   );
};

export default Top;
