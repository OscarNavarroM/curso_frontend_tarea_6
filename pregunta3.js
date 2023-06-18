const SELECTED_TYPE = "Fuego";

let pokemon = [
  {
    nombre: "Pikachu",
    tipo: "Electrico",
  },
  {
    nombre: "Charmander",
    tipo: "Fuego",
  },
  {
    nombre: "Bulbasaur",
    tipo: "Planta",
  },
  {
    nombre: "Squirtle",
    tipo: "Agua",
  },
  {
    nombre: "Charmeleon",
    tipo: "Fuego",
  },
  {
    nombre: "Weedle",
    tipo: "bicho",
  },
  {
    nombre: "Charizard",
    tipo: "Fuego",
  },
];

function getPokemonByType(pokemonList, type) {
  return pokemonList.filter((item) => item.tipo === type);
}

console.log(getPokemonByType(pokemon, SELECTED_TYPE));
