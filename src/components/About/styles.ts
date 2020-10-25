import styled from 'styled-components'

export const AboutMeContainer = styled.div`
  box-shadow: 4px 3px 14px 0 rgba(179, 179, 204, 1);
  border-radius: 0.5rem;
  display: flex;
  width: 90%;
  max-width: 1200px;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  @media only screen and (max-width: 700px) {
    width: 80%;
    flex-direction: column;
  }

  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`

export const UserDiv = styled.div`
  padding: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 2px solid #e6e6e6;

  @media only screen and (max-width: 700px) {
    border: none;
  }
`

export const AboutMeText = styled.div`
  display: flex;
  padding: 2rem;

  @media only screen and (max-width: 1366px) {
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }
`

export const Heading = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 2rem;
  margin: 0;
  margin-top: 2rem;

  @media only screen and (max-width: 800px) {
    font-size: 20px;
  }
`

export const Skills = styled.div`
  width: 100%;
`

export const Info = styled.div`
  text-align: left;
`

export const Paragraph = styled.p`
  padding: 0.5rem 2rem;
  margin: 0;
  font-size: 1.2rem;

  @media only screen and (max-width: 800px) {
    font-size: 18px;
  }
`

export const Image = styled.img`
  width: 10vw;
  margin: 1rem;
  border-radius: 50%;
  box-shadow: 4px 3px 14px 0 #455369;

  @media only screen and (max-width: 1440px) {
    width: 15vw;
  }

  @media only screen and (max-width: 1366px) {
    width: 20vw;
  }

  @media only screen and (max-width: 1080px) {
    width: 25vw;
  }

  @media only screen and (max-width: 700px) {
    width: 33vw;
  }
`
