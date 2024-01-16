import React from 'react'
import Battle from './components/Battle'

function App() {
  return (
    <>
      <Battle playerPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'} enemyPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'}/>
    </>
  )
}

export default App
