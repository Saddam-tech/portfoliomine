import React, { useState } from "react";

import styled from "styled-components";
import Certificate from "./Certificate";
import Footer from "./Footer";

const Certificates = () => {
  const [certificates] = useState([
    {
      id: 3,
      title: "My resume",
      content: null,
      type: "resume",
      jpg: "./videos/resume-picture.jpg",
      path: "./videos/resume-sam.pdf",
    },
  ]);

  return (
    <Container id="testimonial">
      <div className="container">
        {certificates.map((certificate) => (
          <Certificate
            key={certificate.id}
            title={certificate.title}
            content={certificate.content}
            src={certificate.type}
            path={certificate.path}
            jpg={certificate.jpg}
          />
        ))}
      </div>

      <Footer />
    </Container>
  );
};

export default Certificates;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: #0f1624;

  @media screen and (max-width: 728px) {
    width: 100%;
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }

  .project {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .icon-container {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transform: rotate(180deg);
    @media screen and (max-width: 728px) {
      width: 100%;
    }
  }
`;
