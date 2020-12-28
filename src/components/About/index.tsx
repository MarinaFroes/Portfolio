import React from 'react'

import Section from '../Section'
import MyPic from '../../assets/images/MarinaCosta.jpg'
import SkillsContainer from '../SkillsContainer'
import {
  AboutMeContainer,
  UserDiv,
  AboutMeText,
  Heading,
  Skills,
  Info,
  Paragraph,
  Image,
} from './styles'

const About = () => (
  <Section heading='About me'>
    <AboutMeContainer>
      <UserDiv>
        <Image src={MyPic} alt='author picture' />
      </UserDiv>
      <AboutMeText>
        <Info>
          <Heading>Hello, I'm Marina!</Heading>
          <Paragraph>
            I am a <strong>Fullstack Developer</strong> with a focus on{' '}
            <strong>Frontend</strong> and background in Architecture currently
            living in <strong> Berlin, Germany</strong>.
          </Paragraph>
          <Paragraph>You can check a few of my projects bellow.</Paragraph>
        </Info>
        <Skills>
          <Heading>Main skills</Heading>
          <SkillsContainer />
        </Skills>
      </AboutMeText>
    </AboutMeContainer>
  </Section>
)

export default About
