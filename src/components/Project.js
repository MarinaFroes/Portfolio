import React from "react";
import styled from "styled-components";

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
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
`;

const ProjectTitle = styled.p`
  font-size: 20px;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`;

const Project = ({ title, src, alt, link }) => (
  <ProjectSection>
    <ProjectLink href={link} target="_blank" rel="noopener noreferrer">
      <ProjectTitle>{title}</ProjectTitle>
      <Image src={src} alt={alt} />
    </ProjectLink>
  </ProjectSection>
);

export default Project;
