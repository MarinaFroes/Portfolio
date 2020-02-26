import React from 'react';
import styled from 'styled-components';

import picture from './images/MarinaCosta.jpg'; 
import { LINKS } from './links';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
`;
// const Header = styled.header`
//   display: flex;
//   flex-direction: row-reverse;
//   flex-wrap: wrap;
//   margin: 0;
//   width: 100%;
// `;

const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  margin: 1rem;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
 
`;
// const NavLink = styled.a`
//   color: #000;
//   text-decoration: none;
//   margin-right: 20px;
//   font-size: 1.2rem;
//   &:hover {
//     text-decoration: underline;
//   }
//   &:last-of-type {
//     margin-right: 40;
//   }
// `;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  background-color: #4287f5;
  height: 90vh;
`;
// const AuthorInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   padding: 10px 10px 10px 50px;

//   @media only screen and (max-width: 600px){
//     justify-content: center;
//     align-items: center;
//     text-align: center;
//     padding: 0;
//   }
// `;

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

`;

const Title = styled.h2`
  color: #fff;
  font-size: 1.6rem;
  padding-bottom: 1rem;
  font-weight: normal;
`;

const Greeting = styled.h1`
  color: #fff;
  font-size: 2rem;
  font-weight: normal;
`

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
      <Greeting>Hello, I'm <strong>Marina Costa</strong>.</Greeting>
      <Title>I am a Frontend Developer</Title>
      <Image src={picture} alt="Profile picture" />
      {/* <h1>Marina Costa</h1>
      <Title>Frontend Developer</Title> */}
    </AuthorInfo>
  </Header>
  
);

export default HeaderContainer;