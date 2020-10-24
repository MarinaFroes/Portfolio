import React from 'react'

import { SectionContainer, Heading, Content } from './styles'

const Section = ({ heading, children }) => (
  <SectionContainer>
    <Heading id={heading.toLowerCase().replace(' ', '-')}>{heading}</Heading>
    <Content>{children}</Content>
  </SectionContainer>
)

export default Section
