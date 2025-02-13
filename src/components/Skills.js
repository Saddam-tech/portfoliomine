import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Fade right>
        <div className="container-1">
          <h1 className="heading-1">{t("education_name")}</h1>
          <p>{t("education")}</p>
        </div>
      </Fade>
      <div className="container-2">
        <Fade left>
          <h1 className="heading-2">{t("stack")}:</h1>
          <h2>JavaScript ES6+ (NodeJS)</h2>
          <div className="box1">
            <div className="box1-1"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>Solidity</h2>
          <div className="box1">
            <div className="box1-2"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>ExpressJs</h2>
          <div className="box1">
            <div className="box1-2"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>MySQL && MariaDB</h2>
          <div className="box1">
            <div className="box1-3"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>Sequalize</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>RabbitMQ</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>Kafka</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>Python</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>Git</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>Socket.io</h2>
          <div className="box1">
            <div className="box1-4"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>HTML5</h2>
          <div className="box1">
            <div className="box1-5"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>CSS3</h2>
          <div className="box1">
            <div className="box1-6"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>ReactJS</h2>
          <div className="box1">
            <div className="box1-7"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>TypeScript</h2>
          <div className="box1">
            <div className="box1-8"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>NextJS</h2>
          <div className="box1">
            <div className="box1-9"></div>
          </div>
        </Fade>
        <Fade right>
          <h2>VueJS</h2>
          <div className="box1">
            <div className="box1-10"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>Quasar (VueJS framework)</h2>
          <div className="box1">
            <div className="box1-11"></div>
          </div>
        </Fade>
        <Fade left>
          <h2>NuxtJS</h2>
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
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-3 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-4 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-5 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-6 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-7 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-8 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-9 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-10 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
  .box1-11 {
    background: black;
    width: 97%;
    height: 50px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
`;
