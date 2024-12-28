import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import miguel_enrique_dasalla from "../../images/miguel_enrique_dasalla.jpg";
import HeroBgAnimation from "../HeroBgAnimation";
import { motion } from "framer-motion";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../../utils/motion";
import StarCanvas from "../canvas/Stars";
import GithubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import html from "../../images/icons/html.png";
import css from "../../images/icons/css.png";
import js from "../../images/icons/js.png";
import bootstrap from "../../images/icons/bootstrap.png";
import tailwind from "../../images/icons/tailwind.png";
import react from "../../images/icons/react.png";
import vue from "../../images/icons/vue.png";
import ts from "../../images/icons/ts.png";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 7.5rem 1rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 85% 97%, 0 100%);
    justify-content: flex-start;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 6.25rem 1.875rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 75% 96%, 0 100%);
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 8.125rem 2.5rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    padding: 9.375rem 3.125rem;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
  }
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 90rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    flex-direction: column;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    flex-direction: row;
    gap: 2rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    order: 2;
    align-items: center;
    text-align: center;
    padding: 0 1rem;
    margin-bottom: 3rem;
    gap: 1rem;
    max-width: 100%;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    order: 2;
    align-items: center;
    padding: 0 1.5rem;
    margin-top: 1rem;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    gap: 1.5rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    max-width: 50%;
    padding-right: 1rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    padding-right: 3rem;
    max-width: 50%;
    justify-content: center;
    align-items: flex-start;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  transition: all 0.3s ease-in-out;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    order: 1;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 0 1rem;
    max-width: 100%;
    min-height: 18.75rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    order: 1;
    justify-content: center;
    margin-bottom: 2rem;
    padding: 0 2rem;
    max-width: 90%;
    margin-left: auto;
    margin-right: auto;
    min-height: 25rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    max-width: 45%;
    padding-left: 1rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    order: 2;
    justify-content: flex-end;
    padding-left: 3rem;
    max-width: 50%;
    min-height: 31.25rem;
    position: relative;
    right: 0;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 3.25rem;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.4;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1.3;
    margin-bottom: 0.625rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 2.625rem;
    text-align: center;
    line-height: 1.2;
    margin-bottom: 0.9375rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 3rem;
    line-height: 1.4;
    margin-bottom: 1.25rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    font-size: 3.25rem;
    line-height: 1.4;
    margin-bottom: 1.5625rem;
  }

  span {
    display: inline-block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      animation: wave 1s ease-in-out;
      background: linear-gradient(
        225deg,
        hsla(271, 100%, 50%, 1) 0%,
        hsla(294, 100%, 50%, 1) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  @keyframes wave {
    0%,
    100% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(-0.5rem) rotate(-3deg);
    }
    50% {
      transform: translateY(0) rotate(0deg);
    }
    75% {
      transform: translateY(0.5rem) rotate(3deg);
    }
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 2.25rem;
  display: flex;
  gap: 1rem;
  color: ${({ theme }) => theme.text_primary};
  line-height: 4.5rem;
  align-items: center;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 1.25rem;
    line-height: 1.5rem;
    gap: 0.75rem;
    justify-content: center;
    text-align: center;
    margin-top: 0.5rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.75rem;
    line-height: 2rem;
    gap: 0.875rem;
    justify-content: center;
    text-align: center;
    margin-top: 0.75rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 2rem;
    line-height: 2.5rem;
    gap: 1rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    font-size: 2.25rem;
    line-height: 3rem;
    gap: 1rem;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 1.25rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.75rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 2rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    font-size: 2.25rem;
  }
`;

const SubTitle = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.125rem;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text_primary + 95};

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 1rem;
    letter-spacing: 0.0625rem;
    margin-bottom: 1.5rem;
    text-align: justify;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    font-size: 1.25rem;
    letter-spacing: 0.09375rem;
    margin-bottom: 1.75rem;
    text-align: justify;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    font-size: 1.375rem;
    letter-spacing: 0.1125rem;
    margin-bottom: 2rem;
    text-align: justify;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    font-size: 1.5rem;
    letter-spacing: 0.12rem;
    margin-bottom: 2.5rem;
    text-align: justify;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 12.5rem;
  text-align: center;
  padding: 0.9375rem 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 1.25rem 1.25rem 3.75rem #1f2634, -1.25rem -1.25rem 3.75rem #1f2634;
  border-radius: 1rem;
  font-weight: 600;
  font-size: 1.375rem;
  color: white;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1.25rem 1.25rem 3.75rem #1f2634;
    filter: brightness(1);
  }

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    max-width: 10rem;
    padding: 0.75rem 0;
    font-size: 1rem;
    border-radius: 0.75rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    max-width: 11rem;
    padding: 0.8125rem 0;
    font-size: 1.125rem;
    border-radius: 0.875rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    max-width: 11.875rem;
    padding: 0.875rem 0;
    font-size: 1.25rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    max-width: 12.5rem;
    padding: 0.9375rem 0;
    font-size: 1.375rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 28.125rem;
  height: 28.125rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  z-index: 1;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-1.25rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    width: 15.625rem;
    height: 15.625rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 23.75rem;
    height: 23.75rem;
    margin-bottom: 1rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 25rem;
    height: 25rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    width: 28.125rem;
    height: 28.125rem;
  }
`;

const Img = styled.img`
  position: relative;
  border-radius: 50%;
  border: 0.125rem solid transparent;
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  will-change: transform;
  filter: drop-shadow(0 0.3125rem 0.9375rem rgba(0, 0, 0, 0.3));
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 1.875rem rgba(23, 92, 230, 0.2);
    filter: drop-shadow(0 0.5rem 1.5625rem rgba(0, 0, 0, 0.4));
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 90rem;
  overflow: hidden;
  padding: 0 1.875rem;
  z-index: -1;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    justify-content: center;
    padding: 0;
    width: 90%;
    height: 90%;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: center;
    padding: 0 1rem;
    width: 95%;
    height: 95%;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 1.5rem;
    width: 98%;
    height: 98%;
    transform: translate(-43%, -35%);
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    padding: 0 1.875rem;
    width: 100%;
    height: 100%;
    transform: translate(-43%, -30%);
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
  margin-bottom: 2rem;

  @media only screen and (max-width: 767px) {
    gap: 0.75rem;
  }
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: scale(1.2);
  }
`;

const RotatingIconsBackground = styled.div`
  position: absolute;
  width: 37.5rem;
  height: 37.5rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 30s linear infinite;
  z-index: 0;
  pointer-events: none;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    width: 21.875rem;
    height: 21.875rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    width: 31.25rem;
    height: 31.25rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    width: 34.375rem;
    height: 34.375rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    width: 37.5rem;
    height: 37.5rem;
  }

  @keyframes rotate {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes cosmic-pulse {
    0% {
      filter: drop-shadow(0 0 0.5rem rgba(138, 43, 226, 0.6)) brightness(1);
    }
    50% {
      filter: drop-shadow(0 0 0.75rem rgba(138, 43, 226, 0.8)) brightness(1.2);
    }
    100% {
      filter: drop-shadow(0 0 0.5rem rgba(138, 43, 226, 0.6)) brightness(1);
    }
  }

  img {
    position: absolute;
    width: 2.8125rem;
    height: 2.8125rem;
    border-radius: 0.5rem;
    padding: 0.375rem;
    transition: all 0.5s ease;
    pointer-events: auto;
    filter: drop-shadow(0 0 0.3125rem rgba(138, 43, 226, 0.3)) brightness(0.9);
    animation: cosmic-pulse 3s ease-in-out infinite;
    animation-delay: calc(var(--delay) * 0.4s);

    /* ========== Mobile Devices (portrait and landscape) ========== */
    @media only screen and (max-width: 767px) {
      width: 1.5625rem;
      height: 1.5625rem;
      padding: 0.1875rem;
    }

    /* ========== Tablet Devices (portrait and landscape) ========== */
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
      width: 2rem;
      height: 2rem;
      padding: 0.3125rem;
    }

    /* ========== Laptop Devices (portrait and landscape) ========== */
    @media only screen and (min-width: 1024px) and (max-width: 1439px) {
      width: 2.5rem;
      height: 2.5rem;
      padding: 0.34375rem;
    }

    /* ========== Desktop Devices (portrait and landscape) ========== */
    @media only screen and (min-width: 1440px) {
      width: 2.8125rem;
      height: 2.8125rem;
      padding: 0.375rem;
    }

    &:hover {
      transform: scale(1.2) rotate(-10deg);
      filter: drop-shadow(0 0 0.9375rem rgba(138, 43, 226, 0.9)) brightness(1.3);
      z-index: 10;
    }
  }

  ${[...Array(8)]
    .map((_, i) => {
      const angle = i * 45 * (Math.PI / 180);
      const baseRadius = 17.5;
      const x = Math.cos(angle) * baseRadius;
      const y = Math.sin(angle) * baseRadius;

      return `
      img:nth-child(${i + 1}) {
        left: calc(50% + ${x}rem);
        top: calc(50% + ${y}rem);
        transform: translate(-50%, -50%);
        --delay: ${i};

        /* ========== Mobile Devices (portrait and landscape) ========== */
        @media only screen and (max-width: 767px) {
          left: calc(50% + ${x * 0.55}rem);
          top: calc(50% + ${y * 0.55}rem);
        }

        /* ========== Tablet Devices (portrait and landscape) ========== */
        @media only screen and (min-width: 768px) and (max-width: 1023px) {
          left: calc(50% + ${x * 0.9}rem);
          top: calc(50% + ${y * 0.9}rem);
        }

        /* ========== Laptop Devices (portrait and landscape) ========== */
        @media only screen and (min-width: 1024px) and (max-width: 1439px) {
          left: calc(50% + ${x * 0.85}rem);
          top: calc(50% + ${y * 0.85}rem);
        }

        /* ========== Desktop Devices (portrait and landscape) ========== */
        @media only screen and (min-width: 1440px) {
          left: calc(50% + ${x}rem);
          top: calc(50% + ${y}rem);
        }
      }
    `;
    })
    .join("")}
`;

const Hero = () => {
  const helloText = "Hello, I'm";
  const nameText = `${Bio.name}`;

  const splitText = (text) => {
    return text
      .split("")
      .map((char, index) => (
        <span key={index}>{char === " " ? "\u00A0" : char}</span>
      ));
  };

  return (
    <div id="Home">
      <HeroContainer>
        <HeroBg>
          <StarCanvas />
          <HeroBgAnimation />
        </HeroBg>
        <motion.div {...headContainerAnimation}>
          <HeroInnerContainer>
            <HeroLeftContainer>
              <motion.div {...headTextAnimation}>
                <Title>
                  <div>{splitText(helloText)}</div>
                  <div>{splitText(nameText)}</div>
                </Title>
                <TextLoop>
                  I'm a
                  <Span>
                    <Typewriter
                      options={{
                        strings: Bio.roles,
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Span>
                </TextLoop>
              </motion.div>

              <motion.div {...headContentAnimation}>
                <SubTitle>{Bio.description}</SubTitle>
              </motion.div>

              <SocialMediaIcons>
                <SocialMediaIcon href={Bio.github} target="display">
                  <GithubIcon style={{ fontSize: 36 }} />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.facebook} target="display">
                  <FacebookIcon style={{ fontSize: 36 }} />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.instagram} target="display">
                  <InstagramIcon style={{ fontSize: 36 }} />
                </SocialMediaIcon>
                <SocialMediaIcon href={Bio.linkedin} target="display">
                  <LinkedInIcon style={{ fontSize: 36 }} />
                </SocialMediaIcon>
              </SocialMediaIcons>
              <ResumeButton href={Bio.resume} target="_blank">
                Résumé
              </ResumeButton>
            </HeroLeftContainer>
            <HeroRightContainer>
              <motion.div {...headContentAnimation}>
                <ImageWrapper>
                  <RotatingIconsBackground>
                    <img src={html} alt="HTML" />
                    <img src={css} alt="CSS" />
                    <img src={js} alt="JavaScript" />
                    <img src={bootstrap} alt="Bootstrap" />
                    <img src={tailwind} alt="Tailwind CSS" />
                    <img src={react} alt="React JS" />
                    <img src={vue} alt="Vue JS" />
                    <img src={ts} alt="TypeScript" />
                  </RotatingIconsBackground>
                  <Img
                    src={miguel_enrique_dasalla}
                    alt="Miguel Enrique Dasalla"
                  />
                </ImageWrapper>
              </motion.div>
            </HeroRightContainer>
          </HeroInnerContainer>
        </motion.div>
      </HeroContainer>
    </div>
  );
};

export default Hero;
