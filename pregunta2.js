let pokemon = ["Pikachu", "Charmander", "Bulbasaur", "Squirtle"];

function elementsToUppercase(array) {
  return array.map((item) => item.toUpperCase());
}

console.log(elementsToUppercase(pokemon));
