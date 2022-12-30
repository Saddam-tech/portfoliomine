import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const Project = ({ link, title, description, src, video, gh }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <a href={link} target="blank">
        {video ? (
          <video src={src} className="image" autoPlay muted loop />
        ) : (
          <img src={src} alt="pictures" className="image" />
        )}
        <h3>{title}</h3>
        <h4>{t(description)}</h4>
      </a>
      <div className="button-wrap">
        <a href={gh} target="blank">
          {t("code")}
        </a>
        <a href={link} target="blank">
          {t("redirect_link")}
        </a>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  cursor: pointer;
  position: relative;

  @media screen and (max-width: 728px) {
    width: 100%;
  }

  .button-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 20px;
    width: 70%;

    a {
      color: #d4c0c0;
      font-size: 12px;
      padding: 10px 20px;
      background: #6b3030;
      border-radius: 15px;
      font-weight: 600;
      border: none;
      transition: 0.5s;
      width: 80px;
      text-align: center;
      cursor: pointer;
      &:hover {
        background: #801414;
      }
    }
    @media screen and (max-width: 728px) {
      display: none;
    }
  }

  a:link {
    color: #fff;
    text-decoration: none;
  }
  a:visited {
    color: #fff;
    text-decoration: none;
  }

  h3,
  h4 {
    width: 300px;
    padding: 0 50px;
    color: #e4e6e7;
    font-style: 2rem;
    line-height: 24px;
    text-align: justify;
  }

  a {
    width: 100%;
  }

  .image {
    width: 100%;
    height: 250px;
    position: relative;
  }
`;
