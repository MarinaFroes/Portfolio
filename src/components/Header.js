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
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  height: 100%;
`;

const StyledImg = styled.img`
  opacity: 0.7;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  position: absolute;
  top: 10%;
  z-index: 100;

  @media only screen and (max-width: 1000px){
    background: rgba(255, 255, 255, 0.7);
  }
`

const Heading = styled.h2`
  color: #000;
  font-family: Gochi Hand, Times New Roman;
  font-size: 5rem;
  font-weight: normal;
  padding: 1rem 3rem;
  margin: auto;
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

/**
 * <FullsizePicture
        src={BgImg1024}
      >
        <AuthorText>
          <Greeting>Hello, I'm <strong>Marina Costa</strong>.</Greeting>
          <Title>I am a Frontend Developer</Title>
        </AuthorText>
      </FullsizePicture>


      <img
        src={BgImg640}
        srcSet={`${BgImg1920} 1920w, ${BgImg1600} 1600w, ${BgImg1440} 1440,w ${BgImg1366} 1366w, ${BgImg1024} 1024w, ${BgImg768} 768w, ${BgImg640} 640w`}
        alt=""
      />
 */
/**
 * sources={[
          {
            srcSet: `${BgImg1920} 1920w, ${BgImg1600} 1600w, ${BgImg1440} 1440,w ${BgImg1366} 1366w, ${BgImg1024} 1024w, ${BgImg768} 768w, ${BgImg640} 640w`
          }
        ]}
 */

 /**
  * srcSet={`${BgImg1920} 1920w, ${BgImg1600} 1600w, ${BgImg1440} 1440,w ${BgImg1366} 1366w, ${BgImg1024} 1024w, ${BgImg768} 768w, ${BgImg640} 640w`}
  */

  /**
   * <img
        src={BgImg640}
        srcSet = {`${BgImg1920} 1920w, ${BgImg1600} 1600w, ${BgImg1440} 1440,w ${BgImg1366} 1366w, ${BgImg1024} 1024w, ${BgImg768} 768w, ${BgImg640} 640w`}
        sizes="100vw"
        alt=""
      />

      <AuthorText>
          <Greeting>Hello, I'm <strong>Marina Costa</strong>.</Greeting>
          <Title>I am a Frontend Developer</Title>
        </AuthorText>

        srcSet={`${BgImg1920} 1920w, ${BgImg1600} 1600w, ${BgImg1440} 1440,w ${BgImg1366} 1366w, ${BgImg1024} 1024w, ${BgImg768} 768w, ${BgImg640} 640w`}
        sizes="100vw"
        cover="height"
        center={true}
   */