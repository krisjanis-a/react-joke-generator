import React, { useState } from "react";
import { Context } from "./context";
import fetchJoke from "../util/fetchJoke";

const AppState = ({ children }) => {
  const [joke, setJoke] = useState("");
  const [previousJokes, setPreviousJokes] = useState([]);

  const updateJoke = () => {
    const requestJoke = async () => {
      const newjoke = await fetchJoke();

      if (newjoke === joke) {
        requestJoke();
      }

      setJoke(newjoke.joke);
    };

    setJoke(null);

    updatePreviousJokes(joke);

    requestJoke();
  };

  const updatePreviousJokes = (lastJoke) => {
    if (lastJoke === "") return;

    let updatedPrevJokes = [...previousJokes];

    updatedPrevJokes.unshift(lastJoke);

    if (updatedPrevJokes.length > 5) {
      updatedPrevJokes.pop();
    }

    setPreviousJokes(updatedPrevJokes);
  };

  return (
    <Context.Provider
      value={{
        joke,
        previousJokes,
        updateJoke,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppState;
