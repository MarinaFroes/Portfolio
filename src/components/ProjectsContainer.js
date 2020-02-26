import React from "react";
import styled from "styled-components";

import Section from "./Section";
import Project from "./Project";
import MatchingGame from "./images/MatchingGame.png";
import FroggerClone from "./images/FroggerClone.png";
import Portfolio from "./images/PortfolioPlainJS.png";
import WeatherChecker from "./images/WeatherChecker.png";
import YelpClone from "./images/YelpClone.png";
import TeaCozy from "./images/TeaCozy.png";
import WouldYouRather from "./images/WouldYouRather.png";
import MyReads from "./images/MyReads.png";

const MY_PROFILE = "https://github.com/MarinaFroes";
const MY_GITHUB = "https://marinafroes.github.io";

const PROJECTS_INFO = [
  {
    title: "My Reads App",
    src: `${MyReads}`,
    alt: "Screenshot of the My Reads Project",
    link: "/RDND-project1-MyReads/#/"
  },
  {
    title: "Would You Rather App",
    src: `${WouldYouRather}`,
    alt: "Screenshot of the Would You Rather  Project",
    link: "/RDND-project2-WouldYouRather/#/"
  },
  {
    title: "Frogger Clone",
    src: `${FroggerClone}`,
    alt: "Screenshot of the Frogger Clone Project",
    link: "/FEND-project3-Arcade-Game-Clone/"
  },
  {
    title: "Matching Game",
    src: `${MatchingGame}`,
    alt: "Screenshot of the Matching Game Project",
    link: `/FEND-project2-Matching-Game/`
  },
  {
    title: "Portfolio webpage",
    src: `${Portfolio}`,
    alt: "Screenshot of the Portfolio webpage",
    link: `/FEND-project1-Portfolio/`
  },
  {
    title: "Yelp Clone",
    src: `${YelpClone}`,
    alt: "Screenshot of the Yelp Clone Project",
    link: `/Ravenous-Codecademy/`
  },
  {
    title: "Weather Checker",
    src: `${WeatherChecker}`,
    alt: "Screenshot of the Weather Checker Project",
    link: `/Check-Weather/`
  },
  {
    title: "Tea Cozy",
    src: `${TeaCozy}`,
    alt: "Screenshot of the Tea Cozy Project",
    link: `/Tea-Cozy/`
  }
];

const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  border: 4px solid blue;
  width: 100%;
`;
// const ProjectsSection = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   flex-flow: row wrap;
//   width: 100%;
//   border: 4px solid blue;
// `;

const Projects = () => (
  <Section heading="Projects">
    <ProjectsSection>
      {PROJECTS_INFO.map((project, index) => (
        <div key={index}>
          <Project
            title={project.title}
            src={project.src}
            alt={project.alt}
            project={`${MY_GITHUB}${project.link}`}
            code={`${MY_PROFILE}${project.link}`}
          />
        </div>
      ))}
      
    </ProjectsSection>
  </Section>
);

export default Projects;
