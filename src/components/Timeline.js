import React from "react";
import Section from "./Section";
import { Timeline, Event } from "react-timeline-scribble";
import { EVENTS_INFO } from "../utils/eventsInfo";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const TimelineContainer = () => (
  <Section heading="Timeline">
    <Timeline>
      {EVENTS_INFO.map((event, index) => (
        <ScrollAnimation key={index} animateIn="fadeIn" duration={2} animateOnce={true}>
          <Event
            key={event.name}
            interval={event.interval}
            title={event.name}
            subtitle={event.institution}
          >
            {event.location !== "" && event.location}
          </Event>
        </ScrollAnimation>
      ))}
    </Timeline>
  </Section>
);

export default TimelineContainer;
