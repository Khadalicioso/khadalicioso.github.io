import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
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
  font-size: 32px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
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
  padding: 0 6px;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
  gap: 2px;

  @media screen and (max-width: 320px) {
    font-size: 8px;
    width: 50%;
    gap: 1px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    width: 75%;
    padding: 0 4px;
    gap: 1px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 80%;
    padding: 0 5px;
    gap: 2px;
  }
`;

const NameText = styled.span`
  white-space: nowrap;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 320px) {
    font-size: 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const SlashText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  white-space: nowrap;

  @media screen and (max-width: 320px) {
    font-size: 8px;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
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

  @media screen and (max-width: 768px) {
    padding: 4px 0;
  }

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
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
    width: 24px;
    height: 24px;
    position: relative;
    transform: rotate(0deg);
    transition: 0.5s ease-in-out;

    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: ${({ theme }) => theme.text_primary};
      border-radius: 10px;
      opacity: 1;
      left: 0;
      transform: rotate(0deg);
      transition: all 0.3s ease-in-out;

      &:nth-child(1) {
        top: 4px;
      }

      &:nth-child(2) {
        top: 11px;
      }

      &:nth-child(3) {
        top: 18px;
      }
    }
  }

  &.open {
    .menu-icon {
      span {
        &:nth-child(1) {
          top: 11px;
          transform: rotate(135deg);
        }

        &:nth-child(2) {
          opacity: 0;
          left: -60px;
        }

        &:nth-child(3) {
          top: 11px;
          transform: rotate(-135deg);
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.3s ease-in-out;
  transform-origin: top;
  transform: scaleY(0);
  opacity: 0;
  visibility: hidden;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
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
          <NameText>Miguel</NameText>
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
