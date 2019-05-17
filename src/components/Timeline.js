import React from 'react';
import Section from './Section';
import { Timeline, Event } from 'react-timeline-scribble';

const TimelineContainer = () => (
  <Section heading="Timeline">
    <Timeline>
      <Event interval={"Feb 2019 – present"} title={"React Course"} subtitle={"ReDI School of Digital Integration gGmbH"}>
        Location: Berlin - Germany
        Final Project (in progress): re-implementation and improvement of data widgets on IDMC website
      </Event>
      <Event interval={"Feb 2019 – present"} title={"Front-End Web Developer Nanodegree"} subtitle={"Udacity (online)"}>
        Projects finished: Portfolio webpage, Matching Game, Frogger Clone, Feed Reader Testing.
        <br />
        Final Project (in progress): Restaurant reviews app.
      </Event>
      <Event interval={"Aug 2018 – Jan 2019"} title={"Web Development Path"} subtitle={"Codecademy (online)"}>
        Curriculum: HTML, CSS, JavaScript, Intro to React, git, etc.
        <br />
        Project: Ravenous app (Yelp clone using React)
      </Event>
      <Event interval={"2006 - 2011"} title={"Architecture and Urbanism"} subtitle={"Maranhao State University"}>
        Location: São Luís - Brazil
        <br />
        Degree: Bachelor
      </Event>
    </Timeline>
  </Section>
);

export default TimelineContainer;
