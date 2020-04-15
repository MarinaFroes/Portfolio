import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import Section from "./Section";
import Project from "./Project";
import { PROJECTS_INFO } from "../utils/projectInfo";

const MY_PROFILE = "https://github.com/MarinaFroes";
const MY_GITHUB = "https://marinafroes.github.io";

const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

const Projects = () => (
  <Section heading="Projects">
    <ProjectsSection>
      {PROJECTS_INFO.map((project, index) => (
        <ScrollAnimation key={index} animateIn="fadeIn" duration={2} animateOnce={false}>
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
