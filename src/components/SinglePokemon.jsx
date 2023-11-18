import React from 'react';

export const capitalizeFirstLetter = (pokemon) => {
  return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
};

const SinglePokemon = ({ pokemon, onSelect }) => {
  const handleClick = () => {
    onSelect(pokemon);
  };

  return (
    <>
    <li key={pokemon.name} onClick={handleClick}>
    {capitalizeFirstLetter(pokemon.name)}
    </li>
    
    </>
    // <li key={pokemon.name} onClick={handleClick}>
    //   {capitalizeFirstLetter(pokemon.name)}
    // </li>
  );
};

export default SinglePokemon;

