import React, {useState, useEffect } from 'react';
import { useFetchUrl } from '../hooks';
import './EncounterView.css';
import pokemart from '../../img/pokemart.png';
import pokedex from '../../img/pokedexsmol.png'

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let mathResult = Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    const [setPokemon] = useState([]);
    return mathResult 
  }

  
  function EncounterView() {
      useEffect(() => {
          const fetchUrl = useFetchUrl();
          getRandomInt(1, 151)
          const url = 'http://127.0.0.1:8000/api/pokemon/{mathResult}'
          console.log(url)
          fetchUrl(url, (data) => setPokemon(data))
      }, [])
      
    return (
        <div className="encounter-view">
            <h1>Pokemon Encounter</h1>
            <div id="enc-box">
                <img></img>
            </div>
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