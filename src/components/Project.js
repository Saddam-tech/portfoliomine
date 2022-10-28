import React from "react";
import styled from "styled-components";

const Project = ({ link, title, description, src, video }) => {
  return (
    <Container>
      <div className="container">
        <a href={link} target="blank">
          {video ? (
            <video src={src} className="image" autoPlay muted loop />
          ) : (
            <img src={src} alt="pictures" className="image" />
          )}
          <h3>{title}</h3>
          <h4>{description}</h4>
        </a>
        <div className="button-wrap">
          <button>Code</button>
          <button>Redirect Link</button>
        </div>
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
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  width: 400px;
  cursor: pointer;

  @media screen and (max-width: 728px) {
    width: 100%;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    color: white;
    width: 100%;
    font-family: Space Grotesk, sans-serif;
    position: relative;

    .button-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: absolute;
      bottom: 20px;
      width: 70%;

      button {
        color: #d4c0c0;
        font-size: 12px;
        padding: 10px 20px;
        background: #6b3030;
        border-radius: 15px;
        font-weight: 600;
        border: none;
        transition: 0.5s;
        cursor: pointer;
        &:hover {
          background: #801414;
        }
      }
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

  .image {
    width: 100%;
    height: 250px;
    position: relative;
    box-shadow: 9px 9px 9px #000000;
  }
`;
