"use client";

import { useSectionInView } from "@/common/hooks";
import React from "react";
import SectionHeading from "./section-heading";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/common/data";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
    //   className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement>
                <h3>{item.title}</h3>
                <p>{item.location}</p>
                <p>{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
