import React from 'react';

export const getPokemonList = async () => {
  const response = await fetch ('https://pokeapi.co/api/v2/pokemon/');
console.log(response);
}


export default function PokemonList() {
  getPokemonList();
  return (
    
    <>

      <h1>My Pokemon App</h1>
      <h2>This is not a Pokemon</h2>
    </>
  );
};
