import React from 'react';
import logo from './img/pokeball.png'
import './index.css';

function App() {
  return (
    <div className="pokemon">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to the world of Pokémon!!!
        </p>
      </header>
    </div>
  );
}

export default App;
