import React, { useState, useContext } from 'react';
import { UserContext } from "../Context/Context";
import './PokeMartView.css';
import pokemartbackground from '../../img/pokemartbackgroundv3.jpg';
import { Card, ListGroupItem } from 'react-bootstrap';
import greatBall from "../../img/greatball.png";
import pokeBall from "../../img/pokeballsprite.png";
import ultraBall from "../../img/ultraball.png";
import masterBall from "../../img/masterballsprite.png";
import { Alert } from "react-bootstrap";
import Meowth from "../../img/meowth.png";




function PokeMartView() {
    const url = "http://127.0.0.1:8000/api/PokemonTrainer/";
    const user = useContext(UserContext);
    const [show, setShow] = useState(false);
    const initalState = {
        pokeball: 0,
        greatball: 0,
        ultraball: 0,
        masterball: 0
    }

    const [poke_ball, setPokeball] = useState(initalState);
    const handleChange = (e) => {
        let { name, value } = e.target;
        
        setPokeball(prevState => ({
            ...prevState,
            [name]: Number(value)
        }))
        if (value < 0) {
            value = 0
        }
    }

    const handleSubmit = (e, value) => {
        if (pokeTotal > user.currentTrainer.currency) {
            window.alert("You do not have enough money.");
        } else {
            let finalTotal = user.currentTrainer.currency - pokeTotal;
            let pokeBallTotal = user.currentTrainer.poke_ball + poke_ball.pokeball;
            let greatBallTotal = user.currentTrainer.great_ball + poke_ball.greatball;
            let ultraBallTotal = user.currentTrainer.ultra_ball + poke_ball.ultraball;
            let masterBallTotal = user.currentTrainer.master_ball + poke_ball.masterball;
            // setting the id of the current user so we can use it in reference to our endpoint
            let currentTrainer = user.currentTrainer.id;
            fetch(url + currentTrainer + "/", {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ currency: finalTotal, poke_ball: pokeBallTotal, great_ball: greatBallTotal, ultra_ball: ultraBallTotal, master_ball: masterBallTotal})
            })
            setShow(true);
        }
    }
    const pokeTotal = poke_ball.pokeball * 50 + poke_ball.greatball * 100 + poke_ball.ultraball * 300 + poke_ball.masterball * 800;


    return (
        <div className='pokemart-view'>
            <div id = "moneyzDisplay">Moneyz: {user.currentTrainer.currency} </div>
            <div className='pokemart-background'>
                <img className='stretch' src={pokemartbackground} alt='pokemart background'></img>
            </div>
            <h1>Pokemon PokeMart</h1>
            <a id="backhome" href='/encounter' style={{ color: 'rgb(255, 204, 1)' }}> Back home</a>
            <div id="pokemenu">
                <Alert id="purchaseWindow" show={show} variant="light" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>"Thank you for your purrrrrrchase! Come again Swooon!"
                        <img src={Meowth} style={{width: "160px", margin: "10px"}} alt="meowth"/>
                    </Alert.Heading>
                </Alert>
                <Card style={{ width: "18rem" }}>
                    <Card.Img className="balls" src={pokeBall} variant='top' alt="a pokeball" />
                    <Card.Header className="head" style={{ fontSize: "30px" }}>Poke Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$50</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">X</span>

                            </div>
                            <input type="number" name="pokeball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10" />
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img id="topImg" className="balls" src={greatBall} variant='top' alt="a pokeball" />
                    <Card.Header className="head" style={{ fontSize: "30px" }}>Great Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$100</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">X</span>

                            </div>
                            <input type="number" name="greatball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10" />
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img className="balls" src={ultraBall} variant='top' alt="a pokeball" />
                    <Card.Header id="head" style={{ fontSize: "30px" }}>Ultra Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$300</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">X</span>

                            </div>
                            <input name="value" type="number" name="ultraball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10" />
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{ width: "18rem" }}>
                    <Card.Img className="balls" src={masterBall} variant='top' alt="a pokeball" />
                    <Card.Header id="head" style={{ fontSize: "30px" }}>Master Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$800</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">X</span>

                            </div>
                            <input type="number" name="masterball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10" />
                        </div>
                    </ListGroupItem>
                </Card>
            </div>
            <br/>
            <h2>You have {user.currentTrainer.currency} Moneyz</h2>
            <br/>
            <h2>Your Total Is: {pokeTotal}</h2>
            <button onClick={() => handleSubmit()} type="button" id="checkout" class="btn btn-success">Check Out</button>
        </div>
    )
    
};

export default PokeMartView;