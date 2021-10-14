import React, { useContext } from "react";
import { Context } from "../../context/context";
import ListItem from "../ListItem/ListItem";

const List = () => {
  const { previousJokes } = useContext(Context);

  return (
    <div className="list">
      <h3>Previous dad jokes:</h3>
      <ul>
        {previousJokes.length > 0
          ? previousJokes.map((prevJoke) => <ListItem prevJoke={prevJoke} />)
          : null}
      </ul>
    </div>
  );
};

export default List;
