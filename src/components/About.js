import React from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import Section from "./Section";
import Info from "./Info";
import { ABOUT_INFOS } from "../utils/aboutInfo";
import picture from '../assets/images/MarinaCosta.jpg'; 

const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 100%;
`;

const Image = styled.img`
  width: 6rem;
  height: 6rem;
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


const About = () => (
  <Section heading="About Me">
    <Image src={picture} alt="Profile picture" />
    <AboutSection>
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
    </AboutSection>
  </Section>
);

export default About;