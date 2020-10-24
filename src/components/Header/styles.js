import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin: 0;
  width: 100%;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 0;
  width: 100%;
  padding-top: 55%;
  position: relative;
`;

export const StyledImg = styled.img`
  opacity: 0.7;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;

  @media only screen and (max-width: 1000px){
    opacity: 0.5;
  }
`;

export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  position: absolute;
  top: 10%;
  z-index: 100;
  text-align: center;
  width: 100%;
`

export const Heading = styled.h2`
  color: #000;
  font-family: 'GochiHand', 'Lucida Sans Unicode', 'Lucida Grande', sans-serif;
  font-size: 5rem;
  font-weight: normal;
  left: 50%;
`;
