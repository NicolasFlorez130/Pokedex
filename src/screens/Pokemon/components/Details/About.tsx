import { useContext } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { PokemonDataContext } from '../../context/pokemon-data-slice';

const About = () => {
   const data = useContext(PokemonDataContext);

   return (
      <ScrollView className="bg-white">
         {/* <Text>{data?.}</Text> */}
      </ScrollView>
   );
};

export default About;
