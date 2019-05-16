import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  display: flex;
  margin: 0;
  width: 90vw;
  padding: 50px;
  border: 5px solid red;
`
const Content = styled.div`
  display: flex;
  border: 5px solid green;
`;

const Heading = styled.h1`
  text-align: left;
  margin: 0;
  transform: rotate(-90deg);
`;

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