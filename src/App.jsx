import React, { useState } from 'react';
import PokemonList from './components/PokemonList';
import SinglePokemon from './components/SinglePokemon';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonSelect = (pokemon) => setSelectedPokemon(pokemon);
  const handleBackToPokemonList = () => setSelectedPokemon(null);

  const isPokemonSelected = selectedPokemon !== null;

  return (
    <div>
      <h1>My Pokemon App</h1>
      {!isPokemonSelected ? (
        <PokemonList onSelect={handlePokemonSelect} />
      ) : (
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

