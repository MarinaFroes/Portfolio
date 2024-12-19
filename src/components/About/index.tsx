import React from 'react'

import Section from '../Section'
import MyPic from '../../assets/images/MarinaCosta.jpeg'
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
  <Section heading="About me">
    <AboutMeContainer>
      <UserDiv>
        <Image src={MyPic} alt="author picture" />
      </UserDiv>
      <AboutMeText>
        <Info>
          <Heading>Hello, I'm Marina!</Heading>
          <Paragraph>
            I am a <strong>Web Developer</strong> with 4 years of experience currently working for{" "}
            <strong>SoundCloud</strong> and living in{" "}
            <strong> Berlin, Germany</strong>.
          </Paragraph>
          <Paragraph>
            As a self-taught frontend developer, I built projects like the ones listed below. Though basic compared to my current experience, they were crucial for learning fundamentals like
            responsive design and API integration.
          </Paragraph>
        </Info>
        <Skills>
          <Heading>Main skills</Heading>
          <SkillsContainer />
        </Skills>
      </AboutMeText>
    </AboutMeContainer>
  </Section>
);

export default About
