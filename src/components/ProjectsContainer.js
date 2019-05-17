import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import Project from './Project';
import MatchingGame from './MatchingGame.png';
import PortfolioPlainJS from './PortfolioPlainJS.png';
import FroggerClone from './FroggerClone.png';
import WeatherChecker from './WeatherChecker.png';

const PROJECTS_INFO = [
  {
    title: "Frogger Clone",
    src: { FroggerClone },
    alt: "Screenshot of the Frogger Clone Project",
    link: "https://marinafroes.github.io/FEND-project3-Arcade-Game-Clone/"
  },
  {
    title: "Matching Game",
    src: { MatchingGame },
    alt: "Screenshot of the Matching Game Project",
    link: "https://marinafroes.github.io/FEND-project2-Matching-Game/"
  },
  {
    title: "Vanilla JS Portfolio",
    src: { PortfolioPlainJS },
    alt: "Screenshot of the Vanilla JS Portfolio",
    link: "https://marinafroes.github.io/FEND-project1-Portfolio/"
  },
  {
    title: "Weather Checker",
    src: { WeatherChecker },
    alt: "Screenshot of the Weather Checker Project",
    link: "https://marinafroes.github.io/Check-Weather/"
  }
];

const ProjectsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
  border: 3px solid red;
  width: 100%;
`;

const Projects = () => (
  <Section heading="Projects">
    <ProjectsSection>
      {PROJECTS_INFO.map(project => (
        <Project
          key={project.src}
          title={project.title}
          src={project.src}
          alt={project.alt}
          link={project.link} 
        />
      ))}
    </ProjectsSection>
  </Section>
);

export default Projects;