import React from 'react'

import { SKILLS } from '../../utils/skillsIcons'
import { SkillDiv, SkillIcon, SkillTitle, SkillsSection } from './styles'

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
