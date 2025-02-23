import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  const socialLinks = [
    {
      href: "https://github.com/likanstha",
      icon: faGithub,
      color: "hover:text-gray-500",
    },
    {
      href: "https://www.linkedin.com/in/likanstha",
      icon: faLinkedin,
      color: "hover:text-blue-700",
    },
  ];

  return (
    <div className="flex justify-center space-x-8 py-8">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-4xl transition duration-300 ${link.color}`}
        >
          <FontAwesomeIcon icon={link.icon} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
