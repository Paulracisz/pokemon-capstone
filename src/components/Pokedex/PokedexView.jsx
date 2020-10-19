import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/Context";
import { Card, Modal, Button } from "react-bootstrap";
import "./PokedexView.css";
import pokedex from '../../img/pokedexlarge.png'

function PokedexView() {
  const user = useContext(UserContext);

  const handleClose = () => user.setShow(false);
  const handleShow = () => user.setShow(true);
  const current_trainer = user.currentTrainer.id;

  useEffect(() => {
    const url = "http://127.0.0.1:8000/current_trainer";
    fetch(url, {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((response) => {
        user.setCurrentTrainer(response);
      });
  }, []);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/CaughtPokemon/";
    fetch(url)
      .then((res) => res.json())
      .then((response) => {
        const pokemonOwned = response.map(({ owner, pokemon, date_caught }) => {
          return { owner, pokemon, date_caught };
        });

        const newArr = [];
        for (let i = 0; i < pokemonOwned.length; i++) {
          if (pokemonOwned[i].owner === current_trainer) {
            newArr.push(pokemonOwned[i]);
          }
        }
        user.setCapturedPokemon(newArr);
      });
  }, [current_trainer]);

  useEffect(() => {
    async function fetchData() {
      const newArr = [];
      const url = "http://127.0.0.1:8000/api/Pokemon/";
      for (let i = 0; i < user.capturedPokemon.length; i++) {
        await fetch(url + user.capturedPokemon[i].pokemon)
          .then((res) => res.json())
          .then((response) => {
            newArr.push(response);
          });
      }
      user.setPokemonData(newArr);
    }
    fetchData();
  }, [user.capturedPokemon]);

  const handlePokedexData = (name) => {
    for (let i = 0; i < user.pokemonData.length; i++) {
      const pokemon = user.pokemonData[i];
      if (user.pokemonData[i].name === name) {
        user.setPokedexModal({
          name: name,
          image: pokemon.front_normal_image,
          ability_One: pokemon.ability_One,
          ability_Two: pokemon.ability_Two,
          ability_Three: pokemon.ability_Three,
          type_One: pokemon.type_One,
          type_Two: pokemon.type_Two,
        });
      }
    }
  };
  console.log(user.pokedexModal);

  return (
    <div className="pokedex-view">
      <h1>Pokemon Pokédex</h1>
      <a href="/encounter" style={{ color: "rgb(255, 204, 1)" }}>
        {" "}
        Back home
      </a>
      <div id="cardImageHolder">
        <img
          src={pokedex}
          id="pokedexMain"
        />
        <Card id="pokeList">
          <Card.Text>
            {user.pokemonData.map(({ name }) => (
              <li
                key={name}
                className="pokeLis"
                style={{ textTransform: "capitalize" }}
                onClick={() => {
                  handlePokedexData(name);
                  handleShow();
                }}
              >
                {name}
              </li>
            ))}
          </Card.Text>
        </Card>
      </div>

      <Modal show={user.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Gotta Catch 'em all!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <span>
              Name: {user.pokedexModal.name}
              <br />
            </span>
            <span>
              <img alt={user.pokedexModal.name} src={user.pokedexModal.image} />
              <br />
            </span>
            Abilities -<br />
            <span>
              Ability One: {user.pokedexModal.ability_One}
              <br />
              Ability Two: {user.pokedexModal.ability_Two}
              <br />
              Ability Three: {user.pokedexModal.ability_Three}
              <br />
            </span>
            Types -<br />
            <span>
              Type One: {user.pokedexModal.type_One}
              <br />
              Type Two: {user.pokedexModal.type_Two}
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PokedexView;