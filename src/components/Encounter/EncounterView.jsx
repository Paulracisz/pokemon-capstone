import React, { useContext, useEffect } from "react";
import "./EncounterView.css";
import pokemart from "../../img/pokemart.png";
import pokedex from "../../img/pokedexsmol.png";
import BallBar from "./BallBar";
import { UserContext } from "../Context/Context";
import EncounterButtons from "./EncounterButtons";
import EncounterWindow from "./EncounterWindow";

function EncounterView(props) {
  const user = useContext(UserContext);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/current_trainer";
    fetch(url, {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        user.setCurrentTrainer(json);
      });
  }, []);

//   useEffect(() => {
//     const randomPokemon = Math.floor(Math.random() * 151 + 1);
//     const url = "http://127.0.0.1:8000/api/Pokemon/" + randomPokemon;
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => {
        
//         user.setPokemon(json);
//         document.getElementById("encounterImage").src = json.front_normal_image;
//       });
//   }, []);

  const handle_logout = () => {
    localStorage.removeItem('token');
    props.setToken('')
}


  return (
    <React.Fragment>
      <div className="encounter-view">
        <h1>Pokémon Encounter</h1>
        <h1>Trainer {user.currentTrainer.username}</h1>
        <h3 id = 'xpz'>Exp Points: {user.currentTrainer.exp}</h3>
        <h3 id = "level">Lvl: {user.currentTrainer.level}</h3>
        <h3 id="moneyz">Moneyz $ {user.currentTrainer.currency}</h3>
        <button className="btn btn-danger" onClick={handle_logout} >Logout</button>
        <EncounterWindow />
        <EncounterButtons />
        <div id="pokeMartDex">
          <div>
            <a href="/pokemart" style={{ color: "yellow" }}>
              <img src={pokemart} alt="pokemart" />
              Pokémart
            </a>
          </div>
          <div>
            <a href="/pokedex" style={{ color: "yellow" }}>
              <img src={pokedex} alt="pokedex" />
              Pokédex
            </a>
          </div>
        </div>
      </div>
      <BallBar />
    </React.Fragment>
  );
}

export default EncounterView;