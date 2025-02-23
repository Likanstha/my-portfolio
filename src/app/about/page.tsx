import Expertise from "@/components/Expertise/Expertise";
import contactParticleConfig from "@/components/Particle/contactParticleConfig";
import ParticlesBackground from "@/components/ParticleBackground";
import Timeline from "@/components/Timetable/Timetable";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <ParticlesBackground config={contactParticleConfig} />
      <div className="flex  flex-col mt-20">
        <Expertise />
        <Timeline />
      </div>
    </div>
  );
};

export default About;
