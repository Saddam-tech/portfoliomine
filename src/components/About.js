import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import { Fade } from "react-reveal";

const About = () => {
  return (
    <Container id="about">
      <div className="container">
        <div className="content">
          <Fade right>
            <h1 className="heading1">About me</h1>
            <p>
              I turn coffee into code... My name is Saddam (people call me Sam)
              and I am a graduate from Sejong university in Seoul and a software
              engineer with a great experience in web development and have a
              really good background on modern web development tools.
            </p>

            <h1>Employment History</h1>
            <h2>@Team CredIT</h2>
            <a href="https://teamcredit.kr/">
              <p>teamcredit.kr</p>
            </a>
            <p>
              Finished 4 month internship (2021.11.01 ~ 2022.03.01) and managed
              front-end development of the company`s leading projects. Have been
              working with the back-end engineering team and developing complex
              systems using variety of modern software
            </p>

            <h2>@Team Chainlabs</h2>
            <a href="https://chainlabs.one/">
              <p>chainlabs.one</p>
            </a>
            <p>
              Handled backend development + front end of the company`s leading
              projects. Got to learn solidity and solidity development tools for
              blockchain interaction. Sending tokens, managing smart contracts,
              connecting different wallets to the website and talking to
              blockchain networks.
            </p>
          </Fade>
          <Fade left>
            <h1 className="heading2">Contact details</h1>
            <div className="contact-details">
              <p>Saddam Salokhiddinov</p>
              <p>From Uzbekistan, living in Seoul, South Korea</p>
              <a href="tel:01058071727">Phone number: 010 5807 1727</a>
            </div>
          </Fade>
        </div>
        <Fade right>
          <div className="icons">
            <a href="mailto:salokhiddinov0727@gmail.com" target="blank">
              <EmailIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#E4E4E6",
                }}
              />
            </a>
            <a href="https://github.com/Saddam-tech" target="blank">
              <GitHubIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#E4E4E6",
                }}
              />
            </a>
            <a
              href="https://www.instagram.com/salokhiddeenov727/"
              target="blank"
            >
              <InstagramIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#E4E4E6",
                }}
              />
            </a>
            <a
              href="https://www.facebook.com/saddam.salokhiddinov"
              target="blank"
            >
              {" "}
              <FacebookIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "#E4E4E6",
                }}
              />
            </a>
          </div>
        </Fade>
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
 
  .container {
    display: flex;
    align-items: center;
    justify-content; center;
    flex-direction: column;
    width: 40%;
    margin: 70px;
    .heading1 {
      font-weight: 800;
      background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    h1 {
      font-weight: 800;
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
      background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 728px) {
      flex-direction: column;
      width: 65%;

    }
  }
 

  .content {
    display: flex; 
    justify-content: center;
    text-align: center;
    flex-direction: column; 
    width: 100%; 
    margin-left: 20px;
    padding: 50px;
    font-size: 20px;
    font-family: Space Grotesk, sans-serif;

    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 0; 
      font-size: 17px;
    }
    
  }


  }

  .contact-details {
    text-align: center;
    margin-bottom: 30px;
  }

  a { 
    color: #E4E4E6;
  }
 
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #E4E4E6;
    cursor: pointer; 
    width: 80%;
  }
`;
