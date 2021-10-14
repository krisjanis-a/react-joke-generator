import React, { useContext } from "react";
import { Context } from "../../context/context";
import ListItem from "../ListItem/ListItem";

const List = () => {
  const { previousJokes } = useContext(Context);

  return (
    <div className="w-3/5 mx-auto">
      <h3 className="text-center">Previous dad jokes:</h3>
      {previousJokes.length > 0 ? (
        <ul className="list-disc ">
          {previousJokes.map(
            (prevJoke) =>
              prevJoke !== ("" || null) && (
                <ListItem prevJoke={prevJoke} key={prevJoke} />
              )
          )}
        </ul>
      ) : (
        <p>Nothing yet, ask me to give it to you.</p>
      )}
    </div>
  );
};

export default List;
