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
        <div>
            {pokemons && pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                    <img src={pokemon.sprites['front_default']} alt='pokemon' />
                    {pokemon.forms[0].name}
                    {pokemon.types.map(type => type.type.name).join(', ')}
                    {pokemon.stats[0]['base_stat']}
                    <button onClick={() => handleClick(pokemon.id)}>Pick!</button>
                </div>
            ))}
        </div>
    )
}

//on pick the other button should become disabled
export default PokemonPicker;