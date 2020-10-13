import React, { useState, useEffect } from 'react';
import { useFetchUrl } from '../hooks';
import './PokedexView.css';

function PokedexView() {

    const [pokemons, setPokemons] = useState([]);
    const fetchUrl = useFetchUrl();

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/Pokemon/'
        fetchUrl(url, (data) => {
            const pokemonNames = data.map(({name}) => {
                return name
            })
            setPokemons(pokemonNames)
        })
    }, [])



    console.log({pokemons})
    return (
        <div className='pokedex-view'>
            <h1>Pokemon Pokédex</h1>
            <a href='/encounter' style={{color: 'yellow'}}> Back home</a>
        </div>

    )

};

export default PokedexView;