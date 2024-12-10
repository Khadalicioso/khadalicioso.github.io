import React from "react";
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "../cards/ExperienceCard";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const Wrapper = styled.div`
  margin-top: 5%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 3.5em;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const Desc = styled.div`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
`;

const EarthCanvasContainer = styled.div`
  width: 100%;
  height: 300px;

  @media (max-width: 1200px) {
    height: 280px;
  }

  @media (max-width: 960px) {
    height: 260px;
  }

  @media (max-width: 768px) {
    height: 240px;
  }

  @media (max-width: 480px) {
    height: 220px;
  }

  @media (max-width: 320px) {
    height: 200px;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience.</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          WHAT I HAVE DONE SO FAR
        </Desc>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
        <EarthCanvasContainer>
          <EarthCanvas />
        </EarthCanvasContainer>
      </Wrapper>
    </Container>
  );
};

export default Experience;
