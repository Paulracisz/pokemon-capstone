import React, { useContext, useEffect, useState } from "react";
import "./EncounterView.css";
import pokemart from "../../img/pokemart.png";
import pokedex from "../../img/pokedexsmol.png";
import BallBar from "./BallBar";
import { UserContext } from "../Context/Context";
import EncounterButtons from "./EncounterButtons";
import EncounterWindow from "./EncounterWindow";
import { Alert } from 'react-bootstrap';

function EncounterView(props) {
  const user = useContext(UserContext);

  const [errMsg, setErrMsg] = useState('')
  const [show, setShow] = useState(false);
  useEffect(() => {
    const url = "http://127.0.0.1:8000/current_trainer";
    fetch(url, {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
        user.setCurrentTrainer(res.json())
      })
      .catch((err) => {
        setErrMsg(err.message)
        setShow(true)
      })
  }, []);

  console.log(user.currentTrainer)

  const handle_logout = () => {
    localStorage.removeItem('token');
    props.setToken('')
  }


  return (
    <React.Fragment>
      <div className="encounter-view">
        <h1>Pokémon Encounter</h1>
        <h1>Trainer {user.currentTrainer.username}</h1>
        <h3 id='xpz'>Exp Points: {user.currentTrainer.exp}</h3>
        <h3 id="level">Lvl: {user.currentTrainer.level}</h3>
        <h3 id="moneyz">Moneyz $ {user.currentTrainer.currency}</h3>
        <Alert id="alertWindow" style={{ color: "rgb(255, 204, 1)", width: '18rem', zIndex: '3', opacity:'90%'}} show={show} variant="light" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>
                    {errMsg ? errMsg :""}
                    </Alert.Heading>
                    </Alert>
        <EncounterWindow />
        <EncounterButtons />
        <div id="pokeMartDex">
          <div>
            <a href="/pokemart" style={{ color: "rgb(255, 204, 1)" }}>
              <img src={pokemart} alt="pokemart" />
              Pokémart
            </a>
          </div>
          <div style={{ marginTop: "20px" }}>
            <a href="/pokedex" style={{ color: "rgb(255, 204, 1)" }}>
              <img src={pokedex} alt="pokedex" />
              Pokédex
            </a>
          </div>
          <button style={{ marginTop: "10px" }} className="btn btn-danger" onClick={handle_logout} >Logout</button>
        </div>
      </div>
      <BallBar />
    </React.Fragment>
  );
}

export default EncounterView;