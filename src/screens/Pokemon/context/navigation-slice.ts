import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createContext } from 'react';
import { PokedexNavigationProps, RootNavigationProps } from '../../../../types/navigation';

export const PokemonScreenNavigationContext = createContext<NativeStackNavigationProp<
   RootNavigationProps,
   'Pokemon'
> | null>(null);
