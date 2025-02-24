import fireParticleConfig from "@/components/Particle/fireParticleConfig";
import ParticlesBackground from "@/components/ParticleBackground";
import Project from "@/components/Project/Project";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <ParticlesBackground config={fireParticleConfig} />
      <Project />
    </div>
  );
};

export default Contact;
