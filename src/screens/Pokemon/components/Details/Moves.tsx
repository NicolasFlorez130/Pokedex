import { Move, MoveClient } from 'pokenode-ts';
import { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Movement from '../../../../components/Movement';
import { PokemonDataContext } from '../../context/pokemon-data-slice';

const movesCli = new MoveClient();

const Moves = () => {
   const data = useContext(PokemonDataContext);

   const [movements, setMovements] = useState<Move[]>([]);

   const getMoves = async () => {
      const res = await Promise.all(
         data?.moves.map(move => movesCli.getMoveByName(move.move.name)) ?? []
      );

      setMovements(res);
   };

   useEffect(() => {
      getMoves();
   }, [data]);

   return (
      <ScrollView className="bg-white" showsVerticalScrollIndicator={false}>
         {data?.moves.map((move, i) => (
            <Movement
               key={move.move.name}
               element={movements.at(i)?.type.name ?? ''}
               learnedAt={move.version_group_details.at(-1)?.level_learned_at ?? 0}
               method={move.version_group_details.at(-1)?.move_learn_method.name ?? ''}
               name={move.move.name}
            />
         ))}
      </ScrollView>
   );
};

export default Moves;
