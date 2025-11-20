import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Certificates = (props) => {
  const { t } = useTranslation();
  return (
    <Container>
      <div className="container">
        <h1>{t(props.title)}</h1>
        <h3>{props.content}</h3>
        <a 
          href={props.path} 
          download
          aria-label={`Download ${t(props.title)}`}
        >
          {props.jpg ? (
            <img
              src={props.jpg}
              className="image resume-image"
              alt={`${t(props.title)} preview`}
              loading="lazy"
              width="290"
              height="330"
            />
          ) : (
            <img 
              src={props.path} 
              alt={`${t(props.title)} preview`} 
              className="image" 
              loading="lazy"
            />
          )}
          <p>{t("click_to_download")}</p>
        </a>
      </div>
    </Container>
  );
};

export default Certificates;

const Container = styled.div`
  display: flex;
  width: clamp(250px, 25vw, 350px);
  align-items: center;
  justify-content: center;
  margin: 30px;
  padding: clamp(20px, 3vw, 30px);
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 5px 5px 30px rgba(80, 78, 78, 0.7);
  }

  @media screen and (max-width: 1024px) {
    width: clamp(220px, 40vw, 300px);
  }

  @media screen and (max-width: 728px) {
    width: 100%;
    max-width: 350px;
    margin: 20px auto;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    width: 100%;
    font-family: Space Grotesk, sans-serif;
  }

  .image {
    width: 100%;
    max-width: 100%;
    height: auto;
    position: relative;
    box-shadow: 9px 9px 9px #000000;
    object-fit: contain;
  }

  .resume-image {
    height: auto;
    width: 100%;
    max-width: 290px;
    max-height: 400px;
  }

  a {
    color: #fff;
    width: 100%;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      color: #d4c0c0;
      font-size: clamp(11px, 1.2vw, 13px);
      padding: clamp(8px, 1vw, 12px) clamp(15px, 2vw, 20px);
      background: #6b3030;
      margin-top: clamp(30px, 4vh, 50px);
      border-radius: 15px;
      font-weight: 600;
      border: none;
      width: clamp(120px, 40%, 180px);
      transition: 0.3s ease;
      cursor: pointer;
      text-align: center;
      &:hover {
        background: #801414;
        transform: scale(1.05);
      }
    }
  }
`;
