import { useEffect, useState } from "react";

function PokemonPicker({ onPick }) {
    const [pokemons, setPokemons] = useState();
    const generateRandomNumbers = () => {
        const numbers = [];
        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.ceil(Math.random() * (1000 - 1) + 1);
            if (numbers.includes(randomNumber)) {
                numbers.push(randomNumber + 1);
            }
            numbers.push(randomNumber);
        }
        return numbers;
    }

    useEffect(() => {
        const numbers = generateRandomNumbers();
        const fetchPokemon = async (number) => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
            }
        };

        const fetchDataForAllPokemons = async () => {
            const pokemonPromises = numbers.map((number) => fetchPokemon(number));
            try {
                const pokemonData = await Promise.all(pokemonPromises);
                setPokemons(pokemonData);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDataForAllPokemons();
    }, []);

    const handleClick = (id) => {
        onPick(`https://pokeapi.co/api/v2/pokemon/${id}`);
    }

    pokemons && console.log(pokemons);

    return (
        <div className="options-container">
            {pokemons && pokemons.map((pokemon) => (
                <div key={pokemon.id} className="pickablePokemon">
                    <img src={pokemon.sprites['front_default']} alt='pokemon' className="pickablePokemon"/>
                    <h3 className="option-name">{pokemon.forms[0].name[0].toUpperCase() + pokemon.forms[0].name.slice(1)}</h3>
                    <h4 className="option-types">Type: {pokemon.types.map(type => type.type.name).join(', ')}</h4>
                    <h3 className="option-stats">♥️ {pokemon.stats[0]['base_stat']}</h3>
                    <h3 className="option-stats">⚔️ {pokemon.stats[1]['base_stat']}</h3>
                    <h3 className="option-stats">⛨ {pokemon.stats[2]['base_stat']}</h3>
                    <div>
                        <button className="pickBtn" onClick={() => handleClick(pokemon.id)}></button> 
                    </div>
                </div>
            ))}
        </div>
    )
}

//on pick the other button should become disabled
export default PokemonPicker;