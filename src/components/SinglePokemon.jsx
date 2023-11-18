import React from 'react';

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (pokemon) => {
  return pokemon.charAt(0).toUpperCase() + pokemon.slice(1);
};

// Component to display details of a single Pokémon
const SinglePokemon = ({ pokemon, onSelect, showBackButton }) => {
  // Function to handle selecting a Pokémon
  const handleClick = () => {
    onSelect(pokemon);
  };

  // Render the Pokémon details and a back button if needed
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