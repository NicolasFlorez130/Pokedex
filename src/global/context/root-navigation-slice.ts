import { StackNavigationProp } from '@react-navigation/stack';
import { createContext } from 'react';
import { RootNavigationProps } from '../../../types/navigation';

export const RootNavigationContext = createContext<StackNavigationProp<
   RootNavigationProps,
   keyof RootNavigationProps
> | null>(null);
