import React from "react";
import Heading from "../../component/Heading/Heading";
import Display from "../../component/Display/Display";
import Button from "../../component/Button/Button";
import List from "../../component/List/List";
import ListHeading from "../../component/ListHeading/ListHeading";

const HomePage = () => {
  const headingTitle = "Want to hear a dad joke?";

  const buttonProps = {
    name: "Give it to me!",
  };

  return (
    <div className="home_page container bg-white rounded-2xl max-w-screen-lg sm:w-4/5 w-5/6 px-4 sm:px-8 mx-auto my-8 sm:my-16 font-poppins flex flex-col justify-between items-center border-indigo-600 border-4">
      <Heading title={headingTitle} />
      <Button props={buttonProps} />
      <Display />
      <ListHeading />
      <List />
    </div>
  );
};

export default HomePage;
