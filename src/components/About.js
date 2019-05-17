import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Info from './Info';
import arch from './images/arch.svg';
import languages from './images/languages.svg';
import berlin from './images/berlin.svg';
import brazil from './images/brazil.svg';
import art from './images/art.svg';

const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  width: 100%;
`;

const ABOUT_INFOS = [
  {
    title: "Living",
    src: `${berlin}`,
    alt: "",
    subtitle: "Berlin - DE"
  },
  {
    title: "From",
    src: `${brazil}`,
    alt: "",
    subtitle: "Salvador - BR"
  },
  {
    title: "Background",
    src: `${arch}`,
    alt: "",
    subtitle: "Architecture"
  },
  {
    title: "Hobbies",
    src: `${art}`,
    alt: "",
    subtitle: "Arts & Crafts"
  },
  {
    title: "Languages",
    src: `${languages}`,
    alt: "",
    subtitle: "PT(C2) - EN(B2)"
  }
];

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