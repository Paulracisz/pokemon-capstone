import React, { useContext } from 'react';
import { UserContext } from '../Context/Context';
import './PokedexView.css';




function PokedexView() {
    const user = useContext(UserContext)
    // console.log(user.currentTrainer.pokedexed[1])
    return (
        <div className='pokedex-view'>
            <h1>Pokemon Pokédex</h1>
            <a href='/encounter' style={{color: 'yellow'}}> Back home</a>
            <ul>
                <li></li>
            </ul>
        </div>

    )

};

export default PokedexView;