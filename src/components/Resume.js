import React, { useState } from "react";
import styled from "styled-components";
import Project from "./Project";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const [projects] = useState([
    {
      id: 1,
      title: "Decentralized Bridge",
      description: "pr_desc_1",
      link: "https://worldland.foundation/bridge",
      src: "./videos/bridge.jpeg",
      gh: "https://docs.google.com/document/d/1_tDKk5OF8JIsOx_y99o3Gy7s-lcz-NtYkjjYl81hxXs/edit?usp=sharing",
    },
    {
      id: 3,
      title: "Linear Timelock",
      description: "pr_desc_5",
      link: "https://worldland.foundation/timelock-contracts/sale/0x3951E741dC09E2b77796b0E2f74B9391F1D8D795",
      src: "./videos/timelock.jpeg",
      gh: "https://github.com/Saddam-tech/LinearTimelock.git",
    },
    {
      id: 2,
      title: "Korowd.com",
      description: "pr_desc_2",
      link: "https://korowd.com/",
      src: "./videos/korowd.png",
      gh: "https://github.com/teamcredit/korowd-front.git",
    },
    {
      id: 7,
      title: "Forkify App",
      description: "pr_desc_3",
      link: "https://forkifymine.netlify.app/",
      src: "./videos/forkify.jpeg",
      gh: "https://github.com/Saddam-tech/forkifymine.git",
    },
    {
      id: 8,
      title: "NewsFeed App",
      description: "pr_desc_4",
      link: "https://newsfeed.netlify.app/",
      src: "./videos/newsfeed.jpeg",
      gh: "https://github.com/Saddam-tech/newsFeed.com.git",
    },
    {
      id: 9,
      title: "Summit Charter Services",
      description: "pr_desc_6",
      link: "https://summitchs.com/",
      src: "./videos/schs.jpeg",
      gh: "#",
    },
    {
      id: 11,
      title: "Fitness device advertisement website",
      description: "pr_desc_11",
      link: "https://kosmos-fitness.com/",
      src: "./videos/kosmos.png",
      gh: "https://github.com/Saddam-tech/Kosmos.com",
      video: false,
    },
  ]);

  return (
    <Container id="resume">
      <div className="header">
        <span className="border"></span>
        <h1>{t("projects")}</h1>
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
      font-size: clamp(2rem, 4vw + 1rem, 3.5rem);
      background: linear-gradient(
        121.57deg,
        #ffffff 18.77%,
        rgba(255, 255, 255, 0.66) 60.15%
      );
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 1.3;
    }

    @media screen and (max-width: 1024px) {
      left: clamp(20px, 5vw, 100px);
      h1 {
        font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      }
    }

    @media screen and (max-width: 728px) {
      left: 20px;
      h1 {
        font-size: clamp(1.5rem, 4vw, 2rem);
      }
    }
  }

  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: clamp(90%, 85vw, 95%);
    max-width: 1400px;
    height: 100%;
    flex-wrap: wrap;
    margin-top: clamp(120px, 15vh, 170px);
    gap: 20px;

    @media screen and (max-width: 1024px) {
      width: 95%;
      margin-top: clamp(100px, 12vh, 150px);
    }

    @media screen and (max-width: 728px) {
      width: 100%;
      margin-top: clamp(80px, 10vh, 100px);
      gap: 15px;
    }
  }

  .project {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;
