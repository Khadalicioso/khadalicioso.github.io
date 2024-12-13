import React from "react";
import styled from "styled-components";
import frontend from "../../images/icons/frontend.png";
import responsive from "../../images/icons/responsive.png";
import backend from "../../images/icons/backend.png";

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

const AboutContent = styled.div`
  width: 100%;
  margin-top: 5%;
  max-width: 1200px;
  padding: 5rem 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    padding: 4rem 1rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 4rem 1.5rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) and (max-width: 1439px) {
    padding: 4.5rem 2rem;
  }
`;

const Title = styled.h1`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.text_primary};

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 2rem;
    margin-bottom: 1rem;
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

const Description = styled.p`
  font-size: 1.063rem;
  font-weight: normal;
  text-align: justify;
  width: 100%;
  letter-spacing: 0.0625rem;
  margin-bottom: 3.125rem;
  color: ${({ theme }) => theme.text_secondary};

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    text-align: justify;
    margin-bottom: 2rem;
    font-size: 0.9375rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 2.5rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 1.875rem;
  margin-top: 1.25rem;
  max-width: 75rem;
  width: 100%;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    gap: 1.25rem;
    margin-top: 1rem;
  }
`;

const Card = styled.div`
  flex: 1;
  background: rgba(17, 25, 40, 0.83);
  border-radius: 1.25rem;
  padding: 1.875rem 1.25rem;
  border: 0.00625rem solid rgb(133, 76, 230);
  box-shadow: rgba(23, 92, 230, 0.15) 0 0.25rem 1.5rem;
  backdrop-filter: blur(0.75rem);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 20rem;
  max-width: 23.75rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    min-width: 100%;
    padding: 1.5rem 1rem;
  }

  /* ========== Tablet Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    min-width: 21.875rem;
  }

  /* ========== Laptop Devices (portrait and landscape) ========== */
  @media only screen and (min-width: 1024px) {
    min-width: unset;
  }
`;

const CardIcon = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    width: 5rem;
    height: 5rem;
    margin-bottom: 1rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 0.9375rem;
  text-align: center;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  letter-spacing: 0.0625rem;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;

  /* ========== Mobile Devices (portrait and landscape) ========== */
  @media only screen and (max-width: 767px) {
    font-size: 0.8125rem;
  }
`;

const About = () => {
  return (
    <AboutContainer id="About">
      <AboutContent>
        <Title>About Me.</Title>
        <Description>
          Passionate and forward-thinking web developer dedicated to staying at
          the forefront of technology trends. Committed to continuous learning,
          eagerly explore new frameworks, libraries, and tools to enhance my
          skill set and deliver innovative solutions.
        </Description>
        <CardContainer>
          <Card>
            <CardIcon>
              <img
                style={{
                  width: "6.25rem",
                  height: "6.25rem",
                  position: "relative",
                  "@media only screen and (max-width: 767px)": {
                    width: "5rem",
                    height: "5rem",
                  },
                }}
                src={frontend}
                alt="Front-End Development"
              />
            </CardIcon>
            <CardTitle>Front-End Development</CardTitle>
            <CardDescription>
              Front-End web development adopting new frameworks to satisfy
              changing needs and keep up with trends. Ensuring browser
              compatibility, visually appealing and user-friendly interfaces.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>
              <img
                style={{
                  width: "6.25rem",
                  height: "6.25rem",
                  position: "relative",
                  "@media only screen and (max-width: 767px)": {
                    width: "5rem",
                    height: "5rem",
                  },
                }}
                src={responsive}
                alt="Responsive Design"
              />
            </CardIcon>
            <CardTitle>Responsive Design</CardTitle>
            <CardDescription>
              Implementing responsive design principles, ensuring that websites
              and web applications adapt seamlessly to different devices and
              screen sizes for an optimal user experience.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>
              <img
                style={{
                  width: "6.25rem",
                  height: "6.25rem",
                  position: "relative",
                  "@media only screen and (max-width: 767px)": {
                    width: "5rem",
                    height: "5rem",
                  },
                }}
                src={backend}
                alt="Back-End Development"
              />
            </CardIcon>
            <CardTitle>Back-End Development</CardTitle>
            <CardDescription>
              Leveraging modern approaches to build scalable and secure backends
              that seamlessly communicate with frontend interfaces, meeting the
              evolving needs of modern web applications.
            </CardDescription>
          </Card>
        </CardContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
