import { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PokemonDataContext } from '../../context/pokemon-data-slice';
import Sizes from '../../../../components/Sizes';
import StatBar from '../../../../components/StatBar';

const BaseStats = () => {
   const data = useContext(PokemonDataContext);

   const total = {
      base_stat: data?.stats.reduce((last, current) => last + current.base_stat, 0) ?? 0,
      effort: 0,
      stat: {
         name: 'Total',
         url: '',
      },
   };

   return (
      <ScrollView className="bg-white pt-4 overflow-visible" showsVerticalScrollIndicator={false}>
         <Sizes weight={data?.weight} height={data?.height} />
         <View className="mt-4 mb-20">
            {data?.stats.map(stat => (
               <StatBar max={100} key={stat.stat.name} stat={stat} />
            ))}
            <StatBar stat={total} max={(data?.stats.length ?? 6) * 100} />
         </View>
      </ScrollView>
   );
};

export default BaseStats;
