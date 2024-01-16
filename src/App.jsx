import React, { useEffect, useState } from 'react'
import Locations from './components/Locations';
import Battle from './components/Battle'
import DisplayLocation from './components/DisplayLocation';

function App() {
  const [battleLocation, setBattleLocation] = useState(null);

  const handleLocation = (event) => {
    setBattleLocation(event.target.value);
  };

  const handleGoBack = () => {
    setBattleLocation(null);
  }

  console.log(battleLocation);

  return (
    <>
      <Battle playerPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'} enemyPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'} />
      {battleLocation ? (
        <DisplayLocation location={battleLocation} goBack={handleGoBack}/>
      ) : (
        <Locations pickLocation={handleLocation}/>
      )}
    </>
  )
}

export default App
