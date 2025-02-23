import { JSX } from "react";
import { Typewriter } from "react-simple-typewriter";
import SocialIcons from "../SocialIcons/SocialIcons";

function HomeLeft(): JSX.Element {
  return (
    <div className="flex justify-center items-center h-screen m-auto">
      <div className="text-center text-white">
        <h1 className="text-7xl font-extrabold">Hello!</h1>
        <h2 className="text-6xl font-semibold mt-4">
          I am <strong className="text-yellow-500">Likan Shrestha</strong>
        </h2>
        <h3 className="mt-4 text-4xl">
          <Typewriter
            words={[
              "Software Engineer",
              "Full Stack Developer",
              "Software Developer",
              "Frontend Developer",
              "Backend Developer",
              "Web Developer",
            ]}
            loop
            cursor
            typeSpeed={70}
          />
        </h3>
        <SocialIcons />
      </div>
    </div>
  );
}

export default HomeLeft;
