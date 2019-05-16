import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Img from 'react-image'; 
// import MatchingGame from './MatchingGame.png';
// import HPQuiz from './HPQuiz.png';
// import PortfolioPlainJS from './PortfolioPlainJS.png';
// import FroggerClone from './FroggerClone.png';
// import WeatherChecker from './WeatherChecker.png';

const Project = styled.div`
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 270px;
`

const Projects = () => (
  <Section heading="Projects">
    <Img src="https://images.app.goo.gl/GA3K1EES86d885MK8" />
    <Project url='https://images.app.goo.gl/GA3K1EES86d885MK8' />
    <Project url='./FroggerClone.png' />
    <Project url='./WeatherChecker.png' />
    <Project url='./PortfolioPlainJS.png'/>
    <Project url='./HPQuiz.png' />
  </Section>
);

export default Projects;