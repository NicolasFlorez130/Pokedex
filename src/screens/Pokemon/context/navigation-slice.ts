import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createContext } from 'react';
import { PokedexNavigationProps } from '../../../../types/navigation';

export const PokemonScreenNavigationContext = createContext<NativeStackNavigationProp<
   PokedexNavigationProps,
   'Pokemon'
> | null>(null);
