"use client";

import HomeLeft from "@/components/Home/HomeLeft";
import homeParticlesConfig from "@/components/Particle/homeParticleConfig";
import ParticlesBackground from "@/components/ParticleBackground";
import { JSX } from "react";

function Home(): JSX.Element {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <ParticlesBackground config={homeParticlesConfig} />
      <div className="flex">
        <HomeLeft />
      </div>
    </div>
  );
}

export default Home;
