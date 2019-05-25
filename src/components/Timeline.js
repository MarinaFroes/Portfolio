import React from 'react';
import Section from './Section';
import { Timeline, Event } from 'react-timeline-scribble';
import { EVENTS_INFO } from './eventsInfo';

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
