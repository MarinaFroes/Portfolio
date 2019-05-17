import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Info from './Info';
// import arch from './images/arch.svg';
// import berlin from './images/berlin.svg';
// import brazil from './images/brazil.svg';
// import art from './images/art.svg';
// import languages from './images/languages.svg';

const AboutSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  border: 3px solid red;
  width: 100%;
`;

const ABOUT_INFOS = [
  {
    title: "Living",
    src: "/static/media/berlin.58b3e57b.svg",
    alt: "",
    subtitle: "Berlin - DE"
  },
  {
    title: "From",
    src: "/static/media/brazil.d927fc3d.svg",
    alt: "",
    subtitle: "Salvador - BR"
  },
  {
    title: "Background",
    src: "/static/media/arch.9dd105b2.svg",
    alt: "",
    subtitle: "Architecture"
  },
  {
    title: "Hobbies",
    src: "/static/media/art.aabdc549.svg",
    alt: "",
    subtitle: "Arts & Crafts"
  },
  {
    title: "Languages",
    src: "/static/media/languages.a49b7d60.svg",
    alt: "",
    subtitle: "PT(C2) - EN(B2)"
  },

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