import React, { useEffect, useState } from 'react';

export const getPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const result = await response.json();
    const pokemonList = result.results;
    return pokemonList;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    return [];
  }
};

const capitalizeFirstLetter = (pokemon) => {
  return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
};

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setPokemonData(data);
    };

    fetchData();
  }, []);

  const handleClick = async (pokemon) => {
    const response = await fetch(pokemon.url);
    const selectedPokemonData = await response.json();
    console.log('Selected Pokemon Data:', selectedPokemonData);
    setSelectedPokemon(selectedPokemonData);
  };

  return (
    <>
      <h1>My Pokemon App</h1>
      {selectedPokemon ? (
        <div>
          <button onClick={() => setSelectedPokemon(null)}>Back</button>
          <h2>{selectedPokemon.name}</h2>
          <h4>Pokemon Type:</h4>
          {selectedPokemon.types && selectedPokemon.types.length > 0 ? (
            selectedPokemon.types.map((typeData, index) => (
              <p key={index}>{typeData.type.name}</p>
            ))
          ) : (
            <p>No types found for this Pokemon</p>
          )}
          {/* Display other details of selectedPokemon */}
        </div>
      ) : (
        <ul>
          {pokemonData.map((pokemon, index) => (
            <li key={index} onClick={() => handleClick(pokemon)}>
              {capitalizeFirstLetter(pokemon.name)}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
