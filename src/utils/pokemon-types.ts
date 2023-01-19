export const POKEMON_TYPE_COLORS = {
   normal: '#A8A878',
   fighting: '#C03028',
   flying: '#A890F0',
   poison: '#A040A0',
   ground: '#E0C068',
   rock: '#B8A038',
   bug: '#A8B820',
   ghost: '#7C538C',
   steel: '#B8B8D0',
   fire: '#FC6D6D',
   water: '#77BEFE',
   grass: '#4AD0B1',
   electric: '#FFCE4C',
   psychic: '#F85888',
   ice: '#98D8D8',
   dragon: '#7038F8',
   dark: '#705848',
   fairy: '#EE99AC',
};

export const pokemonTypeNames = [
   'normal',
   'fighting',
   'flying',
   'poison',
   'ground',
   'rock',
   'bug',
   'ghost',
   'steel',
   'fire',
   'water',
   'grass',
   'electric',
   'psychic',
   'ice',
   'dragon',
   'dark',
   'fairy',
] as const;

export type POKEMON_TYPE_NAMES = typeof pokemonTypeNames[number];

export const iconImports = {
   normal: require('../assets/type-icons/normal.png'),
   fighting: require('../assets/type-icons/fighting.png'),
   flying: require('../assets/type-icons/flying.png'),
   poison: require('../assets/type-icons/poison.png'),
   ground: require('../assets/type-icons/ground.png'),
   rock: require('../assets/type-icons/rock.png'),
   bug: require('../assets/type-icons/bug.png'),
   ghost: require('../assets/type-icons/ghost.png'),
   steel: require('../assets/type-icons/steel.png'),
   fire: require('../assets/type-icons/fire.png'),
   water: require('../assets/type-icons/water.png'),
   grass: require('../assets/type-icons/grass.png'),
   electric: require('../assets/type-icons/electric.png'),
   psychic: require('../assets/type-icons/psychic.png'),
   ice: require('../assets/type-icons/ice.png'),
   dragon: require('../assets/type-icons/dragon.png'),
   dark: require('../assets/type-icons/dark.png'),
   fairy: require('../assets/type-icons/fairy.png'),
};