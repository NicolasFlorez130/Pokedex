import { Pokemon } from 'pokenode-ts';

type RootNavigationProps = {
   Pokedex: undefined;
   Account: undefined;
   Favorites: undefined;
   Home: undefined;
};

type PokedexNavigationProps = {
   List: undefined;
   Pokemon: {
      data: Pokemon;
   };
};

type PokemonDetailsNavigationProps = {
   About: undefined;
   BaseStats: undefined;
   Moves: undefined;
   Evolutions: undefined;
};

type HomeNavigationProps = {
   Index: undefined;
   Results: undefined;
   WIP: undefined;
};
