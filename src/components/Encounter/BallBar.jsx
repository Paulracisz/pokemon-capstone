import React from 'react';
import './BallBar.css';
import pokeBall from "../../img/pokeballsprite.png"
import greatBall from "../../img/greatball.png"
import ultraBall from "../../img/ultraball.png"
import masterBall from "../../img/masterballsprite.png"

function BallBar() {
    return (
    <>
    <div id="ballBox">
    <li>
    <img src={pokeBall} className="ballImg" alt=" a poke ball"></img>
    <h2>0</h2>
    </li>
    <li>
        <img src={greatBall} className="ballImg" alt="a great ball"></img>
        <h2>0</h2>
    </li>
    <li>
        <img src={ultraBall} className="ballImg" alt="an ultraball"></img>
        <h2>0</h2>
    </li>
    <li>
        <img src={masterBall} className="ballImg" alt="a master ball"></img>
        <h2>0</h2>
    </li>
    </div>
    </>
    );
}


export default BallBar;