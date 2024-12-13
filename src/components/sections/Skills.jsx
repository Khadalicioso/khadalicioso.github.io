import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { skills } from "../../data/constants";

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
  padding: 5rem 1.25rem;
  gap: 0.75rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 4rem 1rem;
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
  color: ${({ theme }) => theme.text_primary};

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 2rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.5rem;
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

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.875rem;
  padding: 2.5rem;
  background: rgba(17, 17, 40, 0.7);
  border: 0.125rem solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0 0.25rem 1.5rem;
  border-radius: 1rem;
  margin-top: 1.875rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0.9375rem;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 1.875rem;
    gap: 1.25rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5625rem;
  }
`;

const SkillItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.card};
  border: 0.0625rem solid ${({ theme }) => theme.primary};
  box-shadow: rgba(23, 92, 230, 0.15) 0 0.25rem 1.5rem;
  border-radius: 0.75rem;
  padding: 0.9375rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    transform: translateY(-0.3125rem);
    box-shadow: 0 0 1.5625rem rgba(23, 92, 230, 0.3);
  }

  img {
    width: 2.8125rem;
    height: 2.8125rem;
    margin-bottom: 0.5rem;
    transition: all 0.4s ease-in-out;

    /* ========== Mobile Devices (portrait and landscape) ========== */
    @media only screen and (max-width: 767px) {
      width: 2.1875rem;
      height: 2.1875rem;
    }
  }

  span {
    font-size: 1rem;
    font-weight: bold;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;

    /* ========== Mobile Devices (portrait and landscape) ========== */
    @media only screen and (max-width: 767px) {
      font-size: 0.875rem;
    }
  }
`;

const Skills = () => {
  const technologies = skills[0].skills;

  return (
    <Container id="Skills">
      <Wrapper>
        <Title>Skills.</Title>
        <Desc>TECHNOLOGIES</Desc>
        <SkillsContainer>
          {technologies.map((tech, index) => (
            <SkillItem
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <img src={tech.image} alt={tech.name} />
              <span>{tech.name}</span>
            </SkillItem>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
