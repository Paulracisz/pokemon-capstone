import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import $ from "jquery";
import { Button } from "react-bootstrap";

function EncounterButtons() {
  const imageSpot = document.getElementById("encounterImage");
  const user = useContext(UserContext);

  const handleEncounter = (e) => {
    const randomPokemon = Math.floor(Math.random() * 151 + 1);
    const url = "http://127.0.0.1:8000/api/Pokemon/" + randomPokemon
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        user.setPokemon(response);
        imageSpot.src = response.front_normal_image
      }, [user]);

    $("#encounterButton").hide();
    $("#catchThatPokemonButton").show();

    document.getElementById(
      "moneyz"
    ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
    user.currentTrainer.currency += 25;
  };

  const pokemonCaught = () => {
    const url = 'http://127.0.0.1:8000/api/CaughtPokemon/'
    const trainerId = user.currentTrainer.id
    const pokemonId = user.pokemon.id
    const currentTime = Date();
    const utcDate = Date(currentTime.getTime() - currentTime.getTimezoneOffset() * 60000).toISOString();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ owner: trainerId, pokemon: pokemonId, date_caught: utcDate })
    })
  }

  const handleCatchAttempt = (e) => {

    $("#catchThatPokemonButton").hide();
    $("#encounterButton").show();
    if (user.currentBall === "poke_ball") {
      if (user.currentTrainer.poke_ball < 1) {
        alert("You ran out of poke balls!");
      } else {
        pokemonCaught()
        user.currentTrainer.poke_ball -= 1;
        user.currentTrainer.exp += 10;
        document.getElementById(
          "xpz"
        ).textContent = `Exp Points: ${user.currentTrainer.exp}`;
        document.getElementById(
          "level"
        ).textContent = `Lvl: ${user.currentTrainer.level}`;
        document.getElementById(
          "moneyz"
        ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
        alert(`You caught ${user.pokemon.name}!`);
      }
    } else if (user.currentBall === "great_ball") {
      if (user.currentTrainer.great_ball < 1) {
        alert("You ran out of great balls!");
      } else {
        pokemonCaught()
        user.currentTrainer.great_ball -= 1;
        user.currentTrainer.exp += 10;
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
        alert(`You caught ${user.pokemon.name}!`);
      }
    } else if (user.currentBall === "ultra_ball") {
      if (user.currentTrainer.ultra_ball < 1) {
        alert("You ran out of ultra balls!");
      } else {
        pokemonCaught()
        user.currentTrainer.ultra_ball -= 1;
        user.currentTrainer.exp += 10;
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
        alert(`You caught ${user.pokemon.name}!`);
      }
    } else if (user.currentBall === "master_ball") {
      if (user.currentTrainer.master_ball < 1) {
        alert("You ran out of master balls!");
      } else {
        pokemonCaught()
        user.currentTrainer.master_ball -= 1;
        user.currentTrainer.exp += 10;
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
        alert(`You caught ${user.pokemon.name}!`);
      }
    }

    document.getElementById("catchThatPokemonButton").disabled = user.disabled;
  };

  return (
    <React.Fragment>
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