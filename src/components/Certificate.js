import React from "react";
import styled from "styled-components";

const Certificates = (props) => {
  return (
    <Container>
      <div className="container">
        <h1>{props.title}</h1>
        <h3>{props.content}</h3>
        {props.src === "react" ? (
          <a href="./videos/myDiploma.jpg" download>
            <img src="./videos/myDiploma.jpg" alt="diploma" className="image" />{" "}
            <p>Press to download</p>
          </a>
        ) : (
          <a href="./videos/javascript.jpeg" download>
            <img
              src="./videos/javascript.jpeg"
              alt="diploma"
              className="image"
            />
            <p>Press to download</p>
          </a>
        )}
      </div>
    </Container>
  );
};

export default Certificates;

const Container = styled.div`
  display: flex;
  width: 20%;
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

  .image {
    width: 100%;
    height: 50%;
    position: relative;
    box-shadow: 9px 9px 9px #000000;
  }

  a {
    color: #fff;
    width: 100%;
    text-align: center;
    text-decoration: none;
  }

  a:hover {
    color: #000;
  }
`;
