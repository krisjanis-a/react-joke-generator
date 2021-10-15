import React, { useContext } from "react";
import { Context } from "../../context/context";
import ListItem from "../ListItem/ListItem";
import "./List.css";

const List = () => {
  const { previousJokes } = useContext(Context);

  return (
    <div className="list sm:w-3/5 w-5/6 mx-auto pl-6 pr-3 mb-8 h-64 overflow-y-scroll">
      {previousJokes.length > 0 ? (
        <ul className="list list-disc list-outside">
          {previousJokes.map(
            (prevJoke) =>
              prevJoke !== ("" || null) && (
                <ListItem prevJoke={prevJoke} key={prevJoke} />
              )
          )}
        </ul>
      ) : (
        <p className="text-center mb-4 text-xs sm:text-sm">
          Nothing yet, ask me to give it to you.
        </p>
      )}
    </div>
  );
};

export default List;
