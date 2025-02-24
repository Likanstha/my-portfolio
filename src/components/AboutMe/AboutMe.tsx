/* eslint-disable @next/next/no-img-element */
import React from "react";
import likan from "../../asset/img/likan.png";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 w-full">
      {/* Text Section */}
      <div className="space-y-4 text-lg text-white w-full md:w-[60%]">
        <h1 className="text-3xl font-bold text-white">
          Hi, I'm <strong className="text-yellow-500">Likan Shrestha</strong>!
          👋
        </h1>
        <p>
          I'm a passionate Full Stack Developer 💻 with over four years of
          experience in building dynamic, scalable web applications. I
          specialize in modern technologies like
          <span className="font-semibold text-blue-500">
            {" "}
            JavaScript, TypeScript, React.js, Node.js, MongoDB,
          </span>{" "}
          and AWS ☁️.
        </p>
        <p>
          I love turning complex problems into simple, efficient solutions 🔧
          while continuously exploring new technologies to enhance my skill set
          🔍. Whether it's developing user-friendly web applications, optimizing
          backend systems, or streamlining workflows with cloud services, I
          enjoy creating impactful software that drives results 🚀.
        </p>
        <p>
          When I'm not coding, you'll find me learning about emerging tech
          trends 🌱, working on personal projects 🛠️, or collaborating with
          others to bring creative ideas to life 💡. I'm always excited to take
          on new challenges and contribute to projects that make a difference!
        </p>
      </div>

      {/* Image Section */}
      <div className="mt-8 md:mt-0 md:ml-20">
        <Image
          src={likan}
          alt="Likan"
          className="w-36 h-36 rounded-full border-4 border-blue-500"
          layout="intrinsic" // This maintains the image aspect ratio
          width={150} // Set the width of the image
          height={150} // Set the height of the image
        />
      </div>
    </div>
  );
};

export default AboutMe;
