import React from 'react';
import styled from 'styled-components';
import logo from './../logo.svg';

const NavContainer = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin: 20px;
  padding: 10px;
  width: 100%;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin-right: 20px;
  &:hover {
    text-decoration: underline;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

const LogoImage = styled.img`
  height: 20px;
  margin-right: 20px;
`;

const LINKS = [
  {
    label: "About me",
    href: "#about-me"
  },
  {
    label: "Projects",
    href: "#projects"
  },
  {
    label: "Skills",
    href: "#skills"
  },
  {
    label: "Timeline",
    href: "#timeline"
  },
  {
    label: "Contact",
    href: "#contact"
  }
];

const Header = () => (
  <NavContainer >
    <nav>
      <LogoImage src={logo} alt="logo"/>
      {LINKS.map(link => (
        <NavLink
          key={link.href}
          href={link.href}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  </NavContainer>
);

export default Header;