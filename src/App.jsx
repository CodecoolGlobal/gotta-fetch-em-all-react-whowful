import React, { useEffect, useState } from 'react'
import Locations from './components/Locations';
import Battle from './components/Battle'

function App() {

  return (
    <>
      <Battle playerPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'} enemyPokemon={'https://pokeapi.co/api/v2/pokemon/charizard'} />
      <div>
        <Locations />
      </div>
    </>
  )
}

export default App
