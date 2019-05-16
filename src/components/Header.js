import React from 'react';
import styled from 'styled-components';

const NavContainer = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  margin: 20px;
  padding: 10px;
  width: 100%;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin-right: 40px;
  &:hover {
    text-decoration: underline;
  }
  &:last-of-type {
    margin-right: 0;
  }
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