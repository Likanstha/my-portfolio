// Usage example in ProjectsPage.tsx or another component
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsPage: React.FC = () => {
  const personalProjects = [
    {
      title: "Library Backend",
      description:
        "A backend for a library system developed using React, Express, and MongoDB.",
      techStack: ["React", "Express", "MongoDB"],
      link: "https://github.com/Likanstha/library-backend",
    },
    {
      title: "Client Dashboard Backend",
      description:
        "Backend for client dashboard, built with Express, MongoDB, Redis, and Node.js.",
      techStack: ["Express", "MongoDB", "Redis", "Node.js"],
      link: "https://github.com/Likanstha/client-api",
    },
    {
      title: "Client Dashboard Frontend",
      description:
        "Frontend for client dashboard developed with Material UI and React.",
      techStack: ["Material UI", "React"],
      link: "https://github.com/Likanstha/dashboard-ui",
    },
    // {
    //   title: "AWS S3 Files Microservice",
    //   description:
    //     "A microservice for handling files on AWS S3 using Node.js and Express.",
    //   techStack: ["AWS", "Node.js", "Express"],
    //   link: "https://github.com/Likanstha/aws-files",
    // },
    {
      title: "Messenger Frontend",
      description: "Frontend of a messaging app built with React.",
      techStack: ["React"],
      link: "https://github.com/Likanstha/messenger-frontend",
    },
    {
      title: "Messenger Backend",
      description:
        "Backend of a messaging app built with Node.js, Express, and MongoDB.",
      techStack: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/Likanstha/messenger",
    },
    {
      title: "MyPortfolio",
      description:
        "A personal portfolio built with Next.js, React, Tailwind, and TypeScript.",
      techStack: ["Next.js", "React", "Tailwind", "TypeScript"],
      link: "https://github.com/Likanstha/my-portfolio",
    },
  ];

  const workProjects = [
    {
      title: "Data Migration Project (MySQL to MongoDB)",
      description: "Migrated data from MySQL to MongoDB",
      techStack: [
        "Node.js",
        "MySQL",
        "MongoDB",
        "AWS EventBridge",
        "AWS Lambda",
      ],
    },
    {
      title: "Accounting Integration (Xero and MYOB)",
      description:
        "Integrated Xero and MYOB with CRM, automating invoice generation and improving financial operations.",
      techStack: [
        "GraphQL",
        "Express",
        "AWS EventBridge",
        "Xero API",
        "MYOB API",
      ],
    },
    {
      title: "ABN Lookup Micro-service (Australia & New Zealand)",
      description:
        "Developed an ABN lookup micro-service for commercial companies to track compliance data.",
      techStack: [
        "AWS Lambda",
        "Node.js",
        "Express",
        "MongoDB",
        "Google Autocomplete",
        "Zod Validator",
        "OpenAPI",
        "Swagger",
        "Serverless",
      ],
    },
    {
      title: "Dynamic Dashboard with Chart Components",
      description:
        "Built a dynamic dashboard with real-time data visualization using multiple chart components.",
      techStack: ["Express", "MongoDB", "Chart.js"],
    },
    {
      title: "Application Lead API",
      description:
        "Created a single API endpoint to manage client personal details, loan information, and more.",
      techStack: [
        "AWS Lambda",
        "Node.js",
        "Express",
        "Next.js",
        "MongoDB",
        "Zod Validator",
        "OpenAPI",
        "Swagger",
      ],
    },
    {
      title: "Logo Uploader Component",
      description:
        "Developed a logo uploader for automatic cropping and resizing of images for brand consistency.",
      techStack: ["AWS S3", "AWS Lambda", "Serverless"],
    },
    {
      title: "Credit Report Integration (Equifax, Illion, CreditorWatch)",
      description:
        "Integrated Credit Report Integration as a Serverless application",
      techStack: [
        "AWS CI/CD",
        "AWS Lambda",
        "Serverless",
        "Express",
        "Equifax API",
        "Illion API",
      ],
    },
    {
      title: "Glass Guide Integration",
      description: "Integrated Glass Guide as a Serverless application",
      techStack: ["AWS CI/CD", "AWS Lambda", "Serverless", "Express"],
    },
    {
      title: "CustomerFitJourney Application",
      description: "Car Jouney application to choose perfect car for client",
      techStack: [
        "Next.js",
        "Tailwind",
        "MongoDB",
        "Webpack",
        "Bitbucket Pipeline",
        "AWS ECS",
        "AWS Elastic Beanstalk",
        "SSL",
      ],
    },
    {
      title: "Broker Portal Application",
      description: "Help client for financing Application",
      techStack: [
        "Next.js",
        "Tailwind",
        "MongoDB",
        "Webpack",
        "Bitbucket Pipeline",
        "AWS ECS",
        "AWS Elastic Beanstalk",
        "SSL",
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6 text-white mt-20">
      {/* Work Projects */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Work Projects</h2>
        <div className="flex flex-wrap justify-center">
          {workProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              techStack={project.techStack}
            />
          ))}
        </div>

        {/* Personal Projects */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-6">Personal Projects</h2>
          <div className="flex flex-wrap justify-center">
            {personalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                link={project.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
