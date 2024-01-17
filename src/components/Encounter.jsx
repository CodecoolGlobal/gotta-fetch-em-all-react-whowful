import { useState, useEffect } from "react";

const Encounter = ({ location, onEncounter }) => {

  const [enemyPokemon, setEnemyPokemon] = useState();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        console.log('fetching' + location);
        const response = await fetch("https://pokeapi.co/api/v2/location/" + location)
        const data = (await response.json());
        if (data.areas.length !== 0) {
          const url = data.areas[0].url;
          const res = await fetch(url);
          const areaData = await res.json();
          if (areaData['pokemon_encounters'] && areaData["pokemon_encounters"].length !== 0) {
            const encounters = areaData["pokemon_encounters"];
            const randomNumber = Math.floor(Math.random() * (encounters.length));
            console.log('setting pokemon from' + location);
            setEnemyPokemon(encounters[randomNumber]);
            onEncounter(encounters[randomNumber].pokemon.url);
          } else {
            setEnemyPokemon(null);
          }
        } else {
          setEnemyPokemon(null);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUrl();
  }, [location, onEncounter]);


  return (
    <div>
      <h2>
        {enemyPokemon === null ? ("This location doesn't seem to have any pokémon!") : enemyPokemon ? (`You encountered ${enemyPokemon.pokemon.name}`) : null}
      </h2>
    </div>
  )
}
export default Encounter