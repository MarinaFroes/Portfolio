import React from "react";
import styled from "styled-components";

import Section from "./Section";
import Project from "./Project";
import MatchingGame from "./images/MatchingGame.png";
import FroggerClone from "./images/FroggerClone.png";
import Portfolio from "./images/PortfolioPlainJS.png";
import WeatherChecker from "./images/WeatherChecker.png";
import YelpClone from "./images/YelpClone.png";

const MY_GITHUB = "https://marinafroes.github.io";

const PROJECTS_INFO = [
  {
    title: "Frogger Clone",
    src: `${FroggerClone}`,
    alt: "Screenshot of the Frogger Clone Project",
    link: `${MY_GITHUB}/FEND-project3-Arcade-Game-Clone/`
  },
  {
    title: "Matching Game",
    src: `${MatchingGame}`,
    alt: "Screenshot of the Matching Game Project",
    link: `${MY_GITHUB}/FEND-project2-Matching-Game/`
  },
  {
    title: "Portfolio webpage",
    src: `${Portfolio}`,
    alt: "Screenshot of the Portfolio webpage",
    link: `${MY_GITHUB}/FEND-project1-Portfolio/`
  },
  {
    title: "Yelp Clone",
    src: `${YelpClone}`,
    alt: "Screenshot of the Yelp Clone Project",
    link: `${MY_GITHUB}/Ravenous-Codecademy/`
  },
  {
    title: "Weather Checker",
    src: `${WeatherChecker}`,
    alt: "Screenshot of the Weather Checker Project",
    link: `${MY_GITHUB}/Check-Weather/`
  }
];

const ProjectsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-flow: row wrap;
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
