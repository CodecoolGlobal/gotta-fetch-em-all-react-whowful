import { useState, useEffect } from "react";

const Locations = (props) => {

  const [location, setlocations] = useState();
  useEffect(() => {
    const fetcData = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/location/")
        const locations = await response.json();
        setlocations(locations.results)
      } catch (error) {
        console.log("Error fetching data")
      }
    };
    fetcData();
  }, []);

  return (<div>
    <label htmlFor="locationsDropdown">Choose a battle location:</label>
    <select id="locationsDropdown" onChange={props.pickLocation} defaultValue={"default"}>
      <option value="default" disabled>Select a place</option>
      {location && location.map((place, index) => (
        <option key={index} value={place.name}>
          {place.name && place.name.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
          ).join(' ')}
        </option>
      ))}
    </select>
  </div>
  )
}

export default Locations;