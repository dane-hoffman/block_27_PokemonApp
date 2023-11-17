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
    setSelectedPokemon(pokemon);
    const response = await fetch(pokemon.url);
    const selectedPokemonData = await response.json();
    console.log('Selected Pokemon Data:', selectedPokemonData);
  };

  return (
    <>
      <h1>My Pokemon App</h1>
      {selectedPokemon ? (
        <div>
          <button onClick={() => setSelectedPokemon(null)}>Back</button>
          <h2>{selectedPokemon.name}</h2>
          {/* Display other details of selectedPokemon */}
        </div>
      ) : (
        <ul>
          {pokemonData.map((pokemon, index) => (
            <li key={index} onClick={() => handleClick(pokemon)}>
              {pokemon.name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}