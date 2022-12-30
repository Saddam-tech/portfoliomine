import React, { useState, useEffect } from "react";
import { Link as Scroll } from "react-scroll";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
function Drawer({ drawer, setDrawer }) {
  const [list] = useState([
    { text: "home", to: "header" },
    { text: "about", to: "about" },
    { text: "projects", to: "resume" },
    { text: "more", to: "testimonial" },
  ]);
  const { t } = useTranslation();
  return (
    <Container drawer={drawer}>
      <ul>
        {list.map((el, i) => (
          <li key={i}>
            <Scroll
              onClick={() => setDrawer((prev) => !prev)}
              to={el.to}
              smooth={true}
              duration={1000}
              className="link"
            >
              {t(el.text)}
            </Scroll>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Drawer;

const Container = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: 100vh;
  transform: ${({ drawer }) => (!drawer ? "translate(-400px)" : "")};
  transition: 0.4s ease-in-out;
  opacity: 0.9;
  width: 75%;
  z-index: 998;
  overflow: hidden;

  ul {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    height: 100%;
    width: 100%;
    padding: 0;

    li {
      font-size: 24px;
      list-style-type: none;
    }

    li {
      display: inline-block;
      position: relative;
      padding: 16px;
      width: 100%;
      color: #000000;
      font-size: 18px;
      letter-spacing: 0.3px;
    }
    li:after {
      content: "";
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: #000000;
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }
    li:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    li:hover {
      transition: 0.25s;
      background-color: #f2f2f2;
    }
  }
  @media screen and (min-width: 728px) {
    display: none;
  }
`;
