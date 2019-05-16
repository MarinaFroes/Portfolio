import React from 'react';
import styled from 'styled-components';
import Section from './Section';

const TextContent = styled.p`
  font-size: 20px;
  padding: 20px;
`;

const About = () => (
  <Section heading="About Me">
      <TextContent>
        I'm a Building Architect from Brazil who is currently living in Berlin, Germany. 
        When I moved abroad I decided to start over again and redraw my career changing my goals to live new experiences. That is why I started to learn programming and I have been studying since then.
        <br />
        I use front end technologies like JavaScript, CSS and HTML and I started to learn frontend frameworks and libraries like React.
        <br />
        Currently, I'm a ReDI School of Digital Integration student (React Course) and I'm also doing the Udacity Front-End Nanodegree to improve my skills.
      </TextContent>
  </Section>
);

export default About;