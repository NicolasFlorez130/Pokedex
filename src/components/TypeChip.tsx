import { Text, View } from 'react-native';

interface Props {
   name: string;
}

const TypeChip = ({ name }: Props) => {
   return (
      <View
         className="py-1 px-5 my-1 mx-3 rounded-full self-start"
         style={{ backgroundColor: 'rgba(255, 255, 255, .25)' }}>
         <Text className="capitalize text-white font-poppins-bold text-xs">{name}</Text>
      </View>
   );
};

export default TypeChip;
