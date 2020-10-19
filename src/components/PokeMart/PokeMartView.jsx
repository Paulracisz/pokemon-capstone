import React, {useState, useContext} from 'react';
import { UserContext } from "../Context/Context";
import './PokeMartView.css';
import pokemartbackground from '../../img/pokemartbackgroundv3.jpg'
import { Card, ListGroupItem } from 'react-bootstrap'
import greatBall from "../../img/greatball.png"
import pokeBall from "../../img/pokeballsprite.png"
import ultraBall from "../../img/ultraball.png"
import masterBall from "../../img/masterballsprite.png"



function PokeMartView() {
    const url = "http://127.0.0.1:8000/current_trainer/";
    const user = useContext(UserContext);
    console.log(user.currentTrainer.currency)
    const initalState = {
        pokeball:  0,
        greatball: 0,
        ultraball: 0,
        masterball: 0
    }
    
    const [poke_ball, setPokeball] = useState(initalState)
    const handleChange = (e) => {
        let {name, value} = e.target
        setPokeball(prevState => ({
            ...prevState,
            [name] : Number(value)
        }))
        if (value < 0) {
            value = 0
        }
    }
    
    console.log(poke_ball)
    const handleSubmit = (e, value) => {
        if (pokeTotal > user.currentTrainer.currency) {
            window.alert("You do not have enough money.")
        } else {
            let finalTotal = pokeTotal - user.currentTrainer.currency
            fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({"currency":finalTotal})
            })
            .then(response => console.log(response))
            .catch(err => console.log(err))
        }
    }
    const pokeTotal = poke_ball.pokeball * 50 + poke_ball.greatball * 100 + poke_ball.ultraball * 300 + poke_ball.masterball * 800
    return (
        <div className='pokemart-view'>
            <div className='pokemart-background'>
                <img className='stretch' src={pokemartbackground} alt='pokemart background'></img>
            </div>
            <h1>Pokemon PokeMart</h1>
            <a id="backhome" href='/encounter' style={{color: 'rgb(255, 204, 1)'}}> Back home</a>
            <div id="pokemenu">
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={pokeBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Poke Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$50</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">X</span>

                            </div>
                        <input type="number" name="pokeball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={greatBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Great Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$100</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">X</span>

                            </div>
                        <input type="number" name="greatball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={ultraBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Ultra Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$300</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">X</span>

                            </div>
                        <input name="value" type="number" name="ultraball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
                <Card style={{width:"18rem"}}>
                    <Card.Img className="balls" src={masterBall} variant='top' alt="a pokeball" />
                    <Card.Header style={{fontSize: "30px"}}>Master Ball</Card.Header>
                    <ListGroupItem>
                        <Card.Title>Price:</Card.Title>
                        <Card.Text>$800</Card.Text>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                            <span class="input-group-text">X</span>

                            </div>
                        <input type="number" name="masterball" onChange={(e) => handleChange(e)} class="form-control" min="0" max="10"/>
                        </div>
                    </ListGroupItem>
                </Card>
            </div>
                <button onClick={() => handleSubmit()} type="button" id="checkout" class="btn btn-success">Check Out</button>
        </div>
    )

};

export default PokeMartView;