import React, { useState, Fragment } from "react";

import styled from "styled-components";
import Background from "../assets/lights2.jpg";
import Certificate from "./Certificate";
import Footer from "./Footer";

const Certificates = () => {
  const [certificates] = useState([
    {
      title: "ReactJs certificate",
      content:
        "Successfully completed 40.5 total hours of React - The Complete Guide (incl Hooks, React Router, Redux) online course on Nov. 18, 2020",
      type: "react",
      path: "./videos/Saddam-reactjs-certificate.jpeg",
    },
    {
      title: "JavaScript certificate",
      content:
        "Successfully completed 68.5 total hours of The Complete JavaScript Course 2021 online course on March 29, 2021",
      type: "javascript",
      path: "./videos/javascript.jpeg",
    },
    {
      title: "My resume",
      content: null,
      type: "resume",
      jpg: "./videos/Sam-resume-jpg.jpg",
      path: "./videos/Sam-resume.pdf",
    },
  ]);

  return (
    <Container id="testimonial">
      <div className="container">
        {certificates.map((certificate) => (
          <Fragment>
            <Certificate
              title={certificate.title}
              content={certificate.content}
              src={certificate.type}
              path={certificate.path}
              jpg={certificate.jpg}
            />
          </Fragment>
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
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
  .cards {
    display: ;
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
