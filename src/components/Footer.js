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
  return (
    <React.Fragment>
      <Container>
        <div>
          <p>Keep in touch with me on social media:</p>
          <Fade bottom>
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
              <a href="mailto:salokhiddinov0727@gmail.com" target="blank">
                <EmailIcon
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
          </Fade>
          <div className="icon-container">
            <Scroll to="header" smooth={true} duration={1000} spy={true}>
              <ArrowDropDownCircleIcon
                style={{ fontSize: "50px", color: "white" }}
              />
            </Scroll>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  background: #011627;
  width: 100%;
  color: #fff;
  font-family: Optima, sans-serif;
`;
