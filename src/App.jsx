import './App.css'
import CardPokemon from './components/card-pokemon/CardPokemon';
import fetchPokemons from './api/api.js';
import { useState, useEffect } from 'react';


function App() {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    fetchPokemons((v) => {
      setPokemonList(v)
    })
  }, [])

 
  
  return (
    <div className='main'>
      <div className='containCards'>
        {pokemonList.map((pokemon) => (
        <CardPokemon 
            key={pokemon.id} 
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.urlImage}
            types={pokemon.types}/>
        ))}
      </div>
    </div>
  )  
}

export default App
