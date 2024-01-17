import { useState } from "react"
import { useEffect } from "react"

function Battle(props) {
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
      console.log(fetchedPokemon)
      addLevelToPokemon()
    }
    fetchData(props.friendly, setFriendlyPokemon)
    fetchData(props.enemy, setEnemyPokemon)
  }, [props.friendly, props.enemy])

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
  }

  return (
    <>
      {friendlyPokemon && enemyPokemon && (friendlyPokemon.stats[0]['base_stat'] !== 0 && enemyPokemon.stats[0]['base_stat'] !== 0) ? (
        <div>
          <div>
            {
              friendlyPokemon &&
              `Pokemon: ${friendlyPokemon.name} -
        Type: ${friendlyPokemon.types.map(type => type.type.name).join(', ')} -
        Level: ${50} - 
        HP: ${friendlyPokemon.stats[0]['base_stat']}
        `
            }
          </div>
          <div>
            {
              enemyPokemon &&
              `Pokemon: ${enemyPokemon.name} -
        Type: ${enemyPokemon.types.map(type => type.type.name).join(', ')} -
        Level: ${level} - 
        HP: ${enemyPokemon.stats[0]['base_stat']}
        `
            }
          </div>
          <button onClick={handleClick}>{btnText}</button>
        </div>
      ) : (
        friendlyPokemon && friendlyPokemon.stats[0]['base_stat'] === 0 ? (<div>YOU LOST!</div>) : (<div>YOU WON!</div>)
      )}
    </>
  )
}

export default Battle