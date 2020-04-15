import React from 'react';
import styled from 'styled-components';

import { LINKS } from '../utils/links';
import logo from '../assets/icons/logo.svg';


const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.1rem;
  border: 2px solid red;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 500px){
    margin: 0.5rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 5rem;
  border: 2px solid blue;
`

// display: flex;
// flex - direction: column;
// margin: 0;
// padding: 2rem 0;
// width: 100 %;
// border: 2px solid red;

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0;
  margin-left: 2rem;
  border: 2px solid green;

  @media only screen and (max-width: 500px){
    display: none;
  }
`;

const Icon = styled.img`
  height: 3rem;
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid purple;
`;

const NavBar = () => (
  <StyledNav>
    <StyledLogo
      href="/"
      rel="noopener noreferrer"
    >
      <Icon src={logo} alt="" />
    </StyledLogo>
    <LinksContainer>
      {LINKS.map(link => (
        <NavLink
          key={link.href}
          href={link.href}
        >
          {link.label}
        </NavLink>
      ))}
    </LinksContainer>
  </StyledNav>
);

export default NavBar;
