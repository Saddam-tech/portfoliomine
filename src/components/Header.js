import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";
import { Fade } from "react-reveal";
import Navbar from "./Navbar";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Header = () => {
  return (
    <Container id="header">
      <Navbar />
      <div className="container">
        <Fade bottom>
          <img src="./videos/avatar.svg" className="pic" alt="pic" />
        </Fade>
        <div className="text">
          <Fade bottom>
            <h1>
              Hi, I am Sam
              <br />
              a Front-end
              <br />
              Web Developer
            </h1>
          </Fade>

          <Fade bottom>
            <div className="icons">
              <a href="https://github.com/Saddam-tech" target="blank">
                <GitHubIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "white",
                    opacity: "0.5",
                  }}
                />
              </a>
              <a href="mailto:salokhiddinov0727@gmail.com" target="blank">
                <EmailIcon
                  style={{
                    width: "40px",
                    height: "40px",
                    color: "white",
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
                    color: "white",
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
                    color: "white",
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
            <ArrowDropDownCircleIcon
              style={{ fontSize: "50px", opacity: "0.4" }}
            />
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
 background-color: #2C3D55;
 margin: 0;

 @media screen and (max-width: 728px) {
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

    @media screen and (max-width: 728px) {
      width: 100%;
      margin: auto;
    }
  }

  h1 {
    color: #fff;
    font-size: 6rem;
    font-family: Optima, sans-serif;
    margin: auto;
     
    
    @media screen and (max-width: 728px) {
      font-size: 3rem;
    }
  }

  .pic {
    width: 35%;
    height: 70%;
    margin: 0 10px 0 150px;
    @media screen and (max-width: 728px) {
      margin: 60px 20px 20px;
      width: 90%;
      height: 40%;
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
