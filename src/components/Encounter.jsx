import { useState, useEffect } from "react";

const Encounter = (props) => {

  const {location} = props;
const [encounters,setEncounters] = useState();
const [url,setUrl] = useState();
  
useEffect(()=>{
    const fetchUrl = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/location/"+location)
        const data =(await response.json());
        // console.log(data.areas[0].url)
        const url = data.areas[0].url;
        setUrl(url);
      } catch (error) {
        console.log(error)
      }
    };
    fetchUrl();
  }, []);

  useEffect(()=> {
const fetchEncounters = async() => {
try {
    const res = await fetch(url);
    const data = await res.json();
    setEncounters(data["pokemon_encounters"]);
   console.log(data["pokemon_encounters"][0].pokemon.name);
    // console.log(data["pokemon_encounters"]);
} catch (error) {
  console.log(error);
}
};
fetchEncounters();
}, [url]  );
  return (
    <div>
      <h1>
        {encounters &&  encounters[0].pokemon.name}
      </h1>
    </div>
  )
}
export default Encounter