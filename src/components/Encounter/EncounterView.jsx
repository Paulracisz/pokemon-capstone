import React from 'react';
import './EncounterView.css';
import pokemart from '../../img/pokemart.png';
import pokedex from '../../img/pokedexsmol.png'


function EncounterView() {

    return (
        <div className="encounter-view">
            <h1>Pokemon Encounter</h1>
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