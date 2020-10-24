import React from 'react'

import NavBar from '../NavBar'
import BgImg1920 from '../../assets/images/laptop_1920.jpg'
import BgImg1600 from '../../assets/images/laptop_1600.jpg'
import BgImg1440 from '../../assets/images/laptop_1440.jpg'
import BgImg1366 from '../../assets/images/laptop_1366.jpg'
import BgImg1024 from '../../assets/images/laptop_1024.jpg'
import BgImg768 from '../../assets/images/laptop_768.jpg'
import BgImg640 from '../../assets/images/laptop_640.jpg'
import {
  Header,
  ImageContainer,
  StyledImg,
  HeadingContainer,
  Heading,
} from './styles'

const HeaderContainer = () => (
  <Header>
    <NavBar />
    <ImageContainer>
      <StyledImg
        src={BgImg640}
        srcSet={`${BgImg1920} 1920w, ${BgImg1600} 1600w, ${BgImg1440} 1440w, ${BgImg1366} 1366w, ${BgImg1024} 1024w, ${BgImg768} 768w, ${BgImg640} 640w`}
        size='100vw'
        alt=''
      />
      <HeadingContainer>
        <Heading>Marina Costa's Portfolio</Heading>
      </HeadingContainer>
    </ImageContainer>
  </Header>
)

export default HeaderContainer
