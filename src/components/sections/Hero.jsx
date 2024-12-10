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

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 120px 30px;
  z-index: 1;
  @media (max-width: 349px) {
    padding: 60px 16px;
  }
  @media (max-width: 475px) {
    padding: 60px 20px;
  }
  @media (max-width: 639px) {
    padding: 50px 16px;
  }
  @media (max-width: 767px) {
    padding: 60px 20px;
  }
  @media (max-width: 899px) {
    padding: 80px 20px;
  }
  @media (max-width: 1023px) {
    padding: 100px 20px;
  }
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  @media (max-width: 639px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 40px;
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 639px) {
    order: 2;
    margin-bottom: 40px;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 100px;
  }
  @media (max-width: 639px) {
    margin-bottom: 40px;
  }
`;

const Title = styled.div`
  font-weight: 900;
  font-size: 48px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 72px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 639px) {
    font-size: 38px;
    line-height: 50px;
  }
  @media (max-width: 475px) {
    font-size: 26px;
    line-height: 44px;
  }
  @media (max-width: 349px) {
    font-size: 22px;
    line-height: 38px;
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
      transform: translateY(-8px) rotate(-3deg);
    }
    50% {
      transform: translateY(0) rotate(0deg);
    }
    75% {
      transform: translateY(8px) rotate(3deg);
    }
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 36px;
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 72px;
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 639px) {
    font-size: 20px;
    line-height: 40px;
  }
  @media (max-width: 349px) {
    font-size: 18px;
    line-height: 38px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
  display: inline-block;
  text-align: center;

  @media (max-width: 899px) {
    display: block;
    width: 100%;
    text-align: center;
    padding: 12px 0;
  }

  @media (max-width: 639px) {
    display: block;
    width: 100%;
    text-align: center;
    padding: 6px 0;
  }

  @media (max-width: 349px) {
    display: block;
    width: 100%;
    text-align: center;
    padding: 4px 0;
  }
`;

const SubTitle = styled.div`
  font-size: 1.2rem;
  letter-spacing: 2pt;
  text-align: justify;
  line-height: 1.5;
  margin-bottom: 2rem;
  width: 100%;
  color: ${({ theme }) => theme.text_primary + 95};
  @media (max-width: 960px) {
    text-align: justify;
  }
  @media (max-width: 639px) {
    font-size: 1rem;
    text-align: justify;
    letter-spacing: 1pt;
  }
  @media (max-width: 349px) {
    text-align: justify;
    font-size: 0.8rem;
    letter-spacing: 0.5pt;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 100%;
  max-width: 200px;
  text-align: center;
  padding: 15px 0;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 1rem;
  font-weight: 900;
  font-size: 22px;
  &:hover {
    transform: scale(1.05);
    transition: all 0.5s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }
  @media (max-width: 639px) {
    padding: 14px 0;
    font-size: 20px;
  }
  @media (max-width: 349px) {
    padding: 12px 0;
    font-size: 18px;
  }
  color: white;
`;

const ImageWrapper = styled.div`
  position: relative;
  left: 0;
  width: 450px;
  height: 450px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  z-index: 1;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  @media (max-width: 960px) {
    max-width: 380px;
    max-height: 380px;
  }

  @media (max-width: 639px) {
    max-width: 250px;
    max-height: 250px;
  }
`;

const Img = styled.img`
  position: relative;
  border-radius: 50%;
  border: 2px solid transparent;
  transition: all 0.5s ease-in-out;
  transform-style: preserve-3d;
  will-change: transform;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 30px rgba(23, 92, 230, 0.2);
    filter: drop-shadow(0 8px 25px rgba(0, 0, 0, 0.4));
  }

  @media (max-width: 960px) {
    max-width: 380px;
    max-height: 380px;
  }

  @media (max-width: 639px) {
    max-width: 250px;
    max-height: 250px;
  }

  @media (max-width: 349px) {
    max-width: 200px;
    max-height: 200px;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  overflow: hidden;
  padding: 0 30px;
  top: 60%;
  left: 49%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: 960px) {
    justify-content: center;
    padding: 0;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: start;
  gap: 16px;
  margin-bottom: 2rem;
  @media (max-width: 639px) {
    gap: 12px;
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
  width: 600px;
  height: 600px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 30s linear infinite;
  z-index: 0;
  pointer-events: none;

  @media screen and (max-width: 1024px) {
    width: 550px;
    height: 550px;
  }

  @media screen and (max-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media screen and (max-width: 480px) {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 349px) {
    width: 300px;
    height: 300px;
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
      filter: drop-shadow(0 0 8px rgba(138, 43, 226, 0.6)) brightness(1);
    }
    50% {
      filter: drop-shadow(0 0 12px rgba(138, 43, 226, 0.8)) brightness(1.2);
    }
    100% {
      filter: drop-shadow(0 0 8px rgba(138, 43, 226, 0.6)) brightness(1);
    }
  }

  img {
    position: absolute;
    width: 45px;
    height: 45px;
    border-radius: 8px;
    padding: 6px;
    transition: all 0.5s ease;
    pointer-events: auto;
    filter: drop-shadow(0 0 5px rgba(138, 43, 226, 0.3)) brightness(0.9);
    animation: cosmic-pulse 3s ease-in-out infinite;
    animation-delay: calc(var(--delay) * 0.4s);

    @media screen and (max-width: 768px) {
      width: 35px;
      height: 35px;
    }

    @media screen and (max-width: 480px) {
      width: 28px;
      height: 28px;
    }

    @media screen and (max-width: 349px) {
      width: 24px;
      height: 24px;
      padding: 4px;
    }

    &:hover {
      transform: scale(1.2) rotate(-10deg);
      filter: drop-shadow(0 0 15px rgba(138, 43, 226, 0.9)) brightness(1.3);
      z-index: 10;
    }
  }

  ${[...Array(8)]
    .map((_, i) => {
      const angle = i * 45 * (Math.PI / 180);
      const radius = 280;
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;

      return `
      img:nth-child(${i + 1}) {
        left: calc(50% + ${x}px);
        top: calc(50% + ${y}px);
        transform: translate(-50%, -50%);
        --delay: ${i};

        @media screen and (max-width: 1024px) {
          left: calc(50% + ${x * 0.85}px);
          top: calc(50% + ${y * 0.85}px);
        }

        @media screen and (max-width: 768px) {
          left: calc(50% + ${x * 0.8}px);
          top: calc(50% + ${y * 0.8}px);
        }

        @media screen and (max-width: 480px) {
          left: calc(50% + ${x * 0.6}px);
          top: calc(50% + ${y * 0.6}px);
        }

        @media screen and (max-width: 349px) {
          left: calc(50% + ${x * 0.45}px);
          top: calc(50% + ${y * 0.45}px);
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
                    <img src="https://skillicons.dev/icons?i=html" alt="HTML" />
                    <img src="https://skillicons.dev/icons?i=css" alt="CSS" />
                    <img
                      src="https://skillicons.dev/icons?i=js"
                      alt="JavaScript"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=bootstrap"
                      alt="Bootstrap"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=tailwind"
                      alt="Tailwind CSS"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=react"
                      alt="React"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=vue"
                      alt="Vue.js"
                    />
                    <img
                      src="https://skillicons.dev/icons?i=ts"
                      alt="TypeScript"
                    />
                  </RotatingIconsBackground>
                  <Img
                    style={{
                      width: "400px",
                      height: "400px",
                      position: "relative",
                      zIndex: 2,
                    }}
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
