import React from 'react';
import styled from 'styled-components';
import picture from './MarinaCosta.png';

const AboutContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 50px;
`

const Picture = styled.div`
  background-image: url(${picture});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 270px;
`
const TextContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  padding: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 30px;
`;

const TextContent = styled.p`
  font-size: 20px;
`;

const About = () => (
  <AboutContainer>
    <Picture />
    <TextContainer>
      <SectionTitle>About me</SectionTitle>
      <TextContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </TextContent>
    </TextContainer>
  </AboutContainer>
);

export default About;