import { FlatList, ScrollView, Text, View, VirtualizedList } from 'react-native';
import { useContext, useMemo } from 'react';
import { HomeNavigationContext } from '../context/home-navigation-slice';
import Category from '../../../components/Category';
import { POKEMON_TYPE_NAMES } from '../../../utils/pokemon-types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeNavigationProps } from '../../../../types/navigation';
import Searcher from './Searcher';

interface CategoryType {
   name: string;
   navigate: () => void;
   color: POKEMON_TYPE_NAMES;
}

interface Props {
   navigation: NativeStackNavigationProp<HomeNavigationProps, 'Index'>;
}

const Categories = ({ navigation }: Props) => {
   const rootNavigation = useContext(HomeNavigationContext);

   const categories: CategoryType[] = useMemo(
      () => [
         {
            name: 'Pokedex',
            navigate: () => rootNavigation?.navigate('Pokedex'),
            color: 'grass',
         },
         {
            name: 'Moves',
            navigate: () => navigation.navigate('WIP'),
            color: 'fire',
         },
         {
            name: 'Abilities',
            navigate: () => navigation.navigate('WIP'),
            color: 'water',
         },
         {
            name: 'Items',
            navigate: () => navigation.navigate('WIP'),
            color: 'electric',
         },
         {
            name: 'Locations',
            navigate: () => navigation.navigate('WIP'),
            color: 'ghost',
         },
         {
            name: 'Type Charts',
            navigate: () => navigation.navigate('WIP'),
            color: 'dark',
         },
      ],
      []
   );

   return (
      <View>
         <FlatList
            ListHeaderComponent={<Searcher navigation={navigation} />}
            className="p-6"
            data={categories}
            keyExtractor={item => item.name}
            renderItem={({ item, index }) => <Category {...item} index={index} />}
            numColumns={2}
         />
      </View>
   );
};

export default Categories;
