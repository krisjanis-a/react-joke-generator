import React from "react";

const ListItem = ({ prevJoke }) => {
  return (
    prevJoke !== ("" || null) && (
      <div className="list_item">
        <li className="list-item my-2 text-justify text-xs sm:text-sm">
          {prevJoke}
        </li>
      </div>
    )
  );
};

export default ListItem;
