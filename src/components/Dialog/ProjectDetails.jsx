import { CloseRounded, GitHub, Launch } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 1rem;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
`;

const Date = styled.div`
  font-size: 0.875rem;
  margin: 2px 6px;
  font-weight: normal;
  color: ${({ theme }) => theme.text_secondary};
`;

const Desc = styled.div`
  font-size: 0.875rem;
  font-weight: normal;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 600px;
  max-height: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 0.875rem;
  margin: 30px auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  display: block;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
`;

const Tag = styled.div`
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary + 20};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  ${({ disabled, theme }) =>
    disabled &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        pointer-events: none;
        opacity: 0.8;
        &:hover {
            background-color: ${theme.bgLight};
            cursor: not-allowed;
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project?.image} />
          <Title>{project?.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </Tags>
          <Desc>{project?.description}</Desc>
          <ButtonGroup>
            <Button
              dull
              href={project?.source || "#"}
              target="new"
              disabled={!project?.source}
              onClick={(e) => !project?.source && e.preventDefault()}
            >
              <GitHub />
              {project?.source ? "Source" : "Private"}
            </Button>
            {project?.demo && (
              <Button href={project.demo} target="new">
                <Launch />
                Visit
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default index;
