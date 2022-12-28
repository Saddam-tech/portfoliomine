import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Fade } from "react-reveal";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import ArrowDropDownCircleIcon from "@material-ui/icons/ArrowDropDownCircle";
import { Link as Scroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const date = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <Container>
      <div>
        <p>{t("keep_in_touch")}</p>
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
          Copyright © {date} SaddamTech Inc. <br />
          All Rights Reserved.
        </div>
        <div className="icon-container">
          <Scroll to="header" smooth={true} duration={1000} spy={true}>
            <ArrowDropDownCircleIcon
              style={{
                fontSize: "50px",
                color: "white",
                opacity: "0.2",
                paddingBottom: "30px",
              }}
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
  background-color: #0f1624;
  width: 100%;
  color: #fff;
  font-family: Space Grotesk, sans-serif;
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
    width: 80%;
    line-height: 24px;
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px 0;
  }
`;
