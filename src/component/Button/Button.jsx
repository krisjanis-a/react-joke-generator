import React, { useContext } from "react";
import { Context } from "../../context/context";

const Button = ({ props }) => {
  const { updateJoke } = useContext(Context);

  return (
    <div className="button">
      <button
        className={props.type}
        onClick={() => {
          updateJoke();
        }}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
