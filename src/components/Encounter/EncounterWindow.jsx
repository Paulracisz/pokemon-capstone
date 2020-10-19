import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { UserContext } from '../Context/Context'
import './EncounterWindow.css'

function EncounterWindow() {

    const user = useContext(UserContext)


    return (
        <div id="encounterWindow">
            <Card style={{ width: '15rem' }} id="encounterCard">
                <Card.Img id="encounterImage" variant="top" alt='' />
                <Card.Header id="encounterName"
                    style={{
                        textTransform: 'capitalize',
                        fontSize: '30px',
                        textAlign: 'center'
                    }}>
                    {user.pokemonText}
                </Card.Header>
            </Card>
        </div>
    )
}


export default EncounterWindow;
