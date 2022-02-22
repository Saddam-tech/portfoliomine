import React from "react";
import styled from "styled-components";

const Project = ({ link, title, description, src, video }) => {
  return (
    <Container>
      <div className="container">
        <a href={link} target="blank">
          <h3>{title}</h3>
          <h4>{description}</h4>
          {video ? (
            <video src={src} className="image" autoPlay muted loop="true" />
          ) : (
            <img src={src} alt="pictures" className="image" />
          )}
        </a>
        <p>Click to go to the website</p>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  width: 15%;
  align-items: center;
  justify-content: center;
  margin: 30px;
  padding: 30px;
  border: 2px solid white;
  border-radius: 0 100px;
  cursor: pointer;
  transition: 0.5s ease-out;
  :hover {
    border-radius: 100px;
    transition: 0.5s ease-in;
    background: white;
  }

  @media screen and (max-width: 728px) {
    width: 100%;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    width: 100%;
    font-family: Optima, sans-serif;
    :hover {
      color: black;
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
  a:hover {
    color: black;
  }

  .image {
    width: 100%;
    height: 50%;
    position: relative;
    box-shadow: 9px 9px 9px #000000;
  }
`;
