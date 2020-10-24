import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Project from '../Project'
import Section from '../Section'
import { ProjectsSection } from './styles'
import { MY_GITHUB, MY_PROFILE } from '../../utils/links'

const ProjectsContainer = ({ projectInfo, heading }) => (
  <Section heading={heading}>
    <ProjectsSection>
      {projectInfo.map((project, index) => (
        <ScrollAnimation
          key={index}
          animateIn='fadeIn'
          duration={2}
          animateOnce={false}
        >
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
)

export default ProjectsContainer
