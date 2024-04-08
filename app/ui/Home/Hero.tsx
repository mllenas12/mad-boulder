import React from "react";
import Button from "@/app/ui/Button";
const Hero = () => {
  return (
    <div
      className="relative text-center text-white flex flex-col bg-no-repeat bg-cover bg-center py-16 lg:py-32 2xl:min-h-[650px]"
      style={{ backgroundImage: "url('/images/backgrounds/bg-md-3.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-20 px-4"></div>
      <div className="z-1 relative text-end px-6 md:px-10 flex flex-col  gap-8">
        <h1 className="md:w-3/4 lg:w-1/2 md:ml-auto font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          ROCK CLIMBING ACCESSIBLE FOR EVERYONE
        </h1>
        <h3 className="md:w-2/3 lg:w-1/2 md:ml-auto font-semibold relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Explore our available climbing areas and get all the information you
          need for your next climbing trip
        </h3>

        <Button className="mx-auto sm:ml-auto sm:mx-0" url="/areas">
          EXPLORE MAP
        </Button>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import Button from "../Button";
// const Hero = () => {
//   return (
//     <div
//       className="relative text-center text-white flex flex-col justify-center py-32 lg:p-40 bg-no-repeat bg-cover bg-center"
//       style={{ backgroundImage: "url('/images/home/hero-background.png')" }}
//     >
//       <div className="absolute inset-0 bg-black opacity-20"></div>

//       <h1 className="z-5 px-4 font-bold relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
//         ROCK CLIMBING ACCESSIBLE FOR EVERYONE
//       </h1>
//       <h3 className="z-10 font-semibold p-8 relative drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
//         Explore our available climbing areas and get all the information you
//         need for your next climbing trip
//       </h3>
//       <Button url="/areas">EXPLORE MAP</Button>
//     </div>
//   );
// };

// export default Hero;
