import React, { useEffect, useState } from 'react';
import SinglePokemon from './SinglePokemon';

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

const PokemonList = ({ onSelect }) => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setPokemonData(data);
    };

    fetchData();
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
