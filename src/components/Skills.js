import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
const Skills = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Fade cascade>
        <div className="container-1">
          <h1 className="heading-1">{t("education_name")}</h1>
          <p>{t("education")}</p>
        </div>
      </Fade>
      <div className="container-2">
        <h1 className="heading-2">{t("stack")}:</h1>
        <h2>JavaScript ES6+ (NodeJS)</h2>
        <div className="box1">
          <div className="box1-1"></div>
        </div>

        <h2>Python</h2>
        <div className="box1">
          <div className="box1-4"></div>
        </div>

        <h2>Local LLM Deployment using vLLM, TensorRT-LLM, Llama.CPP</h2>
        <div className="box1">
          <div className="box1-2"></div>
        </div>

        <h2>Solidity</h2>
        <div className="box1">
          <div className="box1-2"></div>
        </div>

        <h2>ExpressJs</h2>
        <div className="box1">
          <div className="box1-2"></div>
        </div>

        <h2>MySQL && MariaDB</h2>
        <div className="box1">
          <div className="box1-3"></div>
        </div>
        <h2>RabbitMQ</h2>
        <div className="box1">
          <div className="box1-4"></div>
        </div>
        <h2>ReactJS</h2>
        <div className="box1">
          <div className="box1-7"></div>
        </div>
        <h2>TypeScript</h2>
        <div className="box1">
          <div className="box1-8"></div>
        </div>
        <h2>NextJS</h2>
        <div className="box1">
          <div className="box1-9"></div>
        </div>
        <h2>VueJS</h2>
        <div className="box1">
          <div className="box1-10"></div>
        </div>
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
    max-width: 900px;
    height: 100%;
    position: relative;
    margin: 24px auto 0;
    padding: 20px;

    .heading-1 {
      font-weight: 800;
      font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    p {
      position: relative;
      width: 100%;
      line-height: 1.6;
      font-size: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);
      color: rgba(255, 255, 255, 0.5);
    }

    @media screen and (max-width: 1024px) {
      .heading-1 {
        font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      }
      p {
        font-size: clamp(0.95rem, 1.2vw + 0.3rem, 1.1rem);
      }
    }

    @media screen and (max-width: 728px) {
      position: static;
      font-size: 1rem;
      width: 90%;
      justify-content: center;
      align-items: flex-start;

      .heading-1 {
        font-size: clamp(1.5rem, 4vw, 2rem);
      }
      p {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        line-height: 1.5;
      }
    }
  }

  .container-2 {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 900px;
    height: 100%;
    position: relative;
    margin: 24px auto 70px;

    .heading-2 {
      font-weight: 800;
      font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: rgba(255, 255, 255, 0.5);
      font-weight: 800;
      font-size: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }

    @media screen and (max-width: 1024px) {
      .heading-2 {
        font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      }
      h2 {
        font-size: clamp(0.95rem, 1.2vw + 0.3rem, 1.1rem);
      }
    }

    @media screen and (max-width: 728px) {
      position: static;
      font-size: 1rem;
      justify-content: center;
      align-items: flex-start;

      .heading-2 {
        font-size: clamp(1.5rem, 4vw, 2rem);
      }
      h2 {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
      }
    }
  }

  .box1 {
    display: flex;
    align-items: center;
    background: #e9e9e9;
    width: 100%;
    height: 2px;
    font-size: 40px;
    border-radius: 50px;
  }

  .box1-1,
  .box1-2,
  .box1-3,
  .box1-4,
  .box1-5,
  .box1-6,
  .box1-7,
  .box1-8,
  .box1-9,
  .box1-10,
  .box1-11 {
    width: 97%;
    height: 2px;
    border-radius: 50px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }
`;
