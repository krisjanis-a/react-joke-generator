import React, { useContext } from "react";
import { Context } from "../../context/context";

const Button = ({ props }) => {
  const { updateJoke, loading } = useContext(Context);

  return (
    <div className="button">
      <button
        className="px-4 py-2 bg-indigo-800 text-white rounded-2xl hover:bg-indigo-900 disabled:cursor-not-allowed"
        onClick={() => {
          updateJoke();
        }}
        disabled={loading}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
