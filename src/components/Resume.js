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
