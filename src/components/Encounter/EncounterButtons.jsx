import React, { useContext, useState } from "react";
import { UserContext } from "../Context/Context";
import $ from "jquery";
import { Button, Alert } from "react-bootstrap";

function EncounterButtons() {
  const imageSpot = document.getElementById("encounterImage");
  const user = useContext(UserContext);
  const [show, setShow] = useState(false);


  const handleEncounter = (e) => {
    const randomPokemon = Math.floor(Math.random() * 151 + 1);
    const url = "http://127.0.0.1:8000/api/Pokemon/" + randomPokemon
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        user.setPokemon(response);
        imageSpot.src = response.front_normal_image
        user.setPokemonText(response.name)
      }, [user]);

    $("#encounterButton").hide();
    $("#catchThatPokemonButton").show();

    document.getElementById(
      "moneyz"
    ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
    console.log(user.cpturedPokemon, 'Captured!')
  };

  const pokemonCaught = () => {
    const url = 'http://127.0.0.1:8000/api/CaughtPokemon/'
    const trainerId = user.currentTrainer.id
    const pokemonId = user.pokemon.id
    const currentTime = new Date();
    const utcDate = new Date(currentTime.getTime() - currentTime.getTimezoneOffset() * 60000).toISOString();
    
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ owner: trainerId, pokemon: pokemonId, date_caught: utcDate })
    })
  }

  
console.log(user.capturedPokemon)
  const handleCatchAttempt = (e) => {

    $("#catchThatPokemonButton").hide();
    $("#encounterButton").show();
    if (user.currentBall === "poke_ball") {
      if (user.currentTrainer.poke_ball < 1) {
        alert("You ran out of poke balls!");
      } else {
        pokemonCaught()
        const trainerPokeBall = user.currentTrainer.poke_ball -= 1;
        const trainerExp = user.currentTrainer.exp += 10;
        const trainerCurrency = user.currentTrainer.currency += 100
          const url = 'http://127.0.0.1:8000/api/PokemonTrainer/'
          const trainerId = user.currentTrainer.id
          fetch(url + trainerId + '/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({poke_ball: trainerPokeBall, exp: trainerExp, currency: trainerCurrency})
          })
         
        document.getElementById(
          "xpz"
        ).textContent = `Exp Points: ${user.currentTrainer.exp}`;
        document.getElementById(
          "level"
        ).textContent = `Lvl: ${user.currentTrainer.level}`;
        document.getElementById(
          "moneyz"
        ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
        setShow(true)
      }
    } else if (user.currentBall === "great_ball") {
      if (user.currentTrainer.great_ball < 1) {
        alert("You ran out of great balls!");
      } else {
        pokemonCaught()
        const trainerGreatBall = user.currentTrainer.great_ball -= 1;
        const trainerExp = user.currentTrainer.exp += 10;
        const trainerCurrency = user.currentTrainer.currency += 100
          const url = 'http://127.0.0.1:8000/api/PokemonTrainer/'
          const trainerId = user.currentTrainer.id
          fetch(url + trainerId + '/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({great_ball: trainerGreatBall, exp: trainerExp, currency: trainerCurrency})
          })

        document.getElementById(
          "xpz"
        ).textContent = `Exp Points: ${user.currentTrainer.exp}`;
        document.getElementById(
          "level"
        ).textContent = `Lvl: ${user.currentTrainer.level}`;
        document.getElementById(
          "moneyz"
        ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
        document.getElementById("moneyz").textContent =
          user.currentTrainer.currency;
      }
    } else if (user.currentBall === "ultra_ball") {
      if (user.currentTrainer.ultra_ball < 1) {
        alert("You ran out of ultra balls!");
      } else {
        pokemonCaught()
        const trainerUltraBall = user.currentTrainer.ultra_ball -= 1;
        const trainerExp = user.currentTrainer.exp += 10;
        const trainerCurrency = user.currentTrainer.currency += 100
          const url = 'http://127.0.0.1:8000/api/PokemonTrainer/'
          const trainerId = user.currentTrainer.id
          fetch(url + trainerId + '/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ultra_ball: trainerUltraBall, exp: trainerExp, currency: trainerCurrency})
          })

        document.getElementById(
          "xpz"
        ).textContent = `Exp Points: ${user.currentTrainer.exp}`;
        document.getElementById(
          "level"
        ).textContent = `Lvl: ${user.currentTrainer.level}`;
        document.getElementById(
          "moneyz"
        ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
        document.getElementById("moneyz").textContent =
          user.currentTrainer.currency;
      }
    } else if (user.currentBall === "master_ball") {
      if (user.currentTrainer.master_ball < 1) {
        alert("You ran out of master balls!");
      } else {
        pokemonCaught()
        const trainerMasterBall = user.currentTrainer.master_ball -= 1;
        const trainerExp = user.currentTrainer.exp += 10;
        const trainerCurrency = user.currentTrainer.currency += 100
          const url = 'http://127.0.0.1:8000/api/PokemonTrainer/'
          const trainerId = user.currentTrainer.id
          fetch(url + trainerId + '/', {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({master_ball: trainerMasterBall, exp: trainerExp, currency: trainerCurrency})
          })

        document.getElementById(
          "xpz"
        ).textContent = `Exp Points: ${user.currentTrainer.exp}`;
        document.getElementById(
          "level"
        ).textContent = `Lvl: ${user.currentTrainer.level}`;
        document.getElementById(
          "moneyz"
        ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
        document.getElementById("moneyz").textContent =
          user.currentTrainer.currency;
      }
    }

    document.getElementById("catchThatPokemonButton").disabled = user.disabled;
  };

  console.log(user.ownedPokemon)

  return (
    <React.Fragment>
      <Alert id="alertWindow" style={{ color: "rgb(255, 204, 1)", width: '28rem'}} show={show} variant="light" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>You Caught The Pokémon!!</Alert.Heading>
      </Alert>
      <div id="encounterButtonSpot">
        <Button id="encounterButton" onClick={() => handleEncounter()}>
          Search for a pokemon!
        </Button>
        <Button
          id="catchThatPokemonButton"
          style={{ display: "none" }}
          onClick={handleCatchAttempt}
        >
          Catch It!!!!
        </Button>
      </div>
    </React.Fragment>
  );
}

export default EncounterButtons;