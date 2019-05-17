import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Info from './Info';
import arch from './images/arch.svg';
import berlin from './images/berlin.svg';
import brazil from './images/brazil.svg';
import art from './images/art.svg';
import languages from './images/languages.svg';

const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  border: 3px solid red;
  width: 100%;
`;

const About = () => (
  <Section heading="About Me">
    <AboutSection>
      <Info title="Living" src={berlin} alt="" subtitle="Berlin - DE" />
      <Info title="From" src={brazil} alt="" subtitle="Salvador - BR" />
      <Info title="Background" src={arch} alt="" subtitle="Architecture" />
      <Info title="Hobbies" src={art} alt="" subtitle="Arts & Crafts" />
      <Info title="Languages" src={languages} alt="" subtitle="PT (Native) - EN (B2)" />
    </AboutSection>
  </Section>
);

export default About;