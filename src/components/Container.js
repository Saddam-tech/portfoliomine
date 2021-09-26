import React from "react";
import About from "./About";
import Resume from "./Resume";
import Certificates from "./Certificates";

const Container = () => {
  return (
    <React.Fragment>
      <About />
      <Resume />
      <Certificates />
    </React.Fragment>
  );
};

export default Container;
