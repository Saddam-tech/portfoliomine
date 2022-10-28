import React from "react";
import styled from "styled-components";

const Certificates = (props) => {
  return (
    <Container>
      <div className="container">
        <h1>{props.title}</h1>
        <h3>{props.content}</h3>
        <a href={props.path} download>
          {props.jpg ? (
            <img
              src={props.jpg}
              style={{ height: "330px", width: "290px" }}
              alt="diploma"
              className="image"
            />
          ) : (
            <img src={props.path} alt="diploma" className="image" />
          )}
          <p>Click to download</p>
        </a>
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
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  cursor: pointer;
  transition: 0.5s ease-out;

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
    font-family: Space Grotesk, sans-serif;
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    p {
      color: #d4c0c0;
      font-size: 12px;
      padding: 10px 20px;
      background: #6b3030;
      margin-top: 50px;
      border-radius: 15px;
      font-weight: 600;
      border: none;
      width: 40%;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        background: #801414;
      }
    }
  }
`;
