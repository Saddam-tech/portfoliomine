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
            <div className="box1-1"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>CSS3</h2>
          <div className="box1">
            <div className="box1-2"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>JavaScript ES6+</h2>
          <div className="box1">
            <div className="box1-3"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>ExpressJs</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>ReactJs</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>TypeScript</h2>
          <div className="box1">
            <div className="box1-5"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>NextJs</h2>
          <div className="box1">
            <div className="box1-6"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>Git</h2>
          <div className="box1">
            <div className="box1-7"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>VueJs</h2>
          <div className="box1">
            <div className="box1-8"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>Quasar(VueJs framework)</h2>
          <div className="box1">
            <div className="box1-9"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>NuxtJs</h2>
          <div className="box1">
            <div className="box1-10"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>Socket.io</h2>
          <div className="box1">
            <div className="box1-11"></div>
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
  background-color: #0f1624;

  .container-1 {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    position: relative;
    left: 80px;
    margin: 10px;
    padding: 20px;

    .heading-1 {
      font-weight: 800;
      font-size: 65px;
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    p {
      position: relative;
      width: 100%;
      line-height: 40px;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
    }

    @media screen and (max-width: 728px) {
      position: static;
      font-size: 17px;
      width: 90%;
      justify-content: center;
      align-items: flex-start;

      .heading-1 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
      }
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

    .heading-2 {
      font-weight: 800;
      font-size: 65px;
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 800;
    }

    @media screen and (max-width: 728px) {
      position: static;
      font-size: 17px;
      width: 90%;
      justify-content: center;
      align-items: flex-start;

      .heading-2 {
        font-size: 24px;
      }
      h2 {
        font-size: 20px;
      }
    }
  }

  .box1 {
    display: flex;
    align-items: center;
    background: #e9e9e9;
    width: 100%;
    height: 100%;
    font-size: 40px;
    border-radius: 50px;
  }

  .box1-1 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-2 {
    background: black;
    width: 90%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-3 {
    background: black;
    width: 90%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-4 {
    background: black;
    width: 93%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-5 {
    background: black;
    width: 90%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-6 {
    background: black;
    width: 90%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-7 {
    background: black;
    width: 90%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-8 {
    background: black;
    width: 93%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-9 {
    background: black;
    width: 92%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-10 {
    background: black;
    width: 94%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-11 {
    background: black;
    width: 95%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
`;
