import React, { useContext } from "react";
import { Context } from "../../context/context";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import "./Display.css";

const override = css`
  display: block;
  margin: 0 auto;
  speedmultiplier: 0.5;
`;

const Display = () => {
  const { joke, loading } = useContext(Context);

  return (
    <div className="joke_display my-4 sm:my-8 sm:w-3/5 w-4/5  text-center font-oswald font-semibold flex justify-center items-center">
      <h2 className="text-lg sm:text-xl">
        {joke ? (
          joke
        ) : loading ? (
          <ClipLoader
            color={"rgb(55, 48, 163)"}
            loading={loading}
            css={override}
          />
        ) : null}
      </h2>
    </div>
  );
};

export default Display;
