import React from 'react';
import pokeball from '../../img/pokeball.png';
import { Form, Button, Card } from 'react-bootstrap';
import './LandingPage.css';
import { useHistory } from 'react-router-dom';

function SignupPage(props) {
    const history = useHistory()
    let { username, password, email_address, personal_website, displayname, bio } = props.signupTrainer

    const handleSignupChange = e => {
        let { name, value } = e.target;
        props.setSignupTrainer(prevstate => ({
            ...prevstate,
            [name]: value
        })
        )
    }

    const handleLogin = (username, password) => {
        const url = 'http://127.0.0.1:8000/token-auth/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, password: password })
        })
            .then(res => res.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                props.setToken(json.token)
                console.log(json)
            })
            .catch(error => console.log(error))
        history.push('/encounter/')
    }

    const handleSignup = (username, password) => {
        const url = 'http://127.0.0.1:8000/trainers/'
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, email_address, personal_website, displayname, bio })
        })
            .then(res => res.json())
            .then(json => {
                console.log(json)
                handleLogin(username, password)
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
                        <Form onSubmit={() => handleSignup(username, password)}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" value={username} onChange={handleSignupChange} placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" name="password" value={password} onChange={handleSignupChange} placeholder="Enter Password" />
                            </Form.Group>
                            <Form.Group controlId="formEmailAddress">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="emailAddress" value={email_address} onChange={handleSignupChange} placeholder="Optional Enter Email" />
                            </Form.Group>
                            <Form.Group controlId="formDisplayName">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control type="text" name="displayname" value={displayname} onChange={handleSignupChange} placeholder="Optional Enter Display Name" />
                            </Form.Group>
                            <Form.Group controlId="formPersonalWebsite">
                                <Form.Label>Personal Website</Form.Label>
                                <Form.Control type="text" name="personalWebsite" value={personal_website} onChange={handleSignupChange} placeholder="Optional Enter Personal Website" />
                            </Form.Group>
                            <Form.Group controlId="formBasicBio">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control type="text" name="bio" value={bio} onChange={handleSignupChange} placeholder="Optional Enter Bio" />
                            </Form.Group>
                            <Button variant="primary" type="click">
                                SignUp
                             </Button>
                             <br/>
                             <Card.Link style={{ color: 'rgb(255, 204, 1)' }} href="/">Already have an account? Go back to Login</Card.Link>
                        </Form>
                    </Card>
                </div>
            </header>
        </div>
    );
}



export default SignupPage;