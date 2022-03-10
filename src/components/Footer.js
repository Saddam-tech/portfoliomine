import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Fade } from "react-reveal";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <Container>
      <div>
        <p>Keep in touch with me on social media:</p>
        <Fade bottom>
          <div className="icons">
            <a href="https://github.com/Saddam-tech" target="blank">
              <GitHubIcon
                style={{
                  width: "30px",
                  height: "30px",
                  color: "white",
                  opacity: "0.5",
                }}
              />
            </a>
            <a href="mailto:salokhiddinov0727@gmail.com" target="blank">
              <EmailIcon
                style={{
                  width: "30px",
                  height: "30px",
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
                  width: "30px",
                  height: "30px",
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
                  width: "30px",
                  height: "30px",
                  color: "white",
                  opacity: "0.5",
                }}
              />
            </a>
          </div>
        </Fade>
        <div className="copyright">
          Copyright © {date} SaddamTech Inc. All Rights Reserved.
        </div>
        <div className="icon-container">
          <Scroll to="header" smooth={true} duration={1000} spy={true}>
            <ArrowDropDownCircleIcon
              style={{ fontSize: "50px", color: "white", opacity: "0.2" }}
            />
          </Scroll>
        </div>
      </div>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  background: #011627;
  width: 100%;
  color: #fff;
  font-family: Courier New, monospace;
  text-align: center;

  div {
    width: 100%;
    margin: auto;
  }

  .icons {
    display: flex;
    justify-content: center;
    padding: 40px;
    gap: 50px;
    width: 50%;
    align-items: center;
  }

  .copyright {
    opacity: 0.8;
    margin-bottom: 50px;
  }
`;
