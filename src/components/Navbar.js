import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Link as Scroll } from "react-scroll";
import { useTranslation } from "react-i18next";
const Navbar = ({ drawer, setDrawer }) => {
  const { t, i18n } = useTranslation();

  function changeLng(e) {
    let lng;
    e.target.checked ? (lng = "kr") : (lng = "en");
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
                offset={-70}
                className="link"
                role="link"
                tabIndex={0}
              >
                {t("home")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="about"
                smooth={true}
                duration={1000}
                offset={-70}
                spy={true}
                className="link"
                role="link"
                tabIndex={0}
              >
                {t("about")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="resume"
                smooth={true}
                duration={1000}
                offset={-70}
                spy={true}
                className="link"
                role="link"
                tabIndex={0}
              >
                {t("projects")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="testimonial"
                smooth={true}
                duration={1000}
                offset={-70}
                spy={true}
                className="link"
                role="link"
                tabIndex={0}
              >
                {t("more")}
              </Scroll>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setDrawer((prev) => !prev)}
          id="nav-icon2"
          className={drawer ? "open" : ""}
          aria-label={drawer ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={drawer}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <div className="switch">
          <input
            id="language-toggle"
            className="check-toggle check-toggle-round-flat"
            type="checkbox"
            onChange={(e) => changeLng(e)}
          />
          <label htmlFor="language-toggle"></label>
          <span className="on">EN</span>
          <span className="off">KR</span>
        </div>
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
  z-index: 999;

  @media screen and (max-width: 728px) {
    justify-content: space-between;
    align-items: center;
  }

  /* Simplified 3-bar hamburger button */
  #nav-icon2 {
    width: 48px;
    height: 40px;
    position: relative;
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease;

    @media screen and (min-width: 728px) {
      display: none;
    }
  }

  #nav-icon2 span {
    display: block;
    width: 26px;
    height: 3px;
    background: #47c8d6;
    border-radius: 2px;
    transition: transform 0.28s ease, opacity 0.2s ease;
  }

  /* Open state: morph into an X */
  #nav-icon2.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  #nav-icon2.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0.1);
  }
  #nav-icon2.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

  .switch {
    position: relative;
    display: inline-block;
    margin: 0 5px;

    @media screen and (max-width: 728px) {
      margin: 10px 10px 0;
      align-self: center;
    }
  }

  .switch > span {
    position: absolute;
    top: 9px;
    pointer-events: none;
    font-family: "Helvetica", Arial, sans-serif;
    font-weight: bold;
    font-size: 10px;
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
    /* width: 97px;
    height: 35px; */
    width: 57px;
    height: 25px;
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
    left: 6px;
    bottom: 4px;
    width: 22px;
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
    margin-left: 25px;
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 728px) {
      display: none;
    }
  }

  /* hover background removed for navigation */

  .ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    list-style-type: none;
    width: auto;
    height: 30px;
    opacity: 0.9;
    gap: clamp(12px, 3vw, 32px);

    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 15px;
      gap: 14px;
    }
  }
  li {
    display: inline-block;
    position: relative;
    margin: 0;
    padding: 0;
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
  /* li:hover {
    transition: 0.25s;
    background: rgba(55, 105, 202, 0.14);
  } */

  .link {
    font-family: Space Grotesk, sans-serif;
    font-size: clamp(16px, 1.5vw, 20px);
    text-decoration: none;
    cursor: pointer;
    color: white;
    padding: clamp(6px, 0.7vw, 10px);
    border-radius: 5px;
    transition: color 0.3s ease;
    outline: none;

    &:focus {
      box-shadow: 0 0 0 3px rgba(71, 200, 214, 0.18);
    }

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }

    @media screen and (max-width: 1024px) {
      font-size: clamp(15px, 1.8vw, 18px);
    }

    @media screen and (max-width: 728px) {
      font-size: clamp(14px, 2vw, 17px);
    }
  }

  @media screen and (max-width: 728px) {
    li {
      margin: 0;
      padding: 7px;
    }
  }
`;
