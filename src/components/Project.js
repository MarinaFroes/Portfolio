import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: silver;
  &:hover {
    text-decoration: underline;
  }
`;

const Image = styled.img`
  height: 200px;
  width: auto;
  padding: 10px;
  border: 1px solid #e6e6e6;
  border-radius: 0 0 20px 0;
  @media only screen and (max-width: 500px){
    height: 150px;
  }
`;

const ProjectTitle = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 0.25rem;
  background-color: silver;
  color: white;
  border-radius: 20px 0 0 0;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Link = styled.a`
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Project = ({ title, src, alt, project, code }) => (
  <ProjectSection>
    <ProjectLink href={project} target="_blank" rel="noopener noreferrer">
      <ProjectTitle>{title}</ProjectTitle>
      <Image src={src} alt={alt} />
    </ProjectLink>
    <LinksContainer>
      <Link href={project} target="_blank" rel="noopener noreferrer">View Project</Link>
      <Link href={code} target="_blank" rel="noopener noreferrer">View Code</Link>
    </LinksContainer>
  </ProjectSection>
);

export default Project;
