import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 2rem;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 90rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  z-index: 1;
`;

const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 0.375rem;
  font-weight: 900;
  font-size: 1.125rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  gap: 0.125rem;

  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
    width: 60%;
    padding: 0 0.25rem;
    gap: 0.0625rem;
  }
`;

const NameText = styled.span`
  white-space: nowrap;
  font-size: 1.125rem;
  transition: all 0.3s ease-in-out;

  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

const SlashText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 1.125rem;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  white-space: nowrap;

  @media only screen and (max-width: 767px) {
    font-size: 0.875rem;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  padding: 0 0.375rem;
  list-style: none;

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
  text-align: center;
  width: fit-content;

  @media only screen and (max-width: 767px) {
    padding: 0.25rem 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.125rem;
    bottom: -0.25rem;
    left: 50%;
    background: ${({ theme }) => theme.primary};
    transition: all 0.3s ease;
    transform: translateX(-50%);
  }

  &:hover {
    color: ${({ theme }) => theme.primary};

    &::after {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.primary};

    &::after {
      width: 100%;
    }
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  cursor: pointer;

  .menu-icon {
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;

    span {
      display: block;
      position: absolute;
      height: 0.125rem;
      width: 100%;
      background: ${({ theme }) => theme.text_primary};
      border-radius: 0.625rem;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        top: 0.25rem;
      }

      &:nth-child(2) {
        top: 0.6875rem;
      }

      &:nth-child(3) {
        top: 1.125rem;
      }
    }
  }

  &.open {
    .menu-icon {
      span {
        &:nth-child(1) {
          top: 0.6875rem;
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
          left: -3.75rem;
        }

        &:nth-child(3) {
          top: 0.6875rem;
          transform: rotate(-135deg);
        }
      }
    }
  }

  @media only screen and (max-width: 767px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 2.5rem 1.5rem 2.5rem;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 5rem;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  visibility: hidden;
  border-radius: 0 0 1.25rem 1.25rem;
  box-shadow: 0 0 0.625rem 0 rgba(0, 0, 0, 0.2);
  z-index: 1000;

  &.open {
    transform: scaleY(1);
    opacity: 1;
    visibility: visible;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <ColorText>&lt;</ColorText>
          <NameText>Miguel Enrique</NameText>
          <SlashText>/</SlashText>
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon
          className={isOpen ? "open" : ""}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="menu-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </MobileIcon>

        <NavItems>
          <NavLink href="#Home">Home</NavLink>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
        </NavItems>

        <MobileMenu className={isOpen ? "open" : ""}>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Home">
            Home
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
            About
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
            Skills
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
            Experience
          </NavLink>
          <NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
            Projects
          </NavLink>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
