import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <Container id="about">
      <div className="container">
        <div className="content">
          <span className="border"></span>
          <Fade right>
            <h1>About me</h1>
            <p>
              I turn coffee into code... My name is Saddam (people call me Sam)
              and I am a graduate from Sejong university in Seoul and a software
              engineer with a great experience in web development and have a
              really good background on modern web development tools.
            </p>

            <h1>Employment History</h1>
            <a href="https://teamcredit.kr/">
              <p>teamcredit.kr</p>
            </a>
            <p>
              (2021.11.01 ~ 2022.03.01) Finished 4 month internship and managed
              front-end development of the company`s leading projects. Have been
              working with the back-end engineering team and developing complex
              systems using variety of modern software
            </p>
            <a href="https://chainlabs.one/">
              <p>chainlabs.one</p>
            </a>
            <p>
              (2022.03.01 ~ now) Handling backend development + front end of the
              company`s leading projects. Getting to learn solidity and solidity
              development tools for blockchain interaction. Sending tokens,
              managing smart contracts, connecting different wallets to the
              website and talking to blockchain networks.
            </p>
          </Fade>
          <Fade left>
            <h1 className="heading2">Contact details</h1>
            <div className="contact-details">
              <p>Saddam Salokhiddinov</p>
              <p>From Uzbekistan, living in Seoul, South Korea</p>
              <a href="tel:01084103777">Phone number: 010 8410 3777</a>
            </div>
          </Fade>
          <span className="border"></span>
        </div>
      </div>

      <Skills />
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; 
  height: 100%;
  width: 100%;
  background-color: #0F1624;
  flex-direction: column; 
  color: #E4E4E6;

  .border {
    width: 80px;
    height: 5px;
    border-radius: 50px;
    margin-top: 40px;
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  }
 
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 40%;
    margin: 70px;
    

    

    @media screen and (max-width: 728px) {
      flex-direction: column;
      width: 65%;

    }
  }
 

  .content {
    display: flex; 
    justify-content: flex-start;
    flex-direction: column; 
    width: 100%; 
    margin-left: 20px;
    padding: 50px;
    font-size: 20px;
    font-family: Space Grotesk, sans-serif;

    h1 {
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
      font-weight: 800;
      font-size: 32px;
      background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    p {
      line-height: 40px;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
    }

    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 0; 
      font-size: 17px;

      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
      }
    }
    
  }


  }

  .contact-details {
    margin-bottom: 30px;
    line-height: 40px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
  }

  a { 
    line-height: 40px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
  }
`;
