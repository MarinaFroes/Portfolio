import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Project from "./Project";
import Section from "./Section";

const MY_PROFILE = "https://github.com/MarinaFroes";
const MY_GITHUB = "https://marinafroes.github.io";

// import ShowProject from "./ShowProject";


const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;

const ProjectsContainer = ({ projectInfo, heading }) => (
  <Section heading={heading}>
    <ProjectsSection>
      {projectInfo.map((project, index) => (
        <ScrollAnimation key={index} animateIn="fadeIn" duration={2} animateOnce={false}>
          <Project
            title={project.title}
            src={project.src}
            alt={project.alt}
            project={project.isDeployed ? `${MY_GITHUB}${project.link}` : null}
            code={`${MY_PROFILE}${project.link}`}
            technologies={project.technologies}
          />
        </ScrollAnimation>
      ))}
    </ProjectsSection>
  </Section>
);

export default ProjectsContainer;
