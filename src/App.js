import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EncounterView from './components/Encounter';
import PokeMartView from './components/PokeMart'
import PokedexView from './components/Pokedex';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/pokedex"><PokedexView/></Route>
        <Route path="/pokemart"><PokeMartView/></Route>
        <Route path="/encounter"><EncounterView/></Route>
        <Route path="/"><LandingPage /></Route>
      </Switch>
    </Router>
  )
};

export default App;
