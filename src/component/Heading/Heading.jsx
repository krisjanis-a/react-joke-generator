import React from "react";

const Heading = ({ title }) => {
  return (
    <div className="heading Poppins my-8 sm:my-16 sm:w-3/5 w-4/5 sm:text-4xl text-2xl font-bold text-center">
      <h1>{title}</h1>
    </div>
  );
};

export default Heading;
