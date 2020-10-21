import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import SignupPage from './components/LandingPage/SignupPage';
import EncounterView from './components/Encounter';
import PokeMartView from './components/PokeMart'
import PokedexView from './components/Pokedex';


function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '')
  const [pokemonTrainer, setPokemonTrainer] = useState({ username: '', password: '' });
  const [signupTrainer, setSignupTrainer] = useState({ username: '', password: '', email_address: '', personal_website: '', displayname: '', bio: '' });
  return (
    <Router>
      <Switch>
        <Route exact path="/pokedex" render={() => !token ? <Redirect to="/" /> : <PokedexView />} />
        <Route exact path="/pokemart" render={() => !token ? <Redirect to="/" /> : <PokeMartView />} />
        <Route exact path="/encounter" render={() => !token ? <Redirect to="/" /> : <EncounterView setToken={setToken} />} />
        <Route exact path="/signup" render={() => token ? <Redirect to="/encounter" /> : <SignupPage setToken={setToken} signupTrainer={signupTrainer} setSignupTrainer={setSignupTrainer} />} />
        <Route exact path="/" render={() => token ? <Redirect to="/encounter" /> : <LandingPage
          token={token} setToken={setToken} pokemonTrainer={pokemonTrainer} setPokemonTrainer={setPokemonTrainer} />} />
      </Switch>
    </Router>
  )
};

export default App;
