import { StackNavigationProp } from '@react-navigation/stack';
import { Pokemon } from 'pokenode-ts';
import { RootNavigationProps } from '../../../../types/navigation';
import { RootNavigationContext } from '../../../global/context/root-navigation-slice';
import { PokemonDataContext } from './pokemon-data-slice';

interface Props {
   children: any;
   navigation: StackNavigationProp<RootNavigationProps, 'Pokemon'>;
   pokemon: Pokemon;
}

const PokemonContextProvider = ({ children, navigation, pokemon }: Props) => {
   return (
      <RootNavigationContext.Provider value={navigation}>
         <PokemonDataContext.Provider value={pokemon}>{children}</PokemonDataContext.Provider>
      </RootNavigationContext.Provider>
   );
};

export default PokemonContextProvider;
