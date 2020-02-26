import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.div`
  background-image: url(${props => props.imageSrc || 'https://dummyimage.com/740x420/e6e6e6/000000&text=no+image+'});
  background-position: center;
  background-size: cover;
  min-width: 25rem;
  height: auto;
  margin: 0;
  border: 1px solid red;
  flex-grow: 1;
`;
// const ProjectSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background-image: url(${props => props.imageSrc || 'https://dummyimage.com/740x420/e6e6e6/000000&text=no+image+'});
//   background-position: center;
//   background-size: cover;
//   align-items: center;
//   margin: 0;
//   border: 2px solid red;
 
//   flex: 1 1;
// `;

const AdditionalInfo = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: yellow;
  visibility: hidden;
  width: 15rem;
  height: 15rem;
  font-size: 1.2rem;
  
  &:hover {
    visibility: visible;
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: silver;
  &:hover {
    text-decoration: underline;
  }
`;

// const Image = styled.img`
//   height: 200px;
//   width: auto;
//   padding: 10px;
//   border: 1px solid #e6e6e6;
//   @media only screen and (max-width: 500px){
//     height: 150px;
//   }
// `;
// const Image = styled.img`
//   height: 200px;
//   width: auto;
//   padding: 10px;
//   border: 1px solid #e6e6e6;
//   border-radius: 0 0 20px 0;
//   @media only screen and (max-width: 500px){
//     height: 150px;
//   }
// `;

const ProjectTitle = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 0.25rem;
  background-color: silver;
  color: white;
`;
// const ProjectTitle = styled.p`
//   font-size: 1.5rem;
//   text-transform: uppercase;
//   font-weight: bold;
//   text-align: center;
//   padding: 0.25rem;
//   background-color: silver;
//   color: white;
//   border-radius: 20px 0 0 0;
// `;

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
  <ProjectSection imageSrc={src}>
    <ProjectLink href={project} target="_blank" rel="noopener noreferrer">
    <AdditionalInfo >
      <LinksContainer>
        <Link href={project} target="_blank" rel="noopener noreferrer">View Project</Link>
        <Link href={code} target="_blank" rel="noopener noreferrer">View Code</Link>
      </LinksContainer>
      <ProjectTitle>{title}</ProjectTitle>
    </AdditionalInfo>
    </ProjectLink>
  </ProjectSection>
);

export default Project;
