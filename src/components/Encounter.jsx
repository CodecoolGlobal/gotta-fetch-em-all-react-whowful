import { useState, useEffect } from "react";

const Encounter = ({ location, onEncounter }) => {

  const [enemyPokemon, setEnemyPokemon] = useState();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/location/" + location)
        const data = (await response.json());
        const url = data.areas[0].url;
        const res = await fetch(url);
        const areaData = await res.json();
        const encounters = areaData["pokemon_encounters"];
        const randomNumber = Math.floor(Math.random() * (encounters.length))
        setEnemyPokemon(encounters[randomNumber]);
        onEncounter(encounters[randomNumber].pokemon.url);
      } catch (error) {
        console.log(error)
      }
    };
    fetchUrl();
  }, [location, onEncounter]);


  return (
    <div>
      <h1>
        {enemyPokemon && enemyPokemon.pokemon.name}
      </h1>
    </div>
  )
}
export default Encounter