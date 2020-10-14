import React, { useState, useEffect } from 'react';
import './EncounterView.css';
import pokemart from '../../img/pokemart.png';
import pokedex from '../../img/pokedexsmol.png'


function EncounterView() {
    const [pokemon, setPokemon] = useState([])
    const [currentTrainer, setCurrentTrainer] = useState([])
    useEffect(() => {

        const url = 'http://127.0.0.1:8000/current_trainer'
        fetch(url, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(json => {
                setCurrentTrainer(json)
            })
    }, [])
    console.log(currentTrainer)
    useEffect(() => {
        const randomPokemon = Math.floor(Math.random() * 151 + 1)
        const url = 'http://127.0.0.1:8000/api/Pokemon/' + randomPokemon
        fetch(url)
            .then(res => res.json())
            .then(json => {
                console.log(json)
                setPokemon(json)
            })
    }, [])
    //trainerData key index 
    // 0: username, 1: displayname, 2: bio, 3: pokedexedArray, 4-7: poke, great, ultra, and master ball
    // 8:exp, 9: currency, 10: level
    let trainerData = Object.values(currentTrainer).map((name) => (
        name
    ))
    //pokemonData key index
    // 0: name, 1: front image, 2: height, 3: weight, 4: ability one, 5: ability two, 6: ability three
    // 7: type one, 8: type two, 9: base exp
    let pokemonData = Object.values(pokemon).map((data) => (
        data
    ))
    console.log(pokemon)
    console.log({ trainerData })
    console.log({ pokemonData })


    return (
        <div className="encounter-view">
            <h1>Pokemon Encounter</h1>
            <h1>Trainer {trainerData[0]}</h1>
    <h3>Exp Points: {trainerData[8]}</h3>
    <h3>Lvl: {trainerData[10]}</h3>
    <h3>Moneyz $ {trainerData[9]}</h3>

            <img src={pokemonData[1]} alt={pokemonData[0]} />
            <h3>A wild {pokemonData[0]} has appeared!</h3>
            <div>

                <a href='/pokemart' style={{ color: 'yellow' }}>
                    <img src={pokemart} alt='pokemart' />
                Pokémart

                </a>
            </div>
            <div>
                <a href='/pokedex' style={{ color: 'yellow' }}>

                    <img src={pokedex} alt='pokedex' />
                Pokédex
                </a>

            </div>
        </div>

    )

};

export default EncounterView;