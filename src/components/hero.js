import React from "react";
import Button  from "../components/button";

function HeroSection() {
  return (
    <section className="items-center justify-center flex flex-col bg-hero-pattern bg-cover bg-center bg-no-repeat h-screen text-center max-sm:overflow-hidden">
      <div className="" >
        <Button primaryButton/>
        <h1 className="font-extrabold text-white text-3xl mt-5 max-sm:text-sm">UNLEASH YOUR POTENTIAL ON THE FIELD</h1>
        <br />
        <p className="text-white text-lg font-light mx-60 max-sm:w-sm">
          join a community of passionate football players dedicated to improving
          thier skills and achieving their goals.wether you're a beginner or a
          pro, our platform offers the resources, training and support you need
          to take your game to the next level.
        </p>
        <Button/>
      </div>
    </section>
  );
}

export default HeroSection;
