import { useState } from "react"
import { useEffect } from "react"

function Battle(props) {
  const [pokemon, setPokemon] = useState(null)
  const [level, setLevel] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(props.playerPokemon)
      const fetchedPokemon = await response.json()
      setPokemon(fetchedPokemon)
      console.log(fetchedPokemon)
      addLevelToPokemon()
    }
    fetchData()
  }, [props.playerPokemon])

  const addLevelToPokemon = () => {
    const randomLevel = Math.ceil(Math.random() * 100)
    console.log(randomLevel)
    setLevel(randomLevel)
  }

  return (
    <>
      <div>
        {
        pokemon &&
        `Pokemon: ${pokemon.name} -
        Type: ${pokemon.types.map(type => type.type.name).join(', ')} -
        Level: ${level} - 
        HP: ${pokemon.stats[0]['base_stat']}
        `
        }
      </div>
    </>
  )
}

export default Battle