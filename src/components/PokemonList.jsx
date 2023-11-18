import React, { useEffect, useState } from 'react';
import SinglePokemon from './SinglePokemon';

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

const PokemonList = ({ onSelect }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      const data = await fetchPokemonList();
      setPokemonData(data);
    };

    getPokemonData();
  }, []);

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

