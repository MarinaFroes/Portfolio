import React from 'react';
import styled from 'styled-components';
import picture from './MarinaCosta.png';
import Img from 'react-image'; 

const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;

const Title = styled.h2`
  color: silver;
`;

const LINKS = [
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

const HeaderContainer = () => (
  <Header>
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
    <Img src={picture} style={{ height: "200px", padding: "10px 50px" }} />
    <AuthorInfo>
      <h1>Marina Fróes A. Costa</h1>
      <Title>Front-End Developer</Title>
    </AuthorInfo>
    
  </Header>
);

export default HeaderContainer;