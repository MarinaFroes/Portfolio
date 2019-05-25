import React from 'react';
import styled from 'styled-components';

import Section from './Section';
import Info from './Info';
import { ABOUT_INFOS } from './aboutInfo';

const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 100%;
`;

const About = () => (
  <Section heading="About Me">
    <AboutSection>
      {ABOUT_INFOS.map(aboutInfo => (
        <Info
          key={aboutInfo.src}
          title={aboutInfo.title}
          src={aboutInfo.src}
          alt={aboutInfo.alt}
          subtitle={aboutInfo.subtitle}
        />
      ))}
    </AboutSection>
  </Section>
);

export default About;