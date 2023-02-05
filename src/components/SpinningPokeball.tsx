import { Image, View } from 'react-native';

const SpinningPokeball = () => {
   return (
      <View className="aspect-square w-1/2">
         <Image className="h-full w-full" source={require('./../assets/spinning-pokeball.jpeg')} />
      </View>
   );
};

export default SpinningPokeball;
