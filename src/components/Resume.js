import React, { useState } from "react";
import styled from "styled-components";
import Project from "./Project";

const Resume = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Espotworld",
      description:
        "One of the websites where I made a huge contribution to the development of the game side, UI and websocket communication with the backend",
      link: "https://espotworld.com/",
      src: "./videos/espot.png",
      gh: "https://github.com/Saddam-tech/classpot-front.git",
    },
    {
      id: 2,
      title: "Korowd.com",
      description:
        "Here I implemented the communication of the client side with the server on all parts for fetching and posting data",
      link: "https://korowd.com/",
      src: "./videos/korowd.png",
      gh: "https://github.com/teamcredit/korowd-front.git",
    },
    {
      id: 7,
      title: "Forkify App",
      description:
        "Food search and recipe finder website that uses real-time API to fetch data from",
      link: "https://forkifymine.netlify.app/",
      src: "./videos/forkify.mp4",
      gh: "https://github.com/Saddam-tech/forkifymine.git",
      video: true,
    },
    {
      id: 8,
      title: "NewsFeed App",
      description:
        "News website that feeds the latest news from a real-time API",
      link: "https://newsfeed.netlify.app/",
      src: "./videos/newsfeed.mp4",
      gh: "https://github.com/Saddam-tech/newsFeed.com.git",
      video: true,
    },
  ]);

  return (
    <Container id="resume">
      <div className="header">
        <span className="border"></span>
        <h1>Projects</h1>
      </div>
      <div className="container">
        {projects.map((item) => (
          <Project
            key={item.id}
            title={item.title}
            description={item.description}
            link={item.link}
            gh={item.gh}
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: #0f1624;
  position: relative;
  margin: 0;
  padding: 0;

  .header {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    left: 500px;
    top: 0;

    .border {
      width: 80px;
      height: 5px;
      border-radius: 50px;
      background: linear-gradient(270deg, #13adc7 0%, #945dd6 100%);
    }

    h1 {
      font-weight: 800;
      font-size: 65px;
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    @media screen and (max-width: 728px) {
      left: 20px;
      h1 {
        font-size: 34px;
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    height: 100%;
    flex-wrap: wrap;
    margin-top: 170px;

    @media screen and (max-width: 728px) {
      width: 100%;
      margin-top: 100px;
    }
  }

  .project {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
