import React from "react";
import styled from "styled-components";
import Skills from "./Skills";
import { Fade } from "react-reveal";
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
            <p>CreditIT</p>
            <p>(2021.11.01 ~ 2022.03.01) {t("description_2")}</p>
            <p>ChainlabsIT</p>
            <p>(2022.03.01 ~ 2023.02) {t("description_3")}</p>
            <p>LiberVance</p>
            <p>(2023.03.01 ~ 2025.03.12) {t("description_4")}</p>
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
  background-color: #0F1624;
  flex-direction: column; 
  color: #E4E4E6;

  .border {
    width: 80px;
    height: 5px;
    border-radius: 50px;
    margin-top: 40px;
    background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  }
 
  .container {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 40%;
    margin: 70px;
    

    

    @media screen and (max-width: 728px) {
      flex-direction: column;
      width: 65%;

    }
  }
 

  .content {
    display: flex; 
    justify-content: flex-start;
    flex-direction: column; 
    width: 100%; 
    margin-left: 20px;
    padding: 50px;
    font-size: 20px;
    font-family: Space Grotesk, sans-serif;

    h1 {
      font-weight: 800;
      font-size: 65px;
      background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

   
    h2 {
      font-weight: 800;
      font-size: 32px;
      background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }

    p {
      line-height: 40px;
      font-size: 24px;
      color: rgba(255, 255, 255, 0.5);
    }

    @media screen and (max-width: 728px) {
      margin: 0;
      padding: 0; 
      font-size: 17px;

      h1 {
        font-size: 24px;
      }
      h2 {
        font-size: 24px;
      }
      p {
        font-size: 20px;
      }

      a {
        font-size: 17px;
      }
      
    }
    
  }


  }

  .contact-details {
    margin-bottom: 30px;
    line-height: 40px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
  }

  a { 
    line-height: 40px;
    font-size: 24px;
    color: rgba(255, 255, 255, 0.5);
  }
`;
