import { createContext } from "react";

const INITIAL_STATE = {
  joke: "",
  previousJokes: [],
  updateJoke: (newJoke) => {},
};

export const Context = createContext(INITIAL_STATE);
