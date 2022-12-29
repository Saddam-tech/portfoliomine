import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Link as Scroll } from "react-scroll";
import { Fade } from "react-reveal";
import Navbar from "./Navbar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import BackgroundAnimation from "./BgAnimation";
import { useTranslation } from "react-i18next";

const Header = ({ drawer, setDrawer }) => {
  const { t } = useTranslation();
  return (
    <Container id="header">
      <Navbar drawer={drawer} setDrawer={setDrawer} />
      <div className="container">
        <Fade bottom>
          <img src="./videos/avatar.png" className="pic" alt="pic" />
        </Fade>
        <div className="bg-animation">
          <BackgroundAnimation />
        </div>
        <div className="text">
          <Fade bottom>
            <h1>
              {t("greeting_1")}
              <br />
              {t("greeting_2")}
              <br />
              {t("greeting_3")}
            </h1>
          </Fade>
          <Fade bottom>
            <div className="icons">
              <a href="https://github.com/Saddam-tech" target="blank">
                <GitHubIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(255, 255, 255, 0.5)",
                    opacity: "0.5",
                  }}
                />
              </a>
              <a href="mailto:salokhiddinov0727@gmail.com" target="blank">
                <EmailIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(255, 255, 255, 0.5)",
                    opacity: "0.5",
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
                    width: "40px",
                    height: "40px",
                    color: "rgba(255, 255, 255, 0.5)",
                    opacity: "0.5",
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/saddam-salokhiddinov-35a9351a7/"
                target="blank"
              >
                {" "}
                <LinkedInIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(255, 255, 255, 0.5)",
                    opacity: "0.5",
                  }}
                />
              </a>
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <div className="icon2">
          <Scroll to="about" smooth={true} duration={1000} spy={true}>
            <button>{t("learn_more")}</button>
          </Scroll>
        </div>
      </Fade>
    </Container>
  );
};

export default Header;
const Container = styled.div`
 display: flex;
 height: 100vh;
 width: 100%;  
 justify-content: space-around; 
 flex-direction: column;
 object-fit: contain; 
 background-size: cover; 
 background-position: center;
 background-color: #0f1624;
 margin: 0;

 @media screen and (max-width: 1228px) {
   background-attachment: fixed; 
 }


  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;

    @media screen and (max-width: 1228px) {
      flex-direction: column;
    }
  }

  .text {
    display: flex; 
    width: 50%;
    height: 50%;
    flex-direction: column;
    text-align: center;
    opacity: 0.9;

    @media screen and (max-width: 1228px) {
      width: 100%;
      margin: auto;
    }
  }

  .bg-animation {
    width: 42%;
    position: absolute;
    right: 90px;
    top: 60px;

    @media screen and (max-width: 1228px) {
      width: 100%;
      left: 2px;
      top: 220px;
    }
  }

  h1 {
    font-family: Space Grotesk, sans-serif;
    font-size: 6rem;
    font-weight: 800;
    margin: auto;
    background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  width: max-content;
  max-width: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
    
    @media screen and (max-width: 1228px) {
      font-size: 2.5rem;
    }
  }

  .pic {
    width: 550px;
    margin: 0 5px 0 220px;
    @media screen and (max-width: 1228px) {
      margin: 60px 20px 20px;
      width: 40%;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin: auto;
    margin-top: 60px;
    padding: 10px;
     

    @media screen and (max-width: 1228px) {
      width: 80%;
    }
  }

  .icon2 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%; 
     
     
    button {
      border: none;
      cursor: pointer;
      text-align: center;
      background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
      border-radius: 50px;
      width: 230px;
      height: 50px;
      line-height: 50px;
      color: #ffffff;
      font-size: 18px;
      font-weight: 800;
      font-family: Space Grotesk, sans-serif;
      transition: 0.4s ease;
    }
    button:hover {
      background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    }
  }
  
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    @media screen and (max-width: 1228px) {
      width: 100%;
      
    }
`;
