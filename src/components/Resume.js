import React, { useState } from "react";
import styled from "styled-components";
import Project from "./Project";
import Background from "../assets/background.jpeg";
import { Fade } from "react-reveal";

const Resume = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "SkynetCloud",
      description: "this website is a simple cloud for storing your notes",
      link: "https://skynetcloud.netlify.app/",
      src: "./videos/skynet.png",
    },
    {
      id: 2,
      title: "Notes App",
      description: "simple CRUD web app for writing and storing notes",
      link: "https://notesappmine.netlify.app/",
      src: "./videos/notesApp.png",
    },
    {
      id: 3,
      title: "Quiz App",
      description: "simple quiz app",
      link: "https://quizappmine.netlify.app/",
      src: "./videos/quizApp.png",
    },
    {
      id: 4,
      title: "Countdown Timer",
      description:
        "a web app that counts days, hours, minutes and seconds left till certain date",
      link: "https://countdowntillwinter.netlify.app/",
      src: "./videos/countdown.png",
    },
    {
      id: 5,
      title: "Forkify App",
      description:
        "Food search and recipe finder website that uses real-time API to fetch data from",
      link: "https://forkifymine.netlify.app/",
      src: "./videos/forkify.mp4",
      video: true,
    },
    {
      id: 6,
      title: "NewsFeed App",
      description:
        "News website that feeds the latest news from a real-time API",
      link: "https://newsfeed.netlify.app/",
      src: "./videos/newsfeed.mp4",
      video: true,
    },
    {
      id: 7,
      title: "Instagram-web-app Clone",
      description: "I tried to clone instagram web app",
      link: "https://instagram-clone-683d4.web.app/",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png",
    },
  ]);

  console.log(projects);

  return (
    <Container id="resume">
      <Fade>
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
      </Fade>
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

// <Project
// title={projects[0].skynet.title}
// description={projects[0].skynet.description}
// link={projects[0].skynet.link}
// src={0}
// />
// <Project
// title={projects[1].notesApp.title}
// description={projects[1].notesApp.description}
// link={projects[1].notesApp.link}
// src={1}
// />
// <Project
// title={projects[2].quizApp.title}
// description={projects[2].quizApp.description}
// link={projects[2].quizApp.link}
// src={2}
// />
// <Project
// title={projects[3].countDown.title}
// description={projects[3].countDown.description}
// link={projects[3].countDown.link}
// src={3}
// />
// <Project
// title={projects[4].forkifymine.title}
// description={projects[4].forkifymine.description}
// link={projects[4].forkifymine.link}
// src={4}
// />
// <Project
// title={projects[5].newsfeed.title}
// description={projects[5].newsfeed.description}
// link={projects[5].newsfeed.link}
// src={5}
// />
