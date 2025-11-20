import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <Container id="about">
      <div className="container">
        <div className="content">
          <span className="border"></span>
          <Fade right>
            <h1>{t("about_me")}</h1>
            <p>{t("description_1")}</p>

            <h1>{t("employment_history")}</h1>
            <p>Darwin Intelligence</p>
            <p>(2025.03 ~ Present) {t("description_5")}</p>
            <p>LiberVance</p>
            <p>
              (2022.03 ~ 2025.03) {t("description_4")} <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/1_tDKk5OF8JIsOx_y99o3Gy7s-lcz-NtYkjjYl81hxXs/edit?usp=sharing"
              >
                {t("doc_link")}
              </a>
              <p>CreditIT</p>
              <p>(2021.11 ~ 2022.03) {t("description_2")}</p>
            </p>
          </Fade>
          <Fade left>
            <h1 className="heading2">{t("contact_details")}</h1>
            <div className="contact-details">
              <p>Saddam Salokhiddinov</p>
              <p>{t("location")}</p>
              <a href="tel:01084103777">{t("phone")}: 010 8410 3777</a>
            </div>
          </Fade>
          <span className="border"></span>
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
  background-color: #0f1624;
  flex-direction: column;
  color: #e4e4e6;

  @media screen and (max-width: 728px) {
    width: 90%;
  }

  .border {
    width: 80px;
    height: 5px;
    border-radius: 50px;
    margin-top: 40px;
    background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 90%;
    max-width: 900px;
    margin: 70px auto;

    @media screen and (max-width: 728px) {
      flex-direction: column;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin: 0;
    padding: 28px;
    font-size: 20px;
    font-family: Space Grotesk, sans-serif;

    h1 {
      font-weight: 800;
      font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
      margin-bottom: 1rem;
    }

    h2 {
      font-weight: 800;
      font-size: clamp(1.5rem, 2.5vw + 0.5rem, 2rem);
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.4;
      margin-bottom: 0.75rem;
    }

    p {
      line-height: 1.6;
      font-size: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);
      color: rgba(255, 255, 255, 0.5);
      margin-bottom: 1rem;
    }

    @media screen and (max-width: 1024px) {
      h1 {
        font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      }
      h2 {
        font-size: clamp(1.25rem, 2vw + 0.5rem, 1.75rem);
      }
      p {
        font-size: clamp(0.95rem, 1.2vw + 0.3rem, 1.1rem);
      }
    }

    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 0;
      font-size: 1rem;

      h1 {
        font-size: clamp(1.5rem, 4vw, 2rem);
        margin-bottom: 0.75rem;
      }
      h2 {
        font-size: clamp(1.25rem, 3vw, 1.5rem);
        margin-bottom: 0.5rem;
      }
      p {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
        line-height: 1.5;
        margin-bottom: 0.75rem;
      }

      a {
        font-size: clamp(0.9rem, 2vw, 1.1rem);
      }
    }
  }

  .contact-details {
    margin-bottom: 30px;
    line-height: 1.6;
    font-size: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);
    color: rgba(255, 255, 255, 0.5);
  }

  a {
    line-height: 1.6;
    font-size: clamp(1rem, 1.5vw + 0.5rem, 1.25rem);
    color: rgba(255, 255, 255, 0.5);
  }
`;
