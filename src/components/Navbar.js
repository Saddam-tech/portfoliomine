import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Link as Scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const { t, i18n } = useTranslation();

  function changeLng(e) {
    let lng;
    e.target.checked ? (lng = "en") : (lng = "kr");
    i18n.changeLanguage(lng);
  }
  return (
    <Body>
      <Fade top>
        <nav className="navigation">
          <ul className="ul">
            <li>
              <Scroll
                to="header"
                smooth={true}
                duration={1000}
                className="link"
              >
                {t("home")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="about"
                smooth={true}
                duration={1000}
                spy={true}
                className="link"
              >
                {t("about")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="resume"
                smooth={true}
                duration={1000}
                spy={true}
                className="link"
              >
                {t("projects")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="testimonial"
                smooth={true}
                duration={1000}
                spy={true}
                className="link"
              >
                {t("more")}
              </Scroll>
            </li>
          </ul>
        </nav>
        <center>
          <div className="switch">
            <input
              id="language-toggle"
              className="check-toggle check-toggle-round-flat"
              type="checkbox"
              onChange={(e) => changeLng(e)}
            />
            <label htmlFor="language-toggle"></label>
            <span className="on">KR</span>
            <span className="off">EN</span>
          </div>
        </center>
      </Fade>
    </Body>
  );
};

export default Navbar;

const Body = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  list-style-type: none;
  align-items: center;
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;

  .switch {
    position: relative;
    display: inline-block;
    margin: 0 5px;
  }

  .switch > span {
    position: absolute;
    top: 14px;
    pointer-events: none;
    font-family: "Helvetica", Arial, sans-serif;
    font-weight: bold;
    font-size: 12px;
    text-transform: uppercase;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
    width: 50%;
    text-align: center;
  }

  input.check-toggle-round-flat:checked ~ .off {
    color: #47c8d6;
  }

  input.check-toggle-round-flat:checked ~ .on {
    color: #fff;
  }

  .switch > span.on {
    left: 0;
    padding-left: 2px;
    color: #47c8d6;
  }

  .switch > span.off {
    right: 0;
    padding-right: 4px;
    color: #fff;
  }

  .check-toggle {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }
  .check-toggle + label {
    display: block;
    position: relative;
    cursor: pointer;
    outline: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  input.check-toggle-round-flat + label {
    opacity: 0.5;
    padding: 2px;
    width: 97px;
    height: 35px;
    background-color: #47c8d6;
    -webkit-border-radius: 60px;
    -moz-border-radius: 60px;
    -ms-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px;
  }
  input.check-toggle-round-flat + label:before,
  input.check-toggle-round-flat + label:after {
    display: block;
    position: absolute;
    content: "";
  }

  input.check-toggle-round-flat + label:before {
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background-color: #47c8d6;
    // -webkit-

    -moz-border-radius: 60px;
    -ms-border-radius: 60px;
    -o-border-radius: 60px;
    border-radius: 60px;
  }
  input.check-toggle-round-flat + label:after {
    top: 4px;
    left: 4px;
    bottom: 4px;
    width: 48px;
    background-color: #fff;
    -webkit-border-radius: 52px;
    -moz-border-radius: 52px;
    -ms-border-radius: 52px;
    -o-border-radius: 52px;
    border-radius: 52px;
    -webkit-transition: margin 0.2s;
    -moz-transition: margin 0.2s;
    -o-transition: margin 0.2s;
    transition: margin 0.2s;
  }

  input.check-toggle-round-flat:checked + label {
  }

  input.check-toggle-round-flat:checked + label:after {
    margin-left: 44px;
  }

  @media screen and (max-width: 728px) {
    width: 0;
    margin: 0;
    padding: 0;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    width: 100%;
    height: 100%;
  }

  .navigation:hover {
    background: rgba(55, 105, 202, 0.14);
  }

  .ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    list-style-type: none;
    width: 40%;
    height: 30px;
    opacity: 0.6;

    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 15px;
    }
  }
  li {
    display: inline-block;
    position: relative;
    /* padding: 16px; */
    font-size: 18px;
  }
  li:after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  li:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
  li:hover {
    transition: 0.25s;
    background: rgba(55, 105, 202, 0.14);
  }

  .link {
    font-family: Space Grotesk, sans-serif;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  @media screen and (max-width: 728px) {
    li {
      margin: 0;
      padding: 7px;
    }
  }
`;
