import React, { Component, useContext } from 'react';
import { UserContext } from '../Context/Context'
import { Form, Button, Card } from 'react-bootstrap';

class EncounterWindow extends Component {
    
    render() {
        return (
            <div id = "encounterWindow">
                <Card style={{ width:'15rem' }}>
                <Card.Img id="encounterImage" variant="top" alt=''/>
                <Card.Header 
                id="encounterName" 
                style={{ 
                    textTransform: 'capitalize',
                    fontSize: '30px',
                    textAlign: 'center'}}/>

                </Card>
            </div>
        )
    }

}

export default EncounterWindow;