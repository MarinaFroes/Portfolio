import React from 'react'

import Section from '../Section'
import MyPic from '../../assets/images/MarinaCosta.jpg'
import SkillsContainer from '../SkillsContainer'
import { AboutMeContainer, UserDiv, AboutMeText, Heading, Skills, Info, Paragraph, Image } from './styles'

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
            I am a <strong>Fullstack Developer @ Integrify</strong> with
            background in Architecture currently living in
            <strong> Berlin, Germany</strong>.
          </Paragraph>
          <Paragraph>
            Do you want to work with me? Integrify provides consulting and
            recruitment services for companies. Let’s talk more via Joona
            Ohra-aho: <a href="mailto:joona@integrify.io"><strong>joona@integrify.io</strong></a> / +358 400 579 588.
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
