import React from "react";
import styled from "styled-components";
import Skills from './Skills';
import GitHubIcon from "@material-ui/icons/GitHub";


const About = () => {
  return (
    <Container id="about">
      <div className="wrapper1">
        <img src="./videos/mypic.PNG" alt="pic" />
        <div className="text">
          <h1 className="heading1">About me</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
        </div>
      </div>
      <div className="wrapper2">
        <h1 className="heading2">Contact details</h1>
        <p>Saddam Salokhiddinov</p>
        <p>Uzbekistan</p>
        <a href="https://github.com/Saddam-tech" target='blank'>
              <GitHubIcon
                style={{
                  width: "70px",
                  height: "70px",
                  color: "white", 
                }}
              />
            </a>
      </div>
      <Skills />
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  background: #585563;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .wrapper1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    height: 50%;
    position: relative;
    left: -100px;
  }

  .text {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    left: 190px;
    width: 70%;
    height: 50%;
    font-size: 23px;
  }

  .heading1 {
    position: relative;
    width: 100%;
  }

  img {
    position: relative;
    left: 10px;
    width: 20%;
    height: 50%;
  }

  .wrapper2 {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    position: relative;
    left: 170px;
    top: -20px;
    font-size: 20px;
    margin: 10px;
    padding: 20px;
  }
`;
