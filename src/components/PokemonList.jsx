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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonList();
      setPokemonData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>My Pokemon App</h1>
      <ul>
        {pokemonData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </>
  );
}