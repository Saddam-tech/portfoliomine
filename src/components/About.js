import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
import {Fade} from 'react-reveal';

const About = () => {
  return (
    <Container id="about"> 
      <div className="container">
        <div className="content">
         <Fade right>
           <h1 className="heading1">About me</h1>
          <p>
            My name is Saddam (people call me Sam) and I am a 3rd year student at Sejong
            university in Seoul and a software engineer with hands-on experience
            mostly in web development and have a really good background on
            back-end tools like NodeJs, ExpressJs and MongoDB
          </p>
          </Fade>
          <Fade left> 
          <h1 className="heading2">Contact details</h1>
          <p>Saddam Salokhiddinov</p>
          <p>From Uzbekistan, living in Seoul, South Korea</p>
          <p>Phone number:
              010 5672 2707 </p>
          </Fade>
          <Fade right>
          <div className="icons">
            <a href="mailto:salokhiddinov0727@gmail.com" target="blank">
              <EmailIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                }}
              />
            </a>
            <a href="https://github.com/Saddam-tech" target="blank">
              <GitHubIcon
                style={{
                  width: "30px",
                  height: "30px",
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
                  width: "30px",
                  height: "30px",
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
                  width: "30px",
                  height: "30px",
                  color: "white",
                }}
              />
            </a>
          </div>
          </Fade>
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
  background-color: #585563;
  flex-direction: column; 
 
  .container {
    display: flex;
    align-items: center;
    justify-content; center;
    flex-direction: row;
    width: 100%;
    margin: 70px;

    @media screen and (max-width: 728px) {
      flex-direction: column;
      width: 65%;

    }
  }
 

  .content {
    display: flex; 
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    width: 100%; 
    margin-left: 20px;
    padding: 50px;
    font-size: 20px;

    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 0; 
      font-size: 17px;
    }
    
  }
 

  p {
    width: 40%;
    @media screen and (max-width: 728px) {
      width: 100%;
    }

  }
 
  .icons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    cursor: pointer; 
    width: 30%;
    padding: 20px;

    @media screen and (max-width: 728px) {
      width: 80%;
    }
     
  }
`;
