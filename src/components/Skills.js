import React from "react";
import styled from "styled-components";
import { InlineIcon } from "@iconify/react";
import reduxIcon from "@iconify/icons-simple-icons/redux";
import { FaReact, FaCss3Alt, FaHtml5, FaJsSquare } from "react-icons/fa";

import Section from "./Section";

const SKILLS = [
  {
    name: "Redux",
    level: "30%",
    icon: <InlineIcon icon={reduxIcon} />
  },
  {
    name: "React",
    level: "50%",
    icon: <FaReact />
  },
  {
    name: "JavaScript",
    level: "60%",
    icon: <FaJsSquare />
  },
  {
    name: "CSS",
    level: "70%",
    icon: <FaCss3Alt />
  },
  {
    name: "HTML",
    level: "75%",
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


