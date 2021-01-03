import React from "react";
import styled from "styled-components";

const Project = (props) => {
  return (
    <Container>
      <div className="container">
        <h3>{props.title}</h3>
        <h4>{props.description}</h4>
        <a href={props.link} target="blank">
          <img src="./videos/skynet.png" alt="pic" className="image" />
        </a>
      </div>
    </Container>
  );
};

export default Project;

const Container = styled.div`
  display: flex;
  width: 20%;
  height: 40%;
  align-items: center;
  justify-content: center;
  margin: 30px;
  padding: 30px;
  border: 10px solid white;
  border-radius: 0 100px;
  cursor: pointer;
  transition: 0.5s ease-out;
  :hover {
    border-radius: 100px;
    transition: 0.5s ease-in;
    background: white;
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

  .image {
    width: 100%;
    height: 50%;
    position: relative;
  }
`;
