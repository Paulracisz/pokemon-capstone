import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import EncounterView from './components/Encounter';
import PokeMartView from './components/PokeMart'
import PokedexView from './components/Pokedex';

// const token = localStorage.getItem('token')

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [pokemonTrainer, setPokemonTrainer] = useState({username: '', password: ''});
  return (
    <Router>
      <Switch>
        <Route exact path="/pokedex"><PokedexView /></Route>
        <Route exact path="/pokemart"><PokeMartView /></Route>
        <Route exact path="/encounter" render={() => !token ? <Redirect to="/" /> : <EncounterView  setToken={setToken} />} />
        <Route exact path="/" render={() => token ? <Redirect to="/encounter" /> : <LandingPage token={token} setToken={setToken} pokemonTrainer={pokemonTrainer} setPokemonTrainer={setPokemonTrainer} />} />
      </Switch>
    </Router>
  )
};

export default App;
