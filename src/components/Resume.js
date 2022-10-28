import React, { useState } from "react";
import styled from "styled-components";
import Project from "./Project";
import Background from "../assets/background.jpeg";

const Resume = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Espotworld",
      description:
        "[made by CredIT] One of the websites where I made a huge contribution to the development of the game side, UI and websocket communication with the backend",
      link: "https://espotworld.com/",
      src: "./videos/espot.png",
    },
    {
      id: 2,
      title: "Korowd.com",
      description:
        "[made by CredIT] Here I implemented the communication of the client side with the server on all parts for fetching and posting data",
      link: "https://korowd.com/",
      src: "./videos/korowd.png",
    },
    {
      id: 7,
      title: "Forkify App",
      description:
        "Food search and recipe finder website that uses real-time API to fetch data from",
      link: "https://forkifymine.netlify.app/",
      src: "./videos/forkify.mp4",
      video: true,
    },
    {
      id: 8,
      title: "NewsFeed App",
      description:
        "News website that feeds the latest news from a real-time API",
      link: "https://newsfeed.netlify.app/",
      src: "./videos/newsfeed.mp4",
      video: true,
    },
  ]);

  return (
    <Container id="resume">
      <div className="container">
        {projects.map((item) => (
          <Project
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            src={item.src}
            video={item.video}
          />
        ))}
      </div>
    </Container>
  );
};

export default Resume;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #0f1624;

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    flex-wrap: wrap;
  }

  .project {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
