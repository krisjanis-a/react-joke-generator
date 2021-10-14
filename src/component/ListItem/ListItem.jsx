import React from "react";

const ListItem = ({ prevJoke }) => {
  return (
    prevJoke !== "" && (
      <div className="list_item">
        <li className="my-4">{prevJoke}</li>
      </div>
    )
  );
};

export default ListItem;
