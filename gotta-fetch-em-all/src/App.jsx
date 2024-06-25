import { useState } from 'react'
import Locations from './components/Locations';
import Battle from './components/Battle'
import DisplayLocation from './components/DisplayLocation';
import Encounter from './components/Encounter';
import PokemonPicker from './components/PokemonPicker';

function App() {
  const [battleLocation, setBattleLocation] = useState(null);
  const [enemyUrl, setEnemyUrl] = useState(null);
  const [friendlyUrl, setFriendlyUrl] = useState(null);
  const [gameEnded, setGameEnded] = useState(false);
  const [won, setWon] = useState(null);

  const handleLocation = (event) => {
    setBattleLocation(event.target.value);
  };

  const handleGoBack = () => {
    setBattleLocation(null);
    setEnemyUrl(null);
    setFriendlyUrl(null);
    setGameEnded(false);
    setWon(null);
  }

  const handleEndGame = (isWon) => {
    setGameEnded(true);
    setWon(isWon);
  }

  return (
    <>
      {gameEnded ? (
        <Battle friendly={friendlyUrl} enemy={enemyUrl} onGoBack={handleGoBack} onEnd={handleEndGame} end={won}/>) : 
        ((battleLocation && friendlyUrl && enemyUrl) ? (
        <div>
          <DisplayLocation location={battleLocation} onGoBack={handleGoBack}/>
          <Encounter location={battleLocation} onEncounter={setEnemyUrl}/>
          <Battle friendly={friendlyUrl} enemy={enemyUrl} onGoBack={handleGoBack} onEnd={handleEndGame} end={won}/>
        </div>
        ) : ((battleLocation && friendlyUrl) ? (
          <div>
            <DisplayLocation location={battleLocation} onGoBack={handleGoBack}/>
            <Encounter location={battleLocation} onEncounter={setEnemyUrl}/>
          </div>
        ) : (
        <div>
          <Locations pickLocation={handleLocation}/>
          <PokemonPicker onPick={setFriendlyUrl}/>
        </div>)))
      }
    </>
  )
}

export default App
