import React from 'react';
import Section from './Section';
import { Timeline, Event } from 'react-timeline-scribble';


const TimelineContainer = () => (
  <Section heading="Timeline">
    <Timeline>
      <Event interval={"Feb 2019 – present"} title={"React Course"} subtitle={"ReDI School of Digital Integration gGmbH"}>
        Location: Berlin - Germany
        Curriculum: ES6 Review, Components and Props, State, Lifecycle & Handling Events, Lists & Keys, Forms.
        Final Project (in progress): re-implementation and improvement data widgets on IDMC website
      </Event>
      <Event interval={"Feb 2019 – present"} title={"Front-End Web Developer Nanodegree"} subtitle={"Udacity (online)"}>
        Curriculum: JavaScript in depth - DOM manipulation, WEB accessibility, Object-Oriented JS, Tools and Testing, Front- End Applications, etc.
        Projects finished: Portfolio webpage, Matching Game, Classic Arcade Game Clone, Feed Reader Testing.
        Final Project (in progress): Restaurant reviews app.
      </Event>
      <Event interval={"Aug 2018 – Jan 2019"} title={"Web Development Path"} subtitle={"Codecademy (online)"}>
        Curriculum: HTML, CSS, JavaScript, Intro to React, git, etc.
        Project: Ravenous app (Yelp clone using React)
      </Event>
      <Event interval={"2006 - 2011"} title={"Architecture and Urbanism"} subtitle={"Maranhao State University"}>
        Location: São Luís - Brazil
      </Event>
    </Timeline>
  </Section>
);

export default TimelineContainer;
