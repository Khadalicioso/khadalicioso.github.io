import React, { useState } from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ProjectCard from "../cards/ProjectCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

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
  max-width: 1200px;
  padding: 80px 20px;
  gap: 12px;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 4rem 1rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 4rem 1.5rem;
  }
`;

const Title = styled.div`
  font-size: 3.5em;
  text-align: center;
  font-weight: 900;
  margin-top: 20px;
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
`;

const Desc = styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
  width: 100%;
  letter-spacing: 0.0625rem;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text_secondary};
`;

const StatusLegend = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  flex-wrap: wrap;
`;

const StatusItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
`;

const StatusDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  margin-top: 1.875rem;
  padding: 0 1.5625rem;

  .slick-list {
    margin: 0 -0.625rem;
    overflow: hidden;
  }

  .slick-track {
    display: flex !important;
    justify-content: center;
    touch-action: pan-y pinch-zoom;
  }

  .slick-slide {
    opacity: 0.5;
    transition: all 0.5s ease;
    transform: scale(0.85);
    filter: blur(0.125rem);
    pointer-events: none;

    &.slick-active {
      opacity: 0.5;
      transform: scale(0.85);
      filter: blur(0.125rem);
      pointer-events: none;

      @media only screen and (max-width: 62.5rem) {
        opacity: 1;
        transform: scale(1);
        filter: blur(0);
        pointer-events: auto;
      }
    }

    &.slick-current {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
      pointer-events: auto;
    }
  }

  .slick-slide > div {
    padding: 0 0.625rem;

    @media only screen and (max-width: 62.5rem) {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      width: 100%;
      max-width: 31.25rem;
    }
  }

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 0 0.625rem;
    margin-top: 1.25rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 0 1rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 0 1.25rem;
  }

  /* ========== Desktop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1440px) {
    padding: 0 1.5625rem;
  }
`;

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1100px;
  margin-top: 32px;
`;

const Arrow = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ theme }) => theme.text_primary};
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const Projects = ({ openModal, setOpenModal }) => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    arrows: false,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0",
          speed: 200,
          cssEase: "linear",
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
          speed: 200,
          cssEase: "linear",
          infinite: true,
        },
      },
    ],
  };

  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects.</Title>
        <Desc>
          My portfolio highlights my skills and experience through concrete
          examples of my work. Each project, linked to its code repository and
          live demo, showcases my ability to tackle complex challenges, leverage
          diverse technologies, and manage projects efficiently.
        </Desc>
        <StatusLegend>
          <StatusItem>
            <StatusDot color="#854CE6" />
            <span>Completed</span>
          </StatusItem>
          <StatusItem>
            <StatusDot color="#45c512" />
            <span>In Progress</span>
          </StatusItem>
          <StatusItem>
            <StatusDot color="#fc4444" />
            <span>Discontinued / On-Hold</span>
          </StatusItem>
        </StatusLegend>
        <CarouselContainer>
          <Slider ref={setSliderRef} {...settings}>
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
                onClick={() => handleProjectClick(project.demo)}
              />
            ))}
          </Slider>
          <ArrowContainer>
            <Arrow onClick={() => sliderRef?.slickPrev()}>
              <ChevronLeft />
            </Arrow>
            <Arrow onClick={() => sliderRef?.slickNext()}>
              <ChevronRight />
            </Arrow>
          </ArrowContainer>
        </CarouselContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
