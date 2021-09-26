import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";

const Skills = () => {
  return (
    <Container>
      <Fade right>
        <div className="container-1">
          <h1 className="heading-1">Education</h1>
          <p>
            The bachelor`s degree in Business administration at Sejong
            University in Seoul, South Korea
          </p>
        </div>
      </Fade>
      <div className="container-2">
        <Fade left>
          <h1 className="heading-2">My Stack:</h1>
          <h2>HTML5</h2>
          <div className="box1">
            <div className="box1-1">HTML5</div>
          </div>
        </Fade>
        <Fade right>
          <h2>CSS3</h2>
          <div className="box1">
            <div className="box1-2">CSS3</div>
          </div>
        </Fade>
        <Fade left>
          <h2>JavaScript ES5+</h2>
          <div className="box1">
            <div className="box1-3">JavaScript</div>
          </div>
        </Fade>
        <Fade right>
          <h2>ReactJs | Hooks | Redux | Context API </h2>
          <div className="box1">
            <div className="box1-4">ReactJs</div>
          </div>
        </Fade>
        <Fade left>
          <h2>TypeScript</h2>
          <div className="box1">
            <div className="box1-5">TypeScript</div>
          </div>
        </Fade>
        <Fade right>
          <h2>NextJs</h2>
          <div className="box1">
            <div className="box1-6">NextJs</div>
          </div>
        </Fade>
        <Fade left>
          <h2>Git</h2>
          <div className="box1">
            <div className="box1-7">Git</div>
          </div>
        </Fade>
      </div>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  background: white;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;

  .container-1 {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    position: relative;
    left: 80px;
    margin: 10px;
    padding: 20px;

    p {
      position: relative;
      width: 100%;
    }

    @media screen and (max-width: 728px) {
      position: static;
      font-size: 17px;
      width: 90%;
      justify-content: center;
      align-items: center;
    }
  }

  .container-2 {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    position: relative;
    left: 80px;
    margin-bottom: 70px;

    @media screen and (max-width: 728px) {
      position: static;
      font-size: 17px;
      width: 90%;
      justify-content: center;
      align-items: center;
    }
  }

  .box1 {
    display: flex;
    align-items: center;
    background: #e9e9e9;
    width: 100%;
    height: 100%;
    font-size: 40px;
  }

  .box1-1 {
    background: black;
    width: 97%;
  }
  .box1-2 {
    background: black;
    width: 90%;
  }
  .box1-3 {
    background: black;
    width: 90%;
  }
  .box1-4 {
    background: black;
    width: 93%;
  }
  .box1-5 {
    background: black;
    width: 90%;
  }
  .box1-6 {
    background: black;
    width: 90%;
  }
  .box1-7 {
    background: black;
    width: 90%;
  }
`;
