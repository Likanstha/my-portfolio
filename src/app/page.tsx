"use client";

import HomeLeft from "@/components/Home/HomeLeft";
import ParticlesBackground from "@/components/ParticleBackground";
import { JSX } from "react";

function Home(): JSX.Element {
  return (
    <div className="relative text-white">
      <ParticlesBackground />
      <div className="flex">
        <HomeLeft />
      </div>
    </div>
  );
}

export default Home;
