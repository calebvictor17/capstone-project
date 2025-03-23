import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section className="flex flex-col px-6 lg:px-0 py-16 md:flex-row h-220 bg-white">
      <div className=" md:w-1/2">
        <Image
          src="/stadium 1.jpeg"
          alt="about"
          width={800}
          height={800}
          className="shadow-lg w-auto h-full object-cover"
        />
      </div>

      <div className="w-full md:w-1/2 bg-red-700 p-8 md:p-14 text-white lg:p-16 flex flex-col justify-center gap-4 ">
        <h4 className="text-m uppercase font-bold tracking-wider text-center md:text-left">
          About Us
        </h4>
        <h2 className="text-3xl font-bold leadinng-tight mt-2 text-center md:text-left">
          {" "}
          Our Mission: Empowering players, Transforming the game
        </h2>
        <p>
          {" "}
          Lorem ispum dolor sit amet, consectetur adipiscing elit. Suspen disse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare,eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>

        <button className="text-red-800 bg-white hover:bg-gray-800 hover:text-white px-6 py-2 rounded-full tracking-wider font-bold mt-4 w-55 h-10 mx-80">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default About;
