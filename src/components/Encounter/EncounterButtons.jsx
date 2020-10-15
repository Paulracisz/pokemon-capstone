import React, { useContext } from "react";
import { UserContext } from "../Context/Context";
import $ from "jquery";
import { Button } from "react-bootstrap";

const fetchUrl = "http://127.0.0.1:8000/api/Pokemon";

function EncounterButtons() {
  const imageSpot = document.getElementById("encounterImage");
  
  const user = useContext(UserContext);

  console.log(imageSpot)

  const handleEncounter = (e) => {
    imageSpot.src = user.pokemon.front_normal_image;

    fetch(fetchUrl)
      .then((r) => r.json())
      .then((data) => {
        user.setPokemon(
          data[Math.floor(Math.random() * Object.values(data).length + 1)]
        );
        console.log(user.pokemon.name);
      });

    $("#encounterButton").hide();
    $("#catchThatPokemonButton").show();
    console.log(user.pokemon.name);

    document.getElementById(
      "moneyz"
    ).textContent = `Moneyz $ ${user.currentTrainer.currency}`;
    user.currentTrainer.currency += 25;
  };

  const handleCatchAttempt = (e) => {
    $("#catchThatPokemonButton").hide();
    $("#encounterButton").show();

    if (user.currentBall === "poke_ball") {
      if (user.currentTrainer.poke_ball < 1) {
        alert("You ran out of poke balls!");
      } else {
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
        user.currentTrainer.pokedexed.push(user.pokemon);
        alert(`You caught ${user.pokemon.name}!`);
      }
    } else if (user.currentBall === "great_ball") {
      if (user.currentTrainer.great_ball < 1) {
        alert("You ran out of great balls!");
      } else {
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
        user.currentTrainer.pokedexed.push(user.pokemon);
        document.getElementById("moneyz").textContent =
          user.currentTrainer.currency;
        alert(`You caught ${user.pokemon.name}!`);
      }
    } else if (user.currentBall === "ultra_ball") {
      if (user.currentTrainer.ultra_ball < 1) {
        alert("You ran out of ultra balls!");
      } else {
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
        user.currentTrainer.pokedexed.push(user.pokemon);
        document.getElementById("moneyz").textContent =
          user.currentTrainer.currency;
        alert(`You caught ${user.pokemon.name}!`);
      }
    } else if (user.currentBall === "master_ball") {
      if (user.currentTrainer.master_ball < 1) {
        alert("You ran out of master balls!");
      } else {
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
        user.currentTrainer.pokedexed.push(user.pokemon);
        document.getElementById("moneyz").textContent =
          user.currentTrainer.currency;
        alert(`You caught ${user.pokemon.name}!`);
      }
    }

    document.getElementById("catchThatPokemonButton").disabled = user.disabled;
    console.log(user.currentTrainer.pokedexed);
  };

  return (
    <React.Fragment>
      <div id="encounterButtonSpot">
        <Button id="encounterButton" onClick={handleEncounter}>
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