import aboutParticleConfig from "@/components/Particle/aboutParticleConfig";
import ParticlesBackground from "@/components/ParticleBackground";
import React from "react";

const ResumePage = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <ParticlesBackground config={aboutParticleConfig} />

      <div className="flex justify-center items-center min-h-screen p-4 mt-5 lg:mt-8">
        <div className="w-full max-w-4xl">
          <iframe
            src="/pdf/resume.pdf"
            width="100%"
            height="800px"
            className="w-full h-[100vh] border-none rounded-lg shadow-lg overflow-y-auto"
            title="Resume"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
