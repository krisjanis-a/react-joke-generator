import React from "react";
import Heading from "../../component/Heading/Heading";
import Display from "../../component/Display/Display";
import Button from "../../component/Button/Button";
import List from "../../component/List/List";

const HomePage = () => {
  const headingTitle = "Want to hear a dad joke?";

  const buttonProps = {
    name: "Give it to me",
    type: "Primary",
  };

  return (
    <div className="home_page">
      <Heading title={headingTitle} />
      <Button props={buttonProps} />
      <Display />
      <List />
    </div>
  );
};

export default HomePage;
