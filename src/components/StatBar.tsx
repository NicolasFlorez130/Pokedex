import { PokemonStat } from 'pokenode-ts';
import { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';

interface Props {
   stat: PokemonStat;
   max: number;
}

const StatBar = ({ stat, max }: Props) => {
   const [value, setValue] = useState((stat.base_stat * 100) / max);

   const name = (string =>
      string.includes('-')
         ? string
              .split('-')
              .map((word, i) => (!i ? word.slice(0, 2) : word))
              .join('.')
         : string)(stat.stat.name);

   const barColor = (() => {
      if (value <= 25) {
         return '#ff3e3e';
      } else if (value < 5) {
         return '#F08700';
      } else if (value < 75) {
         return '#EFCA08';
      } else if (value <= 100) {
         return '#6EEB83';
      } else {
         return '#77BEFE';
      }
   })();

   useEffect(() => {
      setValue((stat.base_stat * 100) / max);
   }, [stat]);

   return (
      <View className="flex-row my-[5px] w-full">
         <View className="flex-row justify-between w-2/5">
            <Text className="capitalize font-poppins-medium text-gray-500">{name}</Text>
            <Text className="font-poppins-medium">{stat.base_stat}</Text>
         </View>
         <View className="bg-gray-100 flex-1 h-1/4 ml-6 overflow-hidden relative rounded-full self-center w-3/5">
            <View
               style={{
                  backgroundColor: barColor,
                  width: `${value}%`,
               }}
               className="absolute h-full rounded-full"
            />
         </View>
      </View>
   );
};

export default StatBar;
