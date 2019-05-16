import React from 'react';
import { ResponsiveBar } from "@nivo/bar";
import Section from './Section';
import styled from 'styled-components';

const BarContainer = styled.div`
  height: 400px;
  width: 500px;
`;

const skills = [
  {
    "skill": "React",
    "level": 40
  },
  {
    "skill": "JavaScript",
    "level": 50
  },
  {
    "skill": "CSS",
    "level": 60
  },
  {
    "skill": "HTML",
    "level": 65
  },
]

const SkillsContainer = () => (
  <Section heading="Skills">
    <BarContainer>
      <ResponsiveBar
        data={skills}
        keys={['level']}
        indexBy="skill"
        margin={{ top: 50, right: 80, bottom: 50, left: 100 }}
        padding={0.3}
        maxValue={100}
        groupMode="grouped"
        layout="horizontal"
        colors={{ scheme: 'category10' }}
        borderWidth={2}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        borderRadius={9}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 10,
          tickPadding: 2,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: 1
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: '',
          legendPosition: 'middle',
          legendOffset: -20
        }}
        enableLabel={false}
        labelSkipWidth={20}
        labelSkipHeight={30}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[]}
        isInteractive={false}
        animate={false}
        motionStiffness={90}
        motionDamping={15}
        />
    </BarContainer>
  </Section>
);

export default SkillsContainer;