import React, { useEffect, useState } from 'react'
import Locations from './components/Locations';
import Battle from './components/Battle'
import DisplayLocation from './components/DisplayLocation';
import Encounter from './components/Encounter';

function App() {
  const [battleLocation, setBattleLocation] = useState(null);
  const [enemyUrl, setEnemyUrl] = useState(null);

  const handleLocation = (event) => {
    setBattleLocation(event.target.value);
  };

  const handleGoBack = () => {
    setBattleLocation(null);
    setEnemyUrl(null);
  }

  console.log(enemyUrl);

  return (
    <>
      {/* <Battle playerPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'} enemyPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'} /> */}
      {battleLocation ? ( <div>
        <DisplayLocation location={battleLocation} onGoBack={handleGoBack}/>
        <Encounter location={battleLocation} onEncounter={setEnemyUrl}/>
        </div>
      ) : (
        <Locations pickLocation={handleLocation}/>
      )}
    </>
  )
}

export default App
