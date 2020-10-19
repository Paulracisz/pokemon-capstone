import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [trainerPokedex, updateTrainerPokedex] = useState({});
  const [trainerPokeballs, updateTrainerPokeballs] = useState({});
  const [pokeball, updatePokeball] = useState({});
  const [user, updateUser] = useState({});
  const [currentTrainer, setCurrentTrainer] = useState([]);
  const [pokemon, setPokemon] = useState([]);
  const [currentBall, setCurrentBall] = useState({})
  const [disabled, setDisabled] = useState(true)
  const [currentLevel, setCurrentLevel] = useState(0)
  const [ownedPokemon, setOwnedPokemon] = useState([])
  const [capturedPokemon, setCapturedPokemon] = useState([])
    const [pokemonData, setPokemonData] = useState([])
    const [show, setShow] = useState(false)
    const [pokedexModal, setPokedexModal] = useState({})

  useEffect(() => {
    const url = "http://127.0.0.1:8000/current_trainer";
    fetch(url, {
      headers: {
        Authorization: `JWT ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setCurrentTrainer(json);
      });
  }, []);
  return (
    <UserContext.Provider
      value={{
        trainerPokedex,
        updateTrainerPokedex,
        trainerPokeballs,
        updateTrainerPokeballs,
        pokeball,
        updatePokeball,
        user,
        updateUser,
        currentTrainer,
        setCurrentTrainer,
        pokemon,
        setPokemon,
        currentBall,
        setCurrentBall,
        disabled,
        setDisabled,
        currentLevel,
        setCurrentLevel,
        ownedPokemon,
        setOwnedPokemon,
        capturedPokemon,
        setCapturedPokemon,
        pokemonData,
        setPokemonData,
        show,
        setShow,
        pokedexModal,
        setPokedexModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};