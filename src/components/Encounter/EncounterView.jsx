import React, {useState, useEffect} from 'react';
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
        const url = 'http://127.0.0.1:8000/api/Pokemon' 
        fetch(url)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            setPokemon(json)
        })
    }, [])

    let trainerData = Object.values(currentTrainer).map((name) => (
        name
    ))
        console.log(pokemon)
        console.log({trainerData})


    return (
        <div className="encounter-view">
            <h1>Pokemon Encounter</h1>
            <h1>{trainerData[0]}</h1>
            <div>
                
                <a href='/pokemart' style={{color: 'yellow'}}>
                <img src={pokemart} alt='pokemart'/>
                Pokémart

                </a>
            </div>
            <div>
                <a href='/pokedex' style={{color: 'yellow'}}>

                <img src={pokedex} alt='pokedex'/>
                Pokédex
                </a>
                
            </div>
        </div>

    )

};

export default EncounterView;