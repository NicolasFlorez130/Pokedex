import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pokemon } from 'pokenode-ts';
import { From, PokedexNavigationProps } from '../../../../types/navigation';
import { FromContext } from './from-slice';
import { PokemonScreenNavigationContext } from './navigation-slice';
import { PokemonDataContext } from './pokemon-data-slice';

interface Props {
   children: any;
   navigation: NativeStackNavigationProp<PokedexNavigationProps, 'Pokemon'>;
   pokemon: Pokemon;
   from: From;
}

const PokemonContextProvider = ({ children, navigation, pokemon, from }: Props) => {
   return (
      <PokemonScreenNavigationContext.Provider value={navigation}>
         <FromContext.Provider value={from}>
            <PokemonDataContext.Provider value={pokemon}>{children}</PokemonDataContext.Provider>
         </FromContext.Provider>
      </PokemonScreenNavigationContext.Provider>
   );
};

export default PokemonContextProvider;
