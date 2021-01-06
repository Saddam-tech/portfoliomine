import React, { useState } from "react";
import styled from "styled-components";
import Background from "../assets/lights2.jpg";
import Certificate from "./Certificate";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
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
        <div className="container">
          {certificate}
          {certificate}
          {certificate}
          {certificate}
          {certificate}
          {certificate}
          <div className="icon-container">
            <Scroll to="header" duration={1000} smooth={true} spy={true}>
              <ArrowUpwardIcon className="icon" />
            </Scroll>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Certificates;

const Container = styled.div`
  display: flex;
  flex-direction: row;
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
    width: 20%;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 10px solid #ffffff;
    border-radius: 0 100px;
    transition: 0.5s ease-out;

    @media screen and (max-width: 728px) {
      width: 100%;
    }

    :hover {
      background-color: #ffffff;
      cursor: pointer;
      border-radius: 100px;
      transition: 0.5s ease-in;
    }
  }

  .icon {
    color: #ffffff;
    font-size: 100px;

    :hover {
      color: #000000;
    }
    @media screen and (max-width: 728px) {
      width: 100%;
    }
  }
`;
