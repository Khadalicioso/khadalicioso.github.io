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
  max-width: 90rem;
  padding: 5rem 0;
  gap: 0.75rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 3rem 1rem;
    gap: 0.625rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 4rem 1.5rem;
    gap: 0.75rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 4.5rem 2rem;
  }
`;

const Title = styled.div`
  font-size: 3.5rem;
  text-align: center;
  font-weight: 900;
  margin-top: 1.25rem;
  color: ${({ theme }) => theme.text_primary};

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 2rem;
    margin-top: 1rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.5rem;
    margin-top: 1.125rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 3rem;
  }
`;

const Desc = styled.div`
  font-size: 1rem;
  text-align: center;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 2.5rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
    margin-bottom: 1.875rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 2rem;
  }
`;

const EarthCanvasContainer = styled.div`
  width: 100%;
  height: 18.75rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    height: 13.75rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    height: 15rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    height: 16.25rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    height: 18.75rem;
  }
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience.</Title>
        <Desc>WHAT I HAVE DONE SO FAR</Desc>
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
