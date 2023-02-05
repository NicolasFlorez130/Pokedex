import { StyleSheet, Text, View } from 'react-native';
import { dmToCm, dmToIn, hgToKg, hgToLb } from '../utils/units-convert';

interface Props {
   weight: number | undefined;
   height: number | undefined;
}

const Sizes = ({ height, weight }: Props) => {
   const trim = (number: number) => parseFloat(number.toFixed(1));

   return (
      <View className="bg-white flex-row justify-between m-auto p-6 shadow-md rounded-3xl w-[90%]">
         <View className="w-1/2">
            <Text className="font-poppins-medium text-sm text-gray-500">Height</Text>
            <Text className="font-poppins-medium mt-1">
               {trim(dmToCm(height ?? 0))} cm (
               {trim(dmToIn(height ?? 0))
                  .toString()
                  .split('.')
                  .join("' ")}
               " )
            </Text>
         </View>
         <View className="w-1/2">
            <Text className="font-poppins-medium text-sm text-gray-500">Weight</Text>
            <Text className="font-poppins-medium mt-1">
               {trim(hgToKg(weight ?? 0))} kg ({trim(hgToLb(weight ?? 0))} lb)
            </Text>
         </View>
      </View>
   );
};

export default Sizes;
