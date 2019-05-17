import React from 'react';
import styled from 'styled-components';
import picture from './MarinaCosta.png'; 

const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  margin: 0;
  width: 100%;
`;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
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
    margin-right: 40;
  }
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px 10px 10px 50px;

  @media only screen and (max-width: 600px){
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
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
    
    <AuthorInfo>
      <Image src={picture} alt="Profile picture" />
      <h1>Marina Fróes A. Costa</h1>
      <Title>Front-End Developer</Title>
    </AuthorInfo>
    
  </Header>
);

export default HeaderContainer;