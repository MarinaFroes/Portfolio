import React from 'react';
import Section from './Section';
import { Timeline, Event } from 'react-timeline-scribble';

const EVENTS_INFO = [
  {
    interval: 'Feb 2019 – present',
    name: 'React course',
    location: 'Berlin - Germany',
    institution: 'ReDI School of Digital Integration gGmbH',
    degree: '',
    curriculum: '',
    otherProjects: '',
    finalProject: 're-implementation and improvement of data widgets on IDMC website'
  },
  {
    interval: 'Feb 2019 – present',
    name: 'Front-End Web Developer Nanodegree',
    location: '',
    institution: 'Udacity (online)',
    type: '',
    curriculum: '',
    otherProjects: 'Portfolio webpage, Matching Game, Frogger Clone, Feed Reader Testing.',
    finalProject: 'Restaurant reviews app.'
  },
  {
    interval: 'Aug 2018 – Jan 2019',
    name: 'Web Development Path',
    location: '',
    institution: 'Codecademy (online)',
    type: '',
    curriculum: 'HTML, CSS, JavaScript, Intro to React, git, etc.',
    otherProjects: '',
    finalProject: 'Ravenous app (Yelp clone using React)'
  },
  {
    interval: '2013 - 2018',
    name: 'Working as an Architect',
    location: 'Brasilia - Brazil',
    institution: 'CAIXA',
    type: 'Full Time Employee',
    curriculum: '',
    otherProjects: '',
    finalProject: ''
  },
  {
    interval: '2013 - 2015',
    name: 'MBA in Sustainable construction and efficient building',
    location: 'Brasilia - Brazil',
    institution: 'IPOG',
    type: 'MBA',
    curriculum: '',
    otherProjects: '',
    finalProject: ''
  },
  {
    interval: '2006 - 2011',
    name: `Bachelor's Degree in Architecture and Urbanism`,
    location: 'São Luís - Brazil',
    institution: 'Maranhao State University',
    type: 'Bachelor',
    curriculum: '',
    otherProjects: '',
    finalProject: ''
  }
];

const TimelineContainer = () => (
  <Section heading="Timeline">
    <Timeline>
      {EVENTS_INFO.map(event => (
        <Event
          key={event.name}
          interval={event.interval}
          title={event.name}
          subtitle={event.institution}
        >
          {event.location !== '' && event.location}
        </Event>
      ))}
    </Timeline>
  </Section>
);

export default TimelineContainer;
