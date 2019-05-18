import React from 'react';
import styled from 'styled-components';
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';

import Section from './Section';

const SKILLS = [
  {
    name: 'React',
    level: '30%',
    icon: <FaReact />
  },
  {
    name: 'JavaScript',
    level: '40%',
    icon: <FaJsSquare />
  },
  {
    name: 'CSS',
    level: '50%',
    icon: <FaCss3Alt />
  },
  {
    name: 'HTML',
    level: '55%',
    icon: <FaHtml5 />
  }
];

const SkillIcon = styled.div`
  font-size: 35px;
  color: silver;
  padding: 10px;
`;

const SkillTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  color: silver;
  padding: 10px;
  width: 150px;
`;

const SkillDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;
  width: 100%;
`;

const Bar = styled.div`
  display: flex;
  border: 2px solid silver;
  border-radius: 8px;
  flex-basis: 600px;
  height: 20px;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Level = styled.div`
  width: ${props => props.level};
  height: 100%;
  background-color: silver;
`;

const SkillsContainer = () => (
  <Section heading="Skills">
    <SkillsSection>
      {SKILLS.map(skill => (
        <SkillDiv key={skill.name}>
          <SkillIcon>{skill.icon}</SkillIcon>
          <SkillTitle>{skill.name}</SkillTitle>
          <Bar>
            <Level level={skill.level} />
          </Bar>
        </SkillDiv>
      ))}
    </SkillsSection>
  </Section>
);

export default SkillsContainer;


