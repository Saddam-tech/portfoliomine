import React, { useState, Fragment } from "react";
import styled from "styled-components";
import Background from "../assets/lights2.jpg";
import Certificate from "./Certificate";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll"; 

const Certificates = () => {
  const [certificates] = useState([
    {
      title: "My background",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi utreprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
  ]);

  const certificate = certificates.map((certificate) => (
    <Certificate title={certificate.title} content={certificate.content} />
  ));

  return (
    <Container id="testimonial">
      {certificate.map((certificate) => (
        <Fragment>
        <div className="container">
          {certificate}
          {certificate}
          {certificate}
          {certificate}
          {certificate}
          {certificate}
        </div>
        <div className="icon-container">
        <Scroll to="header" smooth={true} duration={1000} spy={true}>
          <ArrowDropDownCircleIcon
            style={{ fontSize: "50px", color: "white" }}
          />
        </Scroll>
      </div>
      </Fragment>
      ))}
    </Container>
  );
};

export default Certificates;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
  .cards {
    display: ;
  }
  .project {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .icon-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transform: rotate(180deg);
    @media screen and (max-width: 728px) {
      width: 100%;
    }
  }
`;
