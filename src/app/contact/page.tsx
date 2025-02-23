import ContactForm from "@/components/ContactForm/ContactForm";
import GetInTouch from "@/components/GetInTouch/GetInTouch";
import contactParticleConfig from "@/components/Particle/contactParticleConfig";
import ParticlesBackground from "@/components/ParticleBackground";
import SocialIcons from "@/components/SocialIcons/SocialIcons";
import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <ParticlesBackground config={contactParticleConfig} />
      <div className="flex">
        <div className="w-1/2 m-auto mt-40 mx-10">
          <ContactForm />
        </div>
        <div className="w-1/2 m-auto mt-40">
          <GetInTouch />
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default Contact;
