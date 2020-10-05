import React from 'react'
import styled from 'styled-components'
import { Icon, InlineIcon } from '@iconify/react'
import reduxIcon from '@iconify/icons-simple-icons/redux'
import {
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
} from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'
import typescriptIcon from '@iconify/icons-simple-icons/typescript'

const SKILLS = [
  {
    name: 'Redux',
    icon: <InlineIcon icon={reduxIcon} />,
  },
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'JavaScript',
    icon: <FaJsSquare />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs />,
  },
  {
    name: 'CSS',
    icon: <FaCss3Alt />,
  },
  {
    name: 'HTML',
    icon: <FaHtml5 />,
  },
  {
    name: 'Typescript',
    icon: <Icon icon={typescriptIcon} />,
  },
  {
    name: 'Mongo Db',
    icon: <DiMongodb />,
  },
]

const SkillIcon = styled.div`
  font-size: 35px;
  color: #347b98;
`

const SkillTitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: #347b98;
  text-align: center;

  @media only screen and (max-width: 800px) {
    font-size: 16px;
  }
`

const SkillDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  margin-bottom: 2rem;
`

const SkillsSection = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`

const SkillsContainer = () => (
  <SkillsSection>
    {SKILLS.map((skill, key) => (
      <SkillDiv key={key}>
        <SkillIcon>{skill.icon}</SkillIcon>
        <SkillTitle>{skill.name}</SkillTitle>
      </SkillDiv>
    ))}
  </SkillsSection>
)

export default SkillsContainer
