import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import BgImg1920 from '../assets/images/laptop_1920.jpg';
import BgImg1600 from '../assets/images/laptop_1600.jpg';
import BgImg1440 from '../assets/images/laptop_1440.jpg';
import BgImg1366 from '../assets/images/laptop_1366.jpg';
import BgImg1024 from '../assets/images/laptop_1024.jpg';
import BgImg768 from '../assets/images/laptop_768.jpg';
import BgImg640 from '../assets/images/laptop_640.jpg';

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 0;
  width: 100%;
  padding-top: 55%;
  position: relative;
`;

const StyledImg = styled.img`
  opacity: 0.7;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  @media only screen and (max-width: 1000px){
    opacity: 0.5;
  }
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  position: absolute;
  top: 10%;
  z-index: 100;
  text-align: center;
  width: 100%;
`

const Heading = styled.h2`
  color: #000;
  font-family: 'GochiHand', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  font-size: 5rem;
  font-weight: normal;
  left: 50%;
`;

const HeaderContainer = () => (
  <Header>
    <NavBar />
    <ImageContainer>
      <StyledImg
        src={BgImg640}
        srcSet={`${BgImg1920} 1920w, ${BgImg1600} 1600w, ${BgImg1440} 1440w, ${BgImg1366} 1366w, ${BgImg1024} 1024w, ${BgImg768} 768w, ${BgImg640} 640w`}
        size="100vw"
        alt=""
      />
      <HeadingContainer>
        <Heading>Marina Costa's Portfolio</Heading>
      </HeadingContainer>
    </ImageContainer>
  </Header>
);

export default HeaderContainer;
