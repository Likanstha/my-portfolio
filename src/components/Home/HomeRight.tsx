import { JSX } from "react";
import Image from "next/image";
import likan from "../../asset/img/likan.png"; // Update the image path accordingly

function HomeRight(): JSX.Element {
  return (
    <div className="home-right-main-img z-100">
      <Image
        src={likan}
        alt="Image of Motasim Foad"
        className="home-right-main-img"
        layout="responsive" // Optional: controls the aspect ratio of the image
        width={500} // Set the width of the image
        height={500} // Set the height of the image
      />
    </div>
  );
}

export default HomeRight;
