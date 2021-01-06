import React, { useState } from "react";
import styled from "styled-components";
import Project from "./Project";
import Background from "../assets/background.jpeg";

const Resume = () => {
  const [projects] = useState([
    {
      card: {
        title: "SkynetCloud",
        description: "this website is a simple cloud for storing your notes",
        link: "https://skynetcloud.netlify.app/",
      },
    },
  ]);

  const project = projects.map((project) => (
    <Project
      title={project.card.title}
      description={project.card.description}
      link={project.card.link}
    />
  ));

  return (
    <Container id="resume">
      {project.map((project) => (
        <div className="container">
          {project}
          {project}
          {project}
          {project}
          {project}
          {project}
        </div>
      ))}
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  object-fit: contain;
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
`;
