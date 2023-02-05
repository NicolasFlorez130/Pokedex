import { NavigatorScreenParams } from '@react-navigation/native';
import { Pokemon } from 'pokenode-ts';

type RootNavigationProps = {
   App: undefined;
   Pokemon: {
      data: Pokemon;
   };
};

type AppNavigationProps = {
   Pokedex: NavigatorScreenParams<PokedexNavigationProps>;
   Account: undefined;
   Favorites: undefined;
   Home: undefined;
};

export type From = 'results' | 'pokedex';

type PokedexNavigationProps = {
   List: undefined;
};

type PokemonDetailsNavigationProps = {
   About: undefined;
   BaseStats: undefined;
   Moves: undefined;
   Evolutions: undefined;
};

type HomeNavigationProps = {
   Index: undefined;
   Results: {
      query: string;
   };
   WIP: undefined;
};
