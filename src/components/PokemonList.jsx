import React, { useEffect, useState } from 'react';
import SinglePokemon from './SinglePokemon';

// Function to fetch the Pokémon list data
export const fetchPokemonList = async () => {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/');
    const { results: pokemonList } = await response.json();
    return pokemonList;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    return [];
  }
};

// Component to display the list of Pokémon
const PokemonList = ({ onSelect }) => {
  // State to hold the fetched Pokémon data
  const [pokemonData, setPokemonData] = useState([]);

  // Fetch Pokémon data when the component mounts
  useEffect(() => {
    const getPokemonData = async () => {
      const data = await fetchPokemonList();
      setPokemonData(data);
    };

    getPokemonData();
  }, []);

  // Render the list of Pokémon
  return (
    <ul>
      {pokemonData.map((pokemon, index) => (
        <SinglePokemon
          key={index}
          pokemon={pokemon}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default PokemonList;