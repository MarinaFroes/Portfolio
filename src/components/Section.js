import React from 'react';
import styled from 'styled-components';


const SectionContainer = styled.section`
  display: flex;
  margin: 0;
  width: 90vw;
  padding: 50px;
`
const Content = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
`;

const Heading = styled.h1`
  text-align: left;
  margin: 0;
  writing-mode: vertical-rl;
  text-orientation: sideways;
`

const Section = ({ heading, children }) => (
  <SectionContainer>
    <Heading id={heading.toLowerCase().replace(" ", "-")}>
      {heading}
    </Heading>
    <Content>
      {children}
    </Content>
  </SectionContainer>
)

export default Section;