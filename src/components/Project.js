import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
const Project = ({ link, title, description, src, video, gh }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {video ? (
          <video src={src} className="image" autoPlay muted loop aria-label={`${title} project video`} />
        ) : (
          <img 
            src={src} 
            alt={`${title} project screenshot`} 
            className="image" 
            loading="lazy"
            width="400"
            height="250"
          />
        )}
        <h3>{title}</h3>
        <h4>{t(description)}</h4>
      </a>
      <div className="button-wrap">
        <a href={gh} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} source code`}>
          {t("code")}
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title} project`}>
          {t("redirect_link")}
        </a>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  width: clamp(300px, 30vw, 400px);
  min-height: 500px;
  max-height: 600px;
  margin: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 30px rgba(80, 78, 78, 0.7);
  }

  @media screen and (max-width: 1024px) {
    width: clamp(280px, 45vw, 380px);
  }

  @media screen and (max-width: 728px) {
    width: 100%;
    max-width: 400px;
    margin: 15px auto;
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

  > a {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #fff;
    height: 100%;
    padding-bottom: 60px;
  }

  a:link,
  a:visited {
    color: #fff;
    text-decoration: none;
  }

  h3 {
    width: 100%;
    padding: 1rem clamp(15px, 4vw, 30px) 0.5rem;
    color: #e4e6e7;
    font-size: clamp(1.1rem, 1.5vw + 0.5rem, 1.4rem);
    line-height: 1.4;
    text-align: center;
    margin: 0;
    font-weight: 700;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    box-sizing: border-box;
  }

  h4 {
    width: 100%;
    padding: 0 clamp(15px, 4vw, 30px);
    color: #e4e6e7;
    font-size: clamp(0.9rem, 1.2vw + 0.3rem, 1.1rem);
    line-height: 1.5;
    text-align: left;
    margin: 0 0 1rem;
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    box-sizing: border-box;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  }

  .image {
    width: 100%;
    height: clamp(200px, 25vh, 280px);
    min-height: 200px;
    max-height: 280px;
    object-fit: cover;
    position: relative;
    border-radius: 10px 10px 0 0;
  }
`;
