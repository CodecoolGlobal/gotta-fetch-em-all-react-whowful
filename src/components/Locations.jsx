import { useState, useEffect } from "react";

const Locations = () => {

  const [location, setlocations] = useState();
  const [battlelocation, setBattleLocation] = useState();

  useEffect(()=>{
    const fetcData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/location/")
        const locations = await response.json();
        console.log(locations.results);
        setlocations(locations.results)
        console.log(location);
      } catch (error) {
        console.log("Error fetching data")
      }
    };
    fetcData();
  }, []);

const handleChange = (event) => {
  setBattleLocation(event.target.value);
};
console.log(battlelocation);
  return (<div>
    <label htmlFor="locationsDropdown">Select a Location:</label>
    <select id="locationsDropdown" onChange={handleChange}>
   
      {location &&   location.map((place, index) => (
        <option key={index} value={place.name}>{place.name} </option> )) }
      </select>
  </div>
)}

export default Locations;