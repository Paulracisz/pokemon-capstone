import React, { useContext } from "react";
import "./BallBar.css";
import pokeBall from "../../img/pokeballsprite.png";
import greatBall from "../../img/greatball.png";
import ultraBall from "../../img/ultraball.png";
import masterBall from "../../img/masterballsprite.png";
import { UserContext } from "../Context/Context";

function BallBar() {
  const user = useContext(UserContext);
  const catchButton = document.getElementById('catchThatPokemonButton')

  const handleClick = (e) => {
    catchButton.disabled = user.disabled;
    if (catchButton.disabled) {
      user.setDisabled(false)
    }
    const buttons = document.getElementsByClassName('buttonSelection')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.border = 'none'
    }
    e.currentTarget.style.border = '5px black solid'
    
    console.log(user.currentBall)
    if (e.currentTarget.id === 'poke_ball') {
      user.setCurrentBall(e.currentTarget.id)
    } else if (e.currentTarget.id === 'great_ball') {
      user.setCurrentBall(e.currentTarget.id)
    } else if (e.currentTarget.id === 'ultra_ball') {
      user.setCurrentBall(e.currentTarget.id)
    } else if (e.currentTarget.id === 'master_ball') {
      user.setCurrentBall(e.currentTarget.id)
    }
    console.log(user.currentBall)
  }

  return (
    <>
      <div id="ballBox">
        <li>
            <div className="buttonSelection"  id="poke_ball" onClick = {handleClick}>
              <img src={pokeBall} className="ballImg" alt=" a poke ball"></img>
              <h2 className="ballText">
                {user.currentTrainer.poke_ball}
              </h2>
            </div>
        </li>
        <li>
          <div className="buttonSelection" id="great_ball" onClick = {handleClick}>
            <img src={greatBall} className="ballImg" alt="a great ball"></img>
            <h2 className="ballText" >
              {user.currentTrainer.great_ball}
            </h2>
          </div>
        </li>
        <li>
          <div className="buttonSelection" id="ultra_ball" onClick = {handleClick}>
            <img src={ultraBall} className="ballImg" alt="an ultraball"></img>
            <h2 className="ballText" id="ultra_ball">
              {user.currentTrainer.ultra_ball}
            </h2>
          </div>
        </li>
        <li>
          <div className="buttonSelection" id="master_ball" onClick = {handleClick}>
            <img src={masterBall} className="ballImg" alt="a master ball"></img>
            <h2 className="ballText" >
              {user.currentTrainer.master_ball}
            </h2>
          </div>
        </li>
      </div>
    </>
  );
}
export default BallBar;