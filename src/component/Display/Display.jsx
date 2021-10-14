import React, { useContext } from "react";
import { Context } from "../../context/context";

const Display = () => {
  const { joke } = useContext(Context);

  return (
    <div className="joke_display">
      <h2>{joke ? joke : "Loading..."}</h2>
    </div>
  );
};

export default Display;
