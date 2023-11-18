import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import SinglePokemon from './components/SinglePokemon';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // State to manage the selected Pokémon
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  // Function to handle selecting a Pokémon
  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  // Function to handle going back to the Pokémon list
  const handleBackToPokemonList = () => {
    setSelectedPokemon(null);
  };

  // Determine if a Pokémon is currently selected
  const isPokemonSelected = selectedPokemon !== null;

  // Conditional rendering based on whether a Pokémon is selected
  return (
    <div>
      <h1>My Pokemon App</h1>
      {!isPokemonSelected ? (
        // Render the Pokémon list if no Pokémon is selected
        <PokemonList onSelect={handlePokemonSelect} />
      ) : (
        // Render the single Pokémon if a Pokémon is selected
        <SinglePokemon
          pokemon={selectedPokemon}
          onSelect={handleBackToPokemonList}
          showBackButton={true}
        />
      )}
    </div>
  );
}

export default App;
