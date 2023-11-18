import React from 'react';

export const capitalizeFirstLetter = (pokemon) => {
  return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
};

const SinglePokemon = ({ pokemon, onSelect, showBackButton }) => {
  const handleClick = () => {
    onSelect(pokemon);
  };

  return (
    <div>
      <p key={pokemon.name} onClick={handleClick}>
        {capitalizeFirstLetter(pokemon.name)}
      </p>
      {showBackButton && (
        <button onClick={() => onSelect(null)}>Back</button>
      )}
    </div>
  );
};

export default SinglePokemon;
