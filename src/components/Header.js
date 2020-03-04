import React from 'react';
import styled from 'styled-components';

import picture from './images/MarinaCosta.jpg'; 
import { LINKS } from './links';
import logo from './images/logo.svg'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 10vh;

  @media only screen and (max-height: 500px){
    height: 3rem;
  }

  @media only screen and (min-height: 1000px){
    height: 4rem;
  }

`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 1rem;
  font-size: 1.1rem;
  &:hover {
    text-decoration: underline;
  }

  @media only screen and (max-width: 500px){
    margin: 0.5rem;
    font-size: 1rem;
  }

  @media only screen and (max-width: 400px){
    font-size: 0.9rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #347B98;
  height: 90vh;

  @media only screen and (min-height: 1000px){
    height: 40rem;
  }
`;

const Image = styled.img`
  width: 20vw;
  height: auto;
  border-radius: 50%;
  box-shadow: 4px 3px 14px 0 #455369;

  @media only screen and (max-width: 900px){
    width: 30vw;
  }

  @media only screen and (max-width: 700px){
    width: 30vw;
  }

  @media only screen and (max-width: 600px){
    width: 50vw;
  }

  @media only screen and (max-height: 500px){
    display: none;
  }
`;

const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`

const Title = styled.h2`
  color: #fff;
  font-size: 1.6rem;
  font-weight: normal;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 500px){
    font-size: 1.2rem;
  }
`;

const Greeting = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: normal;
  padding: 0;
  margin: 0;

  @media only screen and (max-width: 500px){
    font-size: 1.5rem;
  }
`

const StyledLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 0;

  @media only screen and (max-width: 500px){
    display: none;
  }
`

const Icon = styled.img`
  height: 5vh;
  margin: 0;

  @media only screen and (min-height: 1000px){
    height: 2.5rem;
  }
`

const HeaderContainer = () => (
  <Header>
    <NavContainer >
      <StyledLogo
        href="/"
        rel="noopener noreferrer"
      >
        <Icon src={logo} alt="" />
      </StyledLogo>
      <StyledNav>
        {LINKS.map(link => (
          <NavLink
            key={link.href}
            href={link.href}
          >
            {link.label}
          </NavLink>
        ))}
      </StyledNav>
      
    </NavContainer>
    <AuthorInfo>
      <AuthorText>
        <Greeting>Hello, I'm <strong>Marina Costa</strong>.</Greeting>
        <Title>I am a Frontend Developer</Title>
      </AuthorText>
      <Image src={picture} alt="Profile picture" />
    </AuthorInfo>
  </Header>
);

export default HeaderContainer;