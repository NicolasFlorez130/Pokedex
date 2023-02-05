import { Pokemon } from 'pokenode-ts';
import { createContext } from 'react';

export const PokemonDataContext = createContext<Pokemon | null>(null);
