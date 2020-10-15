import React, { createContext, useState } from "react";

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
        setCurrentLevel
      }}
    >
      {children}
    </UserContext.Provider>
  );
};