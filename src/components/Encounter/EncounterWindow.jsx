import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './EncounterWindow.css'

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
