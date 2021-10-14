import React, { useContext } from "react";
import { Context } from "../../context/context";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  speedmultiplier: 0.5;
`;

const Display = () => {
  const { joke, loading } = useContext(Context);

  return (
    <div className="joke_display my-5 h-[4rem] text-center font-oswald font-semibold flex justify-center items-center">
      <h2>
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
