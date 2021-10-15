import React, { useContext } from "react";
import { Context } from "../../context/context";
import "./Button.css";

const Button = ({ props }) => {
  const { updateJoke, loading, setLoading } = useContext(Context);

  return (
    <div className="button sm:w-3/5 w-4/5 flex justify-center items-center">
      <button
        type="button"
        className="py-2 px-6 text-sm sm:text-base sm:py-4 sm:px-8 bg-indigo-800 text-white rounded-3xl hover:bg-indigo-900 "
        onClick={() => {
          updateJoke();
          setLoading(true);
        }}
        disabled={loading}
      >
        {props.name}
      </button>
    </div>
  );
};

export default Button;
