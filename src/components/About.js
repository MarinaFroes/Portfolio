import React from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import Section from "./Section";
import Info from "./Info";
import { ABOUT_INFOS } from "./aboutInfo";

const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 100%;
`;

const About = () => (
  <Section heading="About">
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