import styled from 'styled-components'

export const ProjectSection = styled.div`
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

export const AdditionalInfo = styled.div`
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

export const ProjectTitle = styled.p`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
  padding: 0.1rem;
  color: #347B98;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const Link = styled.a`
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

export const Technologies = styled.p`
  font-size: 1.1rem;
`