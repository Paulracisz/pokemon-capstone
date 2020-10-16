import React, { useState } from 'react';
import pokeball from '../../img/pokeball.png';
import { Form, Button, Card } from 'react-bootstrap';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';

function SignupPage(props) {
    const history = useHistory()
    let { username, password } = props.signupTrainer

    const handle_signup_change = e => {
        let { name, value } = e.target;
        props.setPokemonTrainer(prevstate => ({
            ...prevstate,
            [name]: value
        })
        )
    }

    // const handle_login = (username, password) => {
    //     const url = 'http://127.0.0.1:8000/token-auth/'
    //     // debugger
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ username, password })
    //     })
    //         .then(res => res.json())
    //         .then(json => {
    //             localStorage.setItem('token', json.token);
    //             props.setToken(json.token)
    //             props.setPokemonTrainer(prevstate => ({
    //                 ...prevstate,
    //                 ...json
    //             }))
    //             console.log(json)
    //         })
    //         .catch(error => console.log(error))
    //     history.push('/encounter/')
    // }

    const handle_signup = (username, password) => {
        const url = 'http://127.0.0.1:8000/trainers/'
        // debugger
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ "username": username, "password": password })
        })
            .then(res => res.json())
            .then(json => {
                // localStorage.setItem('token', json.token)
                // props.setToken(json.token)
                props.setPokemonTrainer(prevstate => ({
                    ...prevstate,
                    ...json
                }))
                // handle_login(username, password)
            })
            .catch(error => console.log(error))
        history.push('/encounter/')
    }

    return (
        <div className="pokemon">
            <header className="Landing-header">
                <img src={pokeball} className="Landing-logo" alt="pokeball" />
                <p>
                    Welcome to the world of Pokémon!!!
                </p>
                <div>
                    <Card style={{ width: '25rem', margin: '10px' }}>
                        <Card.Header style={{ fontSize: '30px', textAlign: 'center' }}>SignUp</Card.Header>
                        <Form onSubmit={() => handle_signup(username, password)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={username} onChange={handle_signup_change} placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} onChange={handle_signup_change} placeholder="Enter Password" />
                            </Form.Group>
                            <Button variant="primary" type="click">
                                SignUp
                             </Button>
                        </Form>
                    </Card>
                </div>
            </header>
        </div>
    );
}



export default SignupPage;