import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 2rem 0;
  width: 100%;
  border: 2px solid red;
`
const Content = styled.div`
  display: flex;
  justify-content: start;
  text-align: left;
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 2rem;
  text-align: left;
  margin: 2rem 2rem 0rem 4rem;
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