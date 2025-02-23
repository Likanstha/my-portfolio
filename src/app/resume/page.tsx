import aboutParticleConfig from "@/components/Particle/aboutParticleConfig";
import ParticlesBackground from "@/components/ParticleBackground";
import React from "react";

const ResumePage = () => {
  return (
    <div className="flex justify-cente m-auto w-1/2 mt-20 h-[20%]">
      <ParticlesBackground config={aboutParticleConfig} />
      <iframe
        src="/pdf/resume.pdf"
        width="100%"
        height="800px"
        className="border-none"
        title="Resume"
      ></iframe>
    </div>
  );
};

export default ResumePage;
