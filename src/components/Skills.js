import React from 'react';
import Section from './Section';
import styled from 'styled-components';
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";


const SKILLS = [
  {
    "name": "React",
    "level": "40%",
    "icon": <FaReact />
  },
  {
    "name": "JavaScript",
    "level": "50%",
    "icon": <FaJsSquare />
  },
  {
    "name": "CSS",
    "level": "60%",
    "icon": <FaCss3Alt />
  },
  {
    "name": "HTML",
    "level": "65%",
    "icon": <FaHtml5 />
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
  width: 600px;
  height: 20px;
`;

const Level = styled.div`
  width: ${props => props.level};
  height: 100%;
  background-color: silver;
`;

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
