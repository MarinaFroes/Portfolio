import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const ProjectTitle = styled.a`
  font-size: 20px;
  color: silver;
  text-transform: uppercase;
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 5px;
  padding: 10px;
  coolor: red;
`;

const Project = ({ title, src, alt, link }) => (
  <ProjectSection >
    <ProjectTitle
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </ProjectTitle>
    <Image src={src} alt={alt} />

  </ProjectSection>
);

export default Project;