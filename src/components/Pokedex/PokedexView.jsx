import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from "../Context/Context";
import { Card, Modal, Button } from 'react-bootstrap';
import './PokedexView.css';


function PokedexView() {
    const user = useContext(UserContext)
    const [capturedPokemon, setCapturedPokemon] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const current_trainer = user.currentTrainer.id

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
        const url = "http://127.0.0.1:8000/api/CaughtPokemon/"
        fetch(url)
            .then((res) => res.json())
            .then((response) => {
                const pokemonOwned = response.map(({ owner, pokemon, date_caught }) => {
                    return { owner, pokemon, date_caught }
                })
                console.log(pokemonOwned)
                const newArr = []
                for (let i = 0; i < pokemonOwned.length; i++) {
                    if (pokemonOwned[i].owner === current_trainer) {
                        newArr.push(pokemonOwned[i])
                    }
                }
                setCapturedPokemon(newArr)
            })
    }, [current_trainer])

    useEffect(() => {
        async function fetchData() {
            const newArr = []
            const url = "http://127.0.0.1:8000/api/Pokemon/"
            for (let i = 0; i < capturedPokemon.length; i++) {
                await fetch(url + capturedPokemon[i].pokemon)
                    .then((res) => res.json())
                    .then((response) => {
                        newArr.push(response)
                    })
            }
            setPokemonData(newArr)
        }
        fetchData()
    }, [capturedPokemon])

    return (
        <div className='pokedex-view'>
            <h1>Pokemon Pokédex</h1>
            <a href='/encounter' style={{ color: 'yellow' }}> Back home</a>
            <Card style={{ width: '20rem' }}>
                <Card.Text>
                {pokemonData.map(({ name }) => (
                    <li key={name} style={{ textTransform: 'capitalize' }} onClick={handleShow}>{name}</li>
                ))}
                </Card.Text>
            </Card>
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </div>

    )

};

export default PokedexView;