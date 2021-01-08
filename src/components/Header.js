import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";
import { Bounce } from "react-reveal";
import Navbar from "./Navbar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Background from "../assets/tree.jpeg";

const Header = () => {
  return (
    <Container id="header">
      <Navbar />
      <video src="./videos/video-11.mp4" autoPlay loop muted />
      <div className="container">
        <Bounce>
          <img src="./videos/avatar.svg" className="pic" alt="pic" />
        </Bounce>
        <div className="text">
          <Bounce>
            <h1>
              Hi, I am Saddam
              <br />
              a Full Stack
              <br />
              Web developer
            </h1>
          </Bounce>

          <Bounce>
            <div className="icons">
              <a href="https://github.com/Saddam-tech" target="blank">
                <GitHubIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "white",
                  }}
                />
              </a>
              <a
                href="https://www.instagram.com/salokhiddeenov727/"
                target="blank"
              >
                <InstagramIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "white",
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
                    color: "white",
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
                    color: "white",
                  }}
                />
              </a>
            </div>
          </Bounce>
        </div>
      </div>
      <Bounce>
        <div className="icon2">
          <Scroll to="about" smooth={true} duration={1000} spy={true}>
            <ArrowDropDownCircleIcon style={{ fontSize: "50px" }} />
          </Scroll>
        </div>
      </Bounce>
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

 @media screen and (max-width: 728px) {
   background: url(${Background});
   background-attachment: fixed; 
 }


  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80%;

    @media screen and (max-width: 728px) {
      margin-left: 20px;
      flex-direction: column;
      width: 80%;
    }
  }

  .text {
    display: flex; 
    width: 45%;
    height: 50%;
    padding: 10px;
    flex-direction: column;
    margin-right: 10px;

    @media screen and (max-width: 728px) {
      width: 100%;
      margin-top: 10px;
      margin-left: 45px;
    }
  }

  h1 {
    color: #ffffff;
    font-size: 80px;
    margin: 10px;
    padding: 10px;
    font-family: Optima, sans-serif;

    @media screen and (max-width: 728px) {
      font-size: 40px;
      width: 100%;
    }
  }

  .pic {
    width: 35%;
    height: 70%;
    margin-left: 100px;
    padding: 20px;
    @media screen and (max-width: 728px) {
      width: 90%;
      height: 40%;
      margin-left: 45px;
      padding: 20px;
    }
  }

  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    margin-left: 50px;
    padding: 10px;

    @media screen and (max-width: 728px) {
      margin-left: 30px;
      width: 80%;
    }
  }

  .icon2 {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    cursor: pointer; 
    width: 100%; 
  }
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    @media screen and (max-width: 728px) {
      width: 100%;
      
    }
`;
