import React from "react";
import styled from "styled-components";
import { Link as Scroll } from "react-scroll";
import { useTranslation } from "react-i18next";

const Navbar = ({ drawer, setDrawer }) => {
  const { t, i18n } = useTranslation();

  function changeLng(e) {
    const lng = e.target.checked ? "kr" : "en";
    i18n.changeLanguage(lng);
  }

  return (
    <NavBar role="navigation" aria-label="Main Navigation">
      <NavInner>
        <Brand>
          <a href="#header">PM</a>
        </Brand>

        <NavCenter>
          <NavList>
            <li>
              <Scroll
                to="header"
                smooth
                duration={800}
                offset={-70}
                className="link"
                tabIndex={0}
              >
                {t("home")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="about"
                smooth
                duration={800}
                offset={-70}
                className="link"
                tabIndex={0}
              >
                {t("about")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="resume"
                smooth
                duration={800}
                offset={-70}
                className="link"
                tabIndex={0}
              >
                {t("projects")}
              </Scroll>
            </li>
            <li>
              <Scroll
                to="testimonial"
                smooth
                duration={800}
                offset={-70}
                className="link"
                tabIndex={0}
              >
                {t("more")}
              </Scroll>
            </li>
          </NavList>
        </NavCenter>

        <Controls>
          <Lang>
            <input
              id="language-toggle"
              className="check-toggle"
              type="checkbox"
              onChange={changeLng}
            />
            <label htmlFor="language-toggle" aria-hidden="true"></label>
            <span className="on">EN</span>
            <span className="off">KR</span>
          </Lang>

          <Hamburger
            onClick={() => setDrawer((p) => !p)}
            aria-label={drawer ? "Close menu" : "Open menu"}
            aria-expanded={drawer}
          >
            <span />
            <span />
            <span />
          </Hamburger>
        </Controls>
      </NavInner>
    </NavBar>
  );
};

export default Navbar;

const NavBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: transparent;
  display: block;
`;

const NavInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 20px;
`;

const Brand = styled.div`
  a {
    color: #47c8d6;
    font-weight: 800;
    text-decoration: none;
    font-family: Space Grotesk, sans-serif;
    font-size: 1.1rem;
  }
`;

const NavCenter = styled.nav`
  flex: 1 1 auto;
  display: flex;
  justify-content: center;
`;

const NavList = styled.ul`
  display: flex;
  gap: clamp(12px, 3vw, 32px);
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
  }

  .link {
    color: #ffffff;
    text-decoration: none;
    font-family: Space Grotesk, sans-serif;
    font-size: clamp(15px, 1.6vw, 20px);
    padding: 6px 8px;
    border-radius: 6px;

    &:focus {
      outline: 3px solid rgba(71, 200, 214, 0.18);
      outline-offset: 2px;
    }
  }

  @media screen and (max-width: 728px) {
    display: none;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Lang = styled.div`
  position: relative;
  display: inline-block;

  .check-toggle {
    position: absolute;
    left: -9999px;
  }

  label {
    display: block;
    width: 54px;
    height: 26px;
    background: #47c8d6;
    border-radius: 999px;
    position: relative;
    opacity: 0.85;
  }

  label:after {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    width: 18px;
    height: 18px;
    background: #fff;
    border-radius: 50%;
    transition: transform 0.18s ease;
  }

  .check-toggle:checked + label:after {
    transform: translateX(28px);
  }

  .on,
  .off {
    display: none;
  }

  @media screen and (max-width: 728px) {
    display: none;
  }
`;

const Hamburger = styled.button`
  width: 44px;
  height: 36px;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  span {
    display: block;
    height: 3px;
    width: 26px;
    background: #47c8d6;
    border-radius: 2px;
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  @media screen and (min-width: 729px) {
    display: none;
  }
`;
