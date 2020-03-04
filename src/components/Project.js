import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.div`
  display: flex;
  background-image: url(${props => props.imageSrc || 'https://dummyimage.com/740x420/e6e6e6/000000&text=no+image+'});
  background-position: center;
  background-size: cover;
  min-width: 25rem;
  height: auto;
  margin: 0;
  border: 1px solid #e6e6e6;
  flex-grow: 1;

  @media only screen and (max-width: 500px){
    min-width: 10rem;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: yellow;
  opacity: 0.85;
  visibility: ${props => props.isVisible ? 'visible' : 'hidden'};
  width: 15rem;
  height: 15rem;
  font-size: 1.2rem;
`;

const ProjectTitle = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 0.1rem;
  color: purple;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

const Link = styled.a`
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  padding: 0.8rem;
  border: 2px solid purple;
  &:hover {
    background-color: purple;
    color: #fff;
  }
`;

const Technologies = styled.p`
  font-size: 1.1rem;
`

class Project extends React.Component{
  state = {
    isVisible: false
  }

  toggleVisibility(trueOrFalse) {
    this.setState({
      isVisible: trueOrFalse
    })
  }

  render() {
    const { src, project, code, title, technologies } = this.props
    const { isVisible } = this.state

    return (
      <ProjectSection
        imageSrc={src}
        onMouseEnter={() => this.toggleVisibility(true)}
        onMouseLeave={() => this.toggleVisibility(false)}
      >
        <AdditionalInfo
          isVisible={isVisible}
        >
          <ProjectTitle>{title}</ProjectTitle>
          <Technologies><strong>Technologies:</strong> {technologies}</Technologies>
          <LinksContainer>
            <Link href={project} target="_blank" rel="noopener noreferrer">View Project</Link>
            <Link href={code} target="_blank" rel="noopener noreferrer">View Code</Link>
          </LinksContainer>
        </AdditionalInfo>
      </ProjectSection>
    )
  }
}

export default Project;
