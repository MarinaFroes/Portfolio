import React from 'react'

import {
  ProjectSection,
  AdditionalInfo,
  LinksContainer,
  ProjectTitle,
  Technologies,
  Link,
} from './styles'

class Project extends React.Component {
  state = {
    isVisible: false,
  }

  toggleVisibility(trueOrFalse) {
    this.setState({
      isVisible: trueOrFalse,
    })
  }

  render() {
    const { src, project, code, title, technologies } = this.props
    const { isVisible } = this.state

    return (
      <ProjectSection
        imageSrc={src}
        onMouseEnter={() => this.toggleVisibility(true)}
        onMouseLeave={() => this.toggleVisibility(false)}
      >
        <AdditionalInfo isVisible={isVisible}>
          <ProjectTitle>{title}</ProjectTitle>
          <Technologies>
            <strong>Technologies:</strong> {technologies}
          </Technologies>
          <LinksContainer>
            {project && (
              <Link href={project} target='_blank' rel='noopener noreferrer'>
                View Page
              </Link>
            )}
            <Link href={code} target='_blank' rel='noopener noreferrer'>
              View Code
            </Link>
          </LinksContainer>
        </AdditionalInfo>
      </ProjectSection>
    )
  }
}

export default Project
