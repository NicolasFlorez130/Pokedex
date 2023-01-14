import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pokemon } from 'pokenode-ts';
import { PokedexNavigationProps } from '../../../../types/navigation';
import { PokemonScreenNavigationContext } from './navigation-slice';
import { PokemonDataContext } from './pokemon-data-slice';

interface Props {
   children: any;
   navigation: NativeStackNavigationProp<PokedexNavigationProps, 'Pokemon'>;
   pokemon: Pokemon;
}

const PokemonContextProvider = ({ children, navigation, pokemon }: Props) => {
   return (
      <PokemonScreenNavigationContext.Provider value={navigation}>
         <PokemonDataContext.Provider value={pokemon}>{children}</PokemonDataContext.Provider>
      </PokemonScreenNavigationContext.Provider>
   );
};

export default PokemonContextProvider;
