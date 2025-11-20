import React, { useState } from "react";
import styled from "styled-components";
import Project from "./Project";
import { useTranslation } from "react-i18next";

const Resume = () => {
  const { t } = useTranslation();
  const [projects] = useState([
    {
      id: 1,
      title: "Custom AI Agent",
      description: "pr_desc_2",
      link: "https://demo.darwinai.ai/gpt",
      src: "./videos/real-gpt-demo.png",
    },
    {
      id: 2,
      title: "STT using OpenAI/Whisper",
      description: "pr_desc_6",
      link: "https://demo.darwinai.ai/stt",
      src: "./videos/real-stt-demo.png",
    },
    {
      id: 3,
      title: "Decentralized Bridge",
      description: "pr_desc_1",
      link: "https://worldland.foundation/bridge",
      src: "./videos/bridge.jpeg",
    },
    {
      id: 4,
      title: "Linear Timelock",
      description: "pr_desc_5",
      link: "https://worldland.foundation/timelock-contracts/sale/0x3951E741dC09E2b77796b0E2f74B9391F1D8D795",
      src: "./videos/timelock.jpeg",
    },
    {
      id: 5,
      title: "Forkify App",
      description: "pr_desc_3",
      link: "https://forkifymine.netlify.app/",
      src: "./videos/forkify.jpeg",
    },
    {
      id: 6,
      title: "NewsFeed App",
      description: "pr_desc_4",
      link: "https://newsfeed.netlify.app/",
      src: "./videos/newsfeed.jpeg",
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
    justify-content: flex-start;
    flex-direction: column;
    position: relative;
    left: auto;
    top: auto;
    text-align: left;
    max-width: 900px;
    width: 100%;
    margin-top: 24px;
    padding-left: 8px;

    .border {
      margin-top: 8px;
      margin-bottom: 12px;
      margin-left: 0;
    }

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
      width: 90%;
      h1 {
        font-size: clamp(1.75rem, 3vw + 0.5rem, 2.5rem);
      }
    }

    @media screen and (max-width: 728px) {
      width: 90%;
      h1 {
        font-size: clamp(1.5rem, 4vw, 2rem);
      }
    }
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 94px;
    width: 90%;
    max-width: 900px;
    height: 100%;
    flex-wrap: wrap;
    margin-top: 24px;

    @media screen and (max-width: 728px) {
      width: 90%;
      gap: 34px;
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
