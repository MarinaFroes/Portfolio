import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;

  @media only screen and (max-width: 500px){
    margin: 0.5rem;
  }
`;

export const InfoTitle = styled.h3`
  font-size: 1.2rem;
  color: silver;
  text-transform: uppercase;

  @media only screen and (max-width: 500px){
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  height: 8rem;
  width: 8rem;

  @media only screen and (max-width: 500px){
    height: 4rem;
    width: 4rem;
  }
`;

export const InfoSubtitle = styled.p`
  font-size: 1rem;

  @media only screen and (max-width: 500px){
    font-size: 0.8rem;
  }
`;
