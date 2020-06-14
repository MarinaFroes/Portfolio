import React from 'react';
import styled from 'styled-components';

import { LINKS } from '../utils/links';
import logo from '../assets/icons/logo.svg';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 5rem;
`

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0;
  margin-left: 2rem;

  @media only screen and (max-width: 270px){
    display: none;
  }
`;

const Logo = styled.img`
  height: 3rem;
  margin: 0;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.5rem;

  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 300px){
    margin: 0.5rem;
  }
`;

const NavBar = () => (
  <StyledNav>
    <StyledLogo href="/#" rel="noopener noreferrer">
      <Logo src={logo} alt="" />
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
