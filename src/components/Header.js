import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";
import { Bounce, Fade } from "react-reveal";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <Body id="header">
      <Navbar />
      <video src="./videos/video-11.mp4" autoPlay loop muted /> 
      <div className="text">
        <Bounce>
          <img src="./videos/mypic.PNG" className="pic" alt="pic" />
          <h1>
            Hi, I am Saddam
            <br />
            a Full Stack
            <br />
            Web developer
          </h1>
        </Bounce>
        <Fade>
          <div className="icons">
            <a href="https://github.com/Saddam-tech">
              <GitHubIcon
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
              />
            </a>
            <a href="https://www.instagram.com/salokhiddeenov727/">
              <InstagramIcon
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white", 
                }}
              />
            </a>
            <a href="https://www.facebook.com/saddam.salokhiddinov">
              {" "}
              <FacebookIcon
                style={{
                  width: "40px",
                  height: "40px",
                  color: "white",
                }}
              />
            </a>
          </div>
        </Fade>
      </div>

      <div className="icon2">
        <Scroll to="about" smooth={true} duration={1000} spy={true}>
          <ArrowDropDownCircleIcon style={{ fontSize: "50px" }} />
        </Scroll>
      </div>
    </Body>
  );
};

export default Header;

const Body = styled.div`
 display: flex;
 height: 100vh;
 width: 100%;
 flex-direction: column;
 object-fit: contain; 
 background-size: cover; 

 video {
     object-fit: cover;
     width: 100%;
     height: 100%;
     position: fixed;
     z-index: -1;
 }
 .text {
     display: flex;
     align-items: center;
     justify-content: space-around;
     width: 100%; 
     position: absolute;
     color: white;
     flex-wrap: wrap;
 }
 
 h1 {
     width: 50%;
     height: 50px
     color: white;
     font-family: Optima, sans-serif;
     font-size: 90px;
 }
 .pic {
     width: 25%;
     margin: 100px;
     padding: 100px; 
 }
 .icons {
     display: flex;
     width: 25%; 
     justify-content: space-around;
     align-items: center;
     position: relative;
     color: white;
     left: 270px;
     top: -200px
      
 }
 .icon2 {
   display: flex; 
   align-items: center;
   justify-content: center; 
   bottom: -400px; 
   height: 100%;
   width: 100%;
   color: white;
   position: absolute; 
 }
 `;
