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
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-4 gap-10">
        {/* Contact Form Section */}
        <div className="w-full md:w-1/2 mx-auto">
          <ContactForm />
        </div>

        {/* Get In Touch & Social Icons Section */}
        <div className="w-full md:w-1/2 mx-auto text-center md:text-left">
          <GetInTouch />
          <div className="mt-4">
            <SocialIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
