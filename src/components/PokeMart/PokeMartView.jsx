import React from 'react';
import './PokeMartView.css';
import pokemartbackground from '../../img/pokemartbackgroundv3.jpg'

function PokeMartView() {

    return (
        <div className='pokemart-view'>
            <div className='pokemart-background'>
                <img className='stretch' src={pokemartbackground} alt='pokemart background'></img>
            </div>
            <h1>Pokemon PokeMart</h1>
            <a href='/encounter' style={{color: 'yellow'}}> Back home</a>
        </div>
    )

};

export default PokeMartView;