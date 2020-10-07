import React from 'react';
import pokeball from '../../img/pokeball.png'
import { Form, Button, Card } from 'react-bootstrap'
import './LandingPage.css';

function LandingPage() {
    return (
        <div className="pokemon">
            <header className="Landing-header">
                <img src={pokeball} className="Landing-logo" alt="pokeball" />
                <p>
                    Welcome to the world of Pokémon!!!
                </p>
                <div className="User-forms">
                    <Card style={{ width: '25rem', margin: '10px' }}>
                        <Card.Header style={{ fontSize: '30px', textAlign: 'center' }}>Login</Card.Header>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit" href="/encounter">
                                Login
                             </Button>
                        </Form>
                    </Card>

                    <Card style={{ width: '25rem', margin: '10px' }}>
                        <Card.Header style={{ fontSize: '30px', textAlign: 'center' }}>SignUp</Card.Header>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="username" placeholder="Enter Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                SignUp
                             </Button>
                        </Form>
                    </Card>
                </div>
            </header>
        </div>
    );
}

export default LandingPage;