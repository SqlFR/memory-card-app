import Axios from "axios";

async function fetchPokemonData(url) {
  const rep = await fetch(url);
  const pokemonData = await rep.json();
  
  
  return {
    name: pokemonData.species.name,
    id: pokemonData.id,
    urlImage: pokemonData.sprites.other["official-artwork"].front_default,
    types: pokemonData.types.map((typeData) => typeData.type.name)
  };
}

async function fetchPokemons(callback) {
  try {
    const response = await Axios.get("https://pokeapi.co/api/v2/pokemon?offset=20&limit=5");
    const pokemons = response.data.results;
    const listPokemons = [];

    const promises = pokemons.map(async (pokemon) => {
      const pokemonData = await fetchPokemonData(pokemon.url);
      listPokemons.push(pokemonData);
    });

    await Promise.all(promises);
    callback(listPokemons);
  } catch (error) {
    console.error("Une erreur s'est produite : " + error);
  }
}

export default fetchPokemons;