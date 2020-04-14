import React from "react";
import styled from "styled-components";

import Section from "./Section";
import picture from "../assets/images/MarinaCosta.jpg"; 
import SkillsContainer from "./SkillsContainer";


const AboutMeContainer = styled.div`
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
  display: flex;
  width: 90%;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media only screen and (max-width: 700px){
    width: 80%;
  }
`;

const UserDiv = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e6e6e6;
`

const AboutMeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;

const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 2rem;
  margin: 0;
  margin-top: 2rem;
`;

const Skills = styled.div`
  width: 100%;
`;

const Info = styled.div`
  text-align: left;
`;

const Paragraph = styled.p`
  padding: 0.5rem 2rem;
  margin: 0;
  font-size: 1rem;
`;

const Image = styled.img`
  width: 30%;
  flex-grow: 1;
  margin: 1rem;
  border-radius: 50%;
  box-shadow: 4px 3px 14px 0 #455369;
`;
/**
 *   @media only screen and (max-width: 900px){
    width: 30vw;
  }

  @media only screen and (max-width: 700px){
    width: 30vw;
  }

  @media only screen and (max-width: 600px){
    width: 50vw;
  }
 */

const About = () => (
  <Section heading="About">
    <AboutMeContainer>
      <UserDiv>
        <Image src={picture} alt="Profile picture" />
      </UserDiv>
      <AboutMeText>
        <Info>
          <Heading>A brief introduction</Heading>
          <Paragraph>
            I am a <strong>Junior Front-End Developer</strong> with background is in Civil Architecture currently living in <strong>Berlin, Germany</strong>.
          </Paragraph>
          <Paragraph>
            I aspire to work in a great company where I can leverage my knowledge of Web Development Technologies and contribute to its operations. Therefore, I welcome new opportunities for Front-End or Web Development roles.
          </Paragraph>
          <Paragraph>
            You can check a few of my projects bellow.
          </Paragraph>
        </Info>
        <Skills>
          <Heading>Main skills</Heading>
          <SkillsContainer/>
        </Skills>
      </AboutMeText>
    </AboutMeContainer>
    
    
    {/* <AboutSection>
      {ABOUT_INFOS.map((aboutInfo, index) => (
        <ScrollAnimation key={index} animateIn="fadeIn" duration={2} animateOnce={true}>
          <Info
            key={aboutInfo.src}
            title={aboutInfo.title}
            src={aboutInfo.src}
            alt={aboutInfo.alt}
            subtitle={aboutInfo.subtitle}
            />
        </ScrollAnimation>
      ))}
    </AboutSection> */}
  </Section>
);

export default About;