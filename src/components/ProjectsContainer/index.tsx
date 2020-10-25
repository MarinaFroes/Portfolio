import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

import Project from '../Project'
import Section from '../Section'
import { ProjectsSection } from './styles'
import { ProjectsContainerProps } from '../../types'

const ProjectsContainer = ({ projectInfo, heading }: ProjectsContainerProps) => (
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
            code={project.code || ''}
            page={project.page || ''}
            technologies={project.technologies}
          />
        </ScrollAnimation>
      ))}
    </ProjectsSection>
  </Section>
)

export default ProjectsContainer
