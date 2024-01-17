import { useState, useEffect } from "react";

const Encounter = ({ location, onEncounter }) => {

  const [enemyPokemon, setEnemyPokemon] = useState();

  useEffect(() => {
    const fetchUrl = async () => {
      try {
<<<<<<< HEAD
        const response = await fetch("https://pokeapi.co/api/v2/location/"+location)
        const data =(await response.json());
=======
        const response = await fetch("https://pokeapi.co/api/v2/location/" + location)
        const data = (await response.json());
>>>>>>> 1be614f386d2396f7da9b04dfbc450463d0b01bc
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


<<<<<<< HEAD
  useEffect(()=> {
const fetchEncounters = async() => {
try {
    const res = await fetch(url);
    const data = await res.json();
    setEncounters(data["pokemon_encounters"]);
    // console.log(data["pokemon_encounters"]);
} catch (error) {
  console.log(error);
}
};
fetchEncounters();
}, [url]  );
=======
>>>>>>> 1be614f386d2396f7da9b04dfbc450463d0b01bc
  return (
    <div>
      <h1>
        {enemyPokemon && enemyPokemon.pokemon.name}
      </h1>
    </div>
  )
}
export default Encounter