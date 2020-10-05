import React from 'react'
import styled from 'styled-components'

import Section from './Section'
import MyPic from '../assets/images/MarinaCosta.jpg'
import SkillsContainer from './SkillsContainer'

const AboutMeContainer = styled.div`
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
  display: flex;
  width: 90%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media only screen and (max-width: 700px) {
    width: 80%;
    flex-direction: column;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

const UserDiv = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e6e6e6;

  @media only screen and (max-width: 700px) {
    border: none;
  }
`

const AboutMeText = styled.div`
  display: flex;
  padding: 2rem;

  @media only screen and (max-width: 1366px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`

const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 2rem;
  margin: 0;
  margin-top: 2rem;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`

const Skills = styled.div`
  width: 100%;
`

const Info = styled.div`
  text-align: left;
`

const Paragraph = styled.p`
  padding: 0.5rem 2rem;
  margin: 0;
  font-size: 1.2rem;

  @media only screen and (max-width: 800px) {
    font-size: 18px;
  }
`

const Image = styled.img`
  width: 10vw;
  margin: 1rem;
  border-radius: 50%;
  box-shadow: 4px 3px 14px 0 #455369;

  @media only screen and (max-width: 1440px) {
    width: 15vw;
  }

  @media only screen and (max-width: 1366px) {
    width: 20vw;
  }

  @media only screen and (max-width: 1080px) {
    width: 25vw;
  }

  @media only screen and (max-width: 700px) {
    width: 33vw;
  }
`

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
            <strong>Berlin, Germany</strong>.
          </Paragraph>
          <Paragraph>
            Do you want to work with me? Integrify provides consulting and
            recruitment services for companies. Let’s talk more via Joona
            Ohra-aho: joona@integrify.io / +358 400 579 588.
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
