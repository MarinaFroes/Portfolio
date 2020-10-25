import React, { FunctionComponent } from 'react'

import { SectionContainer, Heading, Content } from './styles'
import { SectionProps } from '../../types'

const Section: FunctionComponent<SectionProps> = ({ heading, children }) => (
  <SectionContainer>
    <Heading id={heading.toLowerCase().replace(' ', '-')}>{heading}</Heading>
    <Content>{children}</Content>
  </SectionContainer>
)

export default Section
