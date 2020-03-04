import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

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
    link: "/RDND-project1-MyReads/#/",
    technologies: 'React.js'
  },
  {
    title: "Would You Rather App",
    src: `${WouldYouRather}`,
    alt: "Screenshot of the Would You Rather  Project",
    link: "/RDND-project2-WouldYouRather/#/",
    technologies: 'React.js, Redux'
  },
  {
    title: "Frogger Clone",
    src: `${FroggerClone}`,
    alt: "Screenshot of the Frogger Clone Project",
    link: "/FEND-project3-Arcade-Game-Clone/",
    technologies: 'JavaScript, CSS3, HTML5'
  },
  {
    title: "Matching Game",
    src: `${MatchingGame}`,
    alt: "Screenshot of the Matching Game Project",
    link: `/FEND-project2-Matching-Game/`,
    technologies: 'JavaScript, CSS3, HTML5'
  },
  {
    title: "Portfolio webpage",
    src: `${Portfolio}`,
    alt: "Screenshot of the Portfolio webpage",
    link: `/FEND-project1-Portfolio/`,
    technologies: 'CSS3, HTML5'
  },
  {
    title: "Yelp Clone",
    src: `${YelpClone}`,
    alt: "Screenshot of the Yelp Clone Project",
    link: `/Ravenous-Codecademy/`,
    technologies: 'React.js'
  },
  {
    title: "Weather Checker",
    src: `${WeatherChecker}`,
    alt: "Screenshot of the Weather Checker Project",
    link: `/Check-Weather/`,
    technologies: 'React.js'
  },
  {
    title: "Tea Cozy",
    src: `${TeaCozy}`,
    alt: "Screenshot of the Tea Cozy Project",
    link: `/Tea-Cozy/`,
    technologies: 'React.js'
  }
];

const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const Projects = () => (
  <Section heading="Projects">
    <ProjectsSection>
      {PROJECTS_INFO.map((project, index) => (
        <ScrollAnimation key={index} animateIn="fadeIn" duration={2} animateOnce={true}>
          <Project
            title={project.title}
            src={project.src}
            alt={project.alt}
            project={`${MY_GITHUB}${project.link}`}
            code={`${MY_PROFILE}${project.link}`}
            technologies={project.technologies}
          />
        </ScrollAnimation>
      ))}
      
    </ProjectsSection>
  </Section>
);

export default Projects;
