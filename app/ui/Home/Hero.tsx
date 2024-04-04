import React from "react";
import Button from "../Button";
const Hero = () => {
  return (
    <div
      className="relative text-center text-white flex flex-col justify-center py-32 lg:p-40 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home/hero-background.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <h1 className="z-5 px-4 font-bold relative text-mbblue-200">
        ROCK CLIMBING ACCESSIBLE FOR EVERYONE
      </h1>
      <h3 className="z-10 font-semibold p-8 relative">
        Explore our available climbing areas and get all the information you
        need for your next climbing trip
      </h3>
      <Button url="/areas">EXPLORE MAP</Button>
    </div>
  );
};

export default Hero;
