import styled from 'styled-components'

export const SkillIcon = styled.div`
  font-size: 35px;
  color: #347b98;
`

export const SkillTitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: #347b98;
  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
`

export const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-bottom: 2rem;
`

export const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`
