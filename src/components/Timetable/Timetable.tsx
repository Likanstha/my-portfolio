"use client";
import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineData = [
  {
    title: "Freelance Software Developer",
    company: "Self Employed | Nepal and Australia",
    date: "April 2020 – Current",
    description:
      "Utilizing advanced web development technologies like React, Node.js, Express.js, MongoDB, MySQL, and more.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "AWS"],
  },
  {
    title: "Web Developer (Full Stack Developer)",
    company: "OzCar Pty Ltd | Lansvale, Sydney",
    date: "Aug 2024 – Feb 2025",
    description:
      "Worked on an existing car dealership management system and car finance system built with PHP, Laravel, Cake-php, AWS, and PostgreSQL.",
    technologies: ["PHP", "Laravel", "CakePHP", "AWS", "PostgreSQL", "Agile"],
  },
  {
    title: "Web Developer (Full Stack Developer)",
    company: "DriveIQ Technology | Sydney",
    date: "June 2022 – Aug 2024",
    description:
      "Designed and developed web pages using JavaScript, TypeScript, React JS, Redux, MongoDB, AWS, Node.js, GraphQL, and Express.js.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "GraphQL",
      "Express.js",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Pragmatic Technology | Nepal",
    date: "April 2016 – Nov 2018",
    description:
      "Worked on JAVA, Laravel, and Android projects, collecting user requirements and creating UML diagrams.",
    technologies: ["Java", "Laravel", "Android"],
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-20" id="timeline">
      <h1 className="text-4xl font-semibold text-center mb-8">
        Professional Timeline
      </h1>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            date={item.date}
            icon={<FontAwesomeIcon icon={faBriefcase} size="2x" />}
            iconStyle={{ background: "#4A90E2", color: "#fff" }}
            className="bg-transparent border-blue-500"
          >
            <h3 className="text-2xl font-semibold text-blue-700">
              {item.title}
            </h3>
            <h4 className="text-lg text-gray-500">{item.company}</h4>
            <p className="text-gray-700 mt-2">{item.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {item.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-400 text-sm px-4 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
