import { useState } from "react"
import { useEffect } from "react"
import gif from "../img/giphy.gif"

function Battle({friendly, enemy, onGoBack, onEnd, end}) {
  const [friendlyPokemon, setFriendlyPokemon] = useState(null)
  const [enemyPokemon, setEnemyPokemon] = useState(null)
  const [level, setLevel] = useState()
  const [btnText, setBtnText] = useState('Fight!')
  const [playerTurn, setPlayerTurn] = useState(true)


  useEffect(() => {
    const fetchData = async (prop, state) => {
      const response = await fetch(prop)
      const fetchedPokemon = await response.json()
      state(fetchedPokemon)
      addLevelToPokemon()
    }
    fetchData(friendly, setFriendlyPokemon)
    fetchData(enemy, setEnemyPokemon)
  }, [friendly, enemy])

  const addLevelToPokemon = () => {
    const randomLevel = Math.ceil(Math.random() * 100)
    setLevel(randomLevel)
  }

  const handleClick = () => {
    setBtnText('Next Turn!')
    if (playerTurn) {
      const obj = { ...enemyPokemon }
      const formulaAttack = friendlyPokemon.stats[1]['base_stat']
      const formulaDefense = enemyPokemon.stats[2]['base_stat']
      const formulaRandomNumber = Math.floor(Math.random() * (217 - 255 + 1) + 217)
      const damageFormula = Math.round(((((2 / 5 + 2) * formulaAttack * 60 / formulaDefense) / 50) + 2) * formulaRandomNumber / 255)
      if (obj.stats[0]['base_stat'] - damageFormula <= 0) {
        obj.stats[0]['base_stat'] = 0
      } else {
        obj.stats[0]['base_stat'] -= damageFormula
      }
      setEnemyPokemon(obj)
      setPlayerTurn(false)
    } else if (!playerTurn) {
      const obj = { ...friendlyPokemon }
      const formulaAttack = enemyPokemon.stats[1]['base_stat']
      const formulaDefense = friendlyPokemon.stats[2]['base_stat']
      const formulaRandomNumber = Math.floor(Math.random() * (217 - 255 + 1) + 217)
      const damageFormula = Math.round(((((2 / 5 + 2) * formulaAttack * 60 / formulaDefense) / 50) + 2) * formulaRandomNumber / 255)
      if (obj.stats[0]['base_stat'] - damageFormula <= 0) {
        obj.stats[0]['base_stat'] = 0
      } else {
        obj.stats[0]['base_stat'] -= damageFormula
      }
      setFriendlyPokemon(obj)
      setPlayerTurn(true)
    }
    handleEnd();
  }

  const handleBackBtnClick = () => {
    onGoBack()
  }

  const handleEnd = () => {
    if (friendlyPokemon.stats[0]['base_stat'] === 0) {
      onEnd(false);
      return 
    } 
    if(enemyPokemon.stats[0]['base_stat'] === 0) {
      onEnd(true);
      return 
    }
    return 
  }

  return (
    <>
      {friendlyPokemon && enemyPokemon && end === null? (
        <div>
          {
            <div className="pokemon1">
              <h2>{friendlyPokemon.name.charAt(0).toUpperCase() + friendlyPokemon.name.slice(1)}</h2>
              <img src={friendlyPokemon.sprites['front_default']} alt='pokemon' />
              <h2>Type: {friendlyPokemon.types.map(type => type.type.name).join(', ')}</h2>
              <h2>Level: {50}</h2>
              <h2>Weight: {friendlyPokemon.weight / 10} kg</h2>
              <h2>Height: {friendlyPokemon.height / 10} m</h2>
              <h1 className="stats">♥️ {friendlyPokemon.stats[0]['base_stat']} </h1>
              <h1 className="stats">⚔️ {friendlyPokemon.stats[1]['base_stat']} </h1>
              <h1 className="stats">⛨ {friendlyPokemon.stats[2]['base_stat']}</h1>
            </div>
          }
          <h6>
            <div>{btnText}</div>
            <button className="fightBtn" onClick={handleClick}></button>
          </h6>
          {
            <div className="pokemon2">
              <h2>{enemyPokemon['name'].charAt(0).toUpperCase() + enemyPokemon.name.slice(1)}</h2>
              <img src={enemyPokemon.sprites['front_default']} alt='pokemon' />
              <h2>Type: {enemyPokemon.types.map(type => type.type.name).join(', ')} </h2>
              <h2>Level: {level}</h2>
              <h2>Weight: {enemyPokemon.weight / 10} kg</h2>
              <h2>Height: {enemyPokemon.height / 10} m</h2>
              <h1 className="stats">♥️ {enemyPokemon.stats[0]['base_stat']} </h1>
              <h1 className="stats">⚔️ {enemyPokemon.stats[1]['base_stat']} </h1>
              <h1 className="stats">⛨ {enemyPokemon.stats[2]['base_stat']}</h1>
            </div>
          }
          <br />
        </div>
      ) : (end === true ? (
          <div className="endGame">
            YOU WON!
            <br/>
            <img src={gif} alt="fancy squirtle"/>
            <br />
            <button className="backButton" onClick={handleBackBtnClick}>Back to main page</button>
          </div>
        ) : (
          <div className="endGame">
            YOU LOST!
            <br/>
            <img src="https://i.pinimg.com/originals/06/c5/1a/06c51a3d8e3d3daa9c9ac1e2ef1348f3.gif" alt="cryingsquirtle running away"/>
            <br />
            <button className="backButton" onClick={handleBackBtnClick}>Back to main page</button>
          </div>
        )
      )}
    </>
  )
}

export default Battle