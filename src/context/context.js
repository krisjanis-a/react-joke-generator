import { createContext } from "react";

const INITIAL_STATE = {
  joke: String,
  previousJokes: [],
  loading: Boolean,
  updateJoke: () => {},
  setLoading: () => {},
};

export const Context = createContext(INITIAL_STATE);
