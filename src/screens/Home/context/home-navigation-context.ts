import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createContext } from 'react';
import { HomeNavigationProps, RootNavigationProps } from '../../../../types/navigation';

export const HomeNavigationContext = createContext<BottomTabNavigationProp<
   RootNavigationProps,
   'Home'
> | null>(null);
