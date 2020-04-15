import React from "react";
import styled from "styled-components";

import Section from "./Section";
import MyPic256 from "../assets/images/MarinaCosta_256.jpg";
import MyPic341 from "../assets/images/MarinaCosta_341.jpg";
import MyPic455 from "../assets/images/MarinaCosta_455.jpg";
import MyPic533 from "../assets/images/MarinaCosta_533.jpg";
import MyPic640 from "../assets/images/MarinaCosta_640.jpg";
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
  width: 20vw;
  flex-grow: 1;
  margin: 1rem;
  border-radius: 50%;
  box-shadow: 4px 3px 14px 0 #455369;
`;


const About = () => (
  <Section heading="About">
    <AboutMeContainer>
      <UserDiv>
        <Image
          src={MyPic256}
          srcSet={`${MyPic640} 640w, ${MyPic533} 533w, ${MyPic455} 455w, ${MyPic341} 341w, ${MyPic256} 256w`}
          size="33.3vw"
          alt="author picture"
        />
      </UserDiv>
      <AboutMeText>
        <Info>
          <Heading>Hello, I'm Marina!</Heading>
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
  </Section>
);

export default About;