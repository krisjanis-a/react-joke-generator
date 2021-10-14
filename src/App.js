import React from "react";
import HomePage from "./route/HomePage/HomePage";
import AppState from "./context/appState";

function App() {
  return (
    <div className="App">
      <AppState>
        <HomePage />
      </AppState>
    </div>
  );
}

export default App;
