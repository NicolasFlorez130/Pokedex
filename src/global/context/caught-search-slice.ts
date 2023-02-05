import { createContext } from 'react';
import { CaughtSearch } from '../../../types/pokemons';

interface CaughtSearchType {
   state: CaughtSearch | null;
   setter: React.Dispatch<React.SetStateAction<CaughtSearch | null>>;
}

export const CaughtSearchContext = createContext<CaughtSearchType | null>(null);
