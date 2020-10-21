import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/Context";
import { Card, Modal, Button } from "react-bootstrap";
import "./PokedexView.css";
import pokedex from '../../img/pokedexlarge.png';
import pokeball from '../../img/pokeball.png';

function PokedexView() {
    const user = useContext(UserContext);
    const handleClose = () => user.setShow(false);
    const handleShow = () => user.setShow(true);
    console.log(user.currentTrainer)
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
        const url = "http://127.0.0.1:8000/api/CaughtPokemon";
        fetch(url, {
            headers: {
                Authorization: `JWT ${localStorage.getItem("token")}`
            }
        })
        .then((res) => res.json())
        .then((response) => {
            user.setCapturedPokemon(response);
        })
    }, []);


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
    }, []);


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

    return (
        <div className="pokedex-view">
            <h1>Pokemon Pokédex</h1>
            <a href="/encounter" style={{ color: "rgb(255, 204, 1)" }}>
                Back home
            </a>
            <div id="trainerInfo">
                <h1>Trainer Info:</h1>
                <ul style={{ textAlign: 'left' }}>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Trainer: {user.currentTrainer.username}</li>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Display Name: {user.currentTrainer.displayname}</li>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Email: {user.currentTrainer.email_address}</li>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Personal Website: {user.currentTrainer.personal_website}</li>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Bio: {user.currentTrainer.bio}</li>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Lvl: {user.currentTrainer.level}</li>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Exp: {user.currentTrainer.exp}</li>
                    <li><img style={{width: '30px'}}src={pokeball} alt="pokeball"/> Moneyz: {user.currentTrainer.currency}</li>
                </ul>
            </div>
            <div id="cardImageHolder">
                <img
                    src={pokedex}
                    id="pokedexMain"
                    alt="pokedex"
                />
                <Card id="pokeList">
                    <Card.Text>
                        {user.pokemonData.map(({ name }) => (
                            
                            <li
                                key={name}
                                className="pokeLis"
                                style={{ textTransform: "capitalize", cursor: 'pointer' }}
                                onClick={() => {
                                    handlePokedexData(name);
                                    handleShow();
                                }}
                            >
                                <img style={{width: '18px'}}src={pokeball} alt="pokeball"/> {name}
                            </li>
                        ))}
                    </Card.Text>
                </Card>
            </div>

            <Modal className='pokedexModal' show={user.show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title style={{ margin: '0 auto'}}>  Gotta Catch 'em all!</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ fontSize: '22px',textTransform: 'capitalize', backgroundImage: 'linear-gradient(red, white)' }} >
                    <div>
                        <span>
                            name: {user.pokedexModal.name}
                            <br />
                        </span>
                        <span>
                            <img alt={user.pokedexModal.name} src={user.pokedexModal.image} />
                            <br />
                        </span>
            abilities: <br />
                        <span>
                            ability one: {user.pokedexModal.ability_One}
                            <br />
              ability two: {user.pokedexModal.ability_Two}
                            <br />
              ability three: {user.pokedexModal.ability_Three}
                            <br />
                        </span>
            types: <br />
                        <span>
                            type one: {user.pokedexModal.type_One}
                            <br />
              type two: {user.pokedexModal.type_Two}
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