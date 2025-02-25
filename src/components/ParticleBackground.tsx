/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // If you're using slim mode for a smaller bundle size
import homeParticleConfig from "./Particle/homeParticleConfig";

interface ParticlesBackgroundProps {
  config?: any;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  config = homeParticleConfig, // Default to homeParticleConfig if no prop is provided
}) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log("Particles Engine Initialized:", engine);
    // Use loadSlim to initialize only the necessary features for a smaller bundle
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      console.log("Particles Loaded:", container);
    },
    []
  );

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    />
  );
};

export default ParticlesBackground;
