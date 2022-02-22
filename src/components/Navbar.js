import React from "react";
import styled from "styled-components";
import { Fade } from "react-reveal";
import { Link as Scroll } from "react-scroll";
const Navbar = () => {
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
                Home
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
                About
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
                Projects
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
                More
              </Scroll>
            </li>
          </ul>
        </nav>
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

  @media screen and (max-width: 728px) {
    width: 0;
    margin: 0;
    padding: 0;
    background: rgba(55, 105, 202, 0.14);
  }

  .navigation {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    width: 100%;
    height: 100%;

    :hover {
      background: rgba(55, 105, 202, 0.14);
      transition: 0.5s ease;
    }
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
    :hover {
      opacity: 1;
    }
  }
  li {
    display: inline-block;
    position: relative;
    padding: 16px;
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
  }

  .link {
    font-family: Optima, sans-serif;
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }

  @media screen and (max-width: 728px) {
    li {
      left: -20px;
    }
  }
`;
