import React, { useState } from 'react'

import {
  ProjectSection,
  AdditionalInfo,
  LinksContainer,
  ProjectTitle,
  Technologies,
  Link,
} from './styles'
import { ProjectProps } from '../../types'

const Project = ({ src, page, code, title, technologies }: ProjectProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = (trueOrFalse: boolean) => {
    setIsVisible(trueOrFalse)
  }

  return (
    <ProjectSection
      imageSrc={src}
      onMouseEnter={() => toggleVisibility(true)}
      onMouseLeave={() => toggleVisibility(false)}
    >
      <AdditionalInfo isVisible={isVisible}>
        <ProjectTitle>{title}</ProjectTitle>
        <Technologies>
          <strong>Technologies:</strong> {technologies}
        </Technologies>
        <LinksContainer>
          {page && (
            <Link href={page} target='_blank' rel='noopener noreferrer'>
              View Page
            </Link>
          )}
          {code && (
            <Link href={code} target='_blank' rel='noopener noreferrer'>
              View Code
            </Link>
          )}
        </LinksContainer>
      </AdditionalInfo>
    </ProjectSection>
  )
}

export default Project
