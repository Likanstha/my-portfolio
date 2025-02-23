import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";

const expertiseData = [
  {
    icon: faReact,
    title: "Frontend Development",
    description:
      "I specialize in building responsive, interactive user interfaces with modern frontend technologies like React, Next.js, and TailwindCSS. I ensure a seamless user experience and high performance.",
    techStack: ["React", "Next.js", "Redux", "TailwindCSS", "HTML", "CSS"],
  },
  {
    icon: faNodeJs,
    title: "Backend Development",
    description:
      "I have experience in building scalable backend applications using Node.js, Express.js, and various database technologies such as MongoDB and PostgreSQL. I focus on creating efficient APIs and microservices.",
    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
      "RESTful API",
    ],
  },
  {
    icon: faDocker,
    title: "DevOps & Automation",
    description:
      "I help automate deployment and ensure seamless CI/CD pipelines. I have experience in cloud tools like AWS and Azure, as well as containerization using Docker and orchestration with Kubernetes.",
    techStack: [
      "Docker",
      "AWS",
      "Kubernetes",
      "CI/CD",
      "GitLab",
      "Lambda",
      "Elastic Beanstalk",
    ],
  },
];

const Expertise = () => {
  return (
    <div className="container mx-auto p-4" id="expertise">
      <h1 className="text-4xl font-semibold text-center mb-8">Expertise</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {expertiseData.map((expertise, index) => (
          <div
            key={index}
            className="bg-transparent p-6 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <FontAwesomeIcon
                icon={expertise.icon}
                size="3x"
                className="text-blue-500"
              />
            </div>
            <h3 className="text-2xl font-semibold text-center mb-2">
              {expertise.title}
            </h3>
            <p className="text-center mb-4 text-white">
              {expertise.description}
            </p>
            <div className="flex justify-center flex-wrap gap-2">
              <span className="font-semibold">Tech stack:</span>
              {expertise.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-sm text-gray-900 px-4 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
