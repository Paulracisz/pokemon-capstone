import React from 'react';
import './PokedexView.css';

function PokedexView() {

    return (
        <div className='pokedex-view'>
            <h1>Pokemon Pokédex</h1>
            <a href='/encounter' style={{color: 'yellow'}}> Back home</a>
        </div>

    )

};

export default PokedexView;