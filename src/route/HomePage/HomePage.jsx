import React from "react";
import Heading from "../../component/Heading/Heading";
import Display from "../../component/Display/Display";
import Button from "../../component/Button/Button";
import List from "../../component/List/List";

const HomePage = () => {
  const headingTitle = "Want to hear a dad joke?";

  const buttonProps = {
    name: "Give it to me",
  };

  return (
    <div className="home_page container bg-white rounded-2xl max-w-screen-lg px-8 mx-auto my-8 font-poppins flex flex-col justify-center items-center">
      <Heading title={headingTitle} />
      <Button props={buttonProps} />
      <Display />
      <List />
    </div>
  );
};

export default HomePage;
