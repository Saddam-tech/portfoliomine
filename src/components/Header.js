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
              <a
                href="https://github.com/Saddam-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <GitHubIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "rgba(255, 255, 255, 0.5)",
                    opacity: "0.5",
                  }}
                />
              </a>
              <a
                href="mailto:salokhiddinov0727@gmail.com"
                aria-label="Send email"
              >
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook profile"
              >
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
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    position: relative;
  }

  .text {
    display: flex;
    width: 100%;
    max-width: 800px;
    flex-direction: column;
    text-align: center;
    opacity: 0.9;
    z-index: 2;
    position: relative;
  }

  .bg-animation {
    width: 100%;
    max-width: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    opacity: 0.6;

    @media screen and (max-width: 1228px) {
      max-width: 500px;
    }

    @media screen and (max-width: 728px) {
      max-width: 400px;
    }
  }

  h1 {
    font-family: Space Grotesk, sans-serif;
    font-size: clamp(2.5rem, 5vw + 1rem, 4.5rem);
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
    background-clip: text;
    -webkit-text-fill-color: transparent;
    line-height: 1.2;

    @media screen and (max-width: 1024px) {
      font-size: clamp(2rem, 4vw + 1rem, 3rem);
    }

    @media screen and (max-width: 728px) {
      font-size: clamp(1.75rem, 5vw, 2.5rem);
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
      background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
      border-radius: 50px;
      width: clamp(180px, 20vw, 230px);
      height: clamp(45px, 5vh, 50px);
      line-height: clamp(45px, 5vh, 50px);
      color: #ffffff;
      font-size: clamp(16px, 1.5vw, 18px);
      font-weight: 800;
      font-family: Space Grotesk, sans-serif;
      transition: 0.4s ease;
    }
    button:hover {
      background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
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
  }
`;
