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
  max-width: 1100px;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.5em;
  font-weight: 900;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
`;

const Description = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-align: justify;
  width: 100%;
  letter-spacing: 1pt;
  margin-bottom: 50px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    text-align: justify;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 20px;
  max-width: 1200px;
  width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

const Card = styled.div`
  flex: 1;
  background: rgba(17, 25, 40, 0.83);
  border-radius: 20px;
  padding: 30px 20px;
  border: 0.1px solid rgb(133, 76, 230);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  backdrop-filter: blur(12px);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  max-width: 380px;

  @media (min-width: 1024px) {
    min-width: unset;
  }
`;

const CardIcon = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const CardTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 15px;
  text-align: center;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  letter-spacing: 1pt;
  color: ${({ theme }) => theme.text_secondary};
  text-align: center;
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
                  width: "100px",
                  height: "100px",
                  position: "relative",
                }}
                src={frontend}
                alt="Frontend Development"
              />
            </CardIcon>
            <CardTitle>Frontend Development</CardTitle>
            <CardDescription>
              Frontend web development adopting new frameworks to satisfy
              changing needs and keep up with trends. Ensuring browser
              compatibility, visually appealing and user-friendly interfaces.
            </CardDescription>
          </Card>
          <Card>
            <CardIcon>
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  position: "relative",
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
                  width: "100px",
                  height: "100px",
                  position: "relative",
                }}
                src={backend}
                alt="Backend Development"
              />
            </CardIcon>
            <CardTitle>Backend Development</CardTitle>
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
