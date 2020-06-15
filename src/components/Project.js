import React from 'react';
import styled from 'styled-components';

const ProjectSection = styled.div`
  display: flex;
  background-image: url(${props => props.imageSrc || 'https://dummyimage.com/740x420/e6e6e6/000000&text=no+image+'});
  background-position: center;
  background-size: cover;
  width: 28rem;
  
  height: auto;
  margin: 0;
  border: 1px solid #e6e6e6;
  
  @media only screen and (max-width: 700px){
    width: 25rem;
  }

  @media only screen and (max-width: 500px){
    width: 19rem;
  }

  @media only screen and (max-width: 400px){
    width: 16rem;
  }
`;

const AdditionalInfo = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  opacity: 0.90;
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
  color: #347B98;
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
  border: 2px solid #347B98;
  &:hover {
    background-color: #347B98;
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
            {
              project
              && <Link href={project} target="_blank" rel="noopener noreferrer">View Page</Link>
            }
            <Link href={code} target="_blank" rel="noopener noreferrer">View Code</Link>
          </LinksContainer>
        </AdditionalInfo>
      </ProjectSection>
    )
  }
}

export default Project;
