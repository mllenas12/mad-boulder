import { PiMedal } from "react-icons/pi";

export const ProfileHeader = () => {
  return (
    <div className="h-[370px] ">
      <header className="relative bg-neutral-400 h-[194px] md:h-[200px] bg-cover bg-center">
        <div className="absolute top-[50px] left-1/2 transform -translate-x-1/2 w-full">
          <img
            src="/images/bg-example.jpg"
            alt=""
            className="rounded-full w-48 h-48 mx-auto mb-4"
          />
          <div className="text-center">
            <h3 className="font-semibold text-2xl ">Name</h3>
            <p className="text-sm text-neutral-400">Welcome to MadBoulder</p>
            <PiMedal size="67px" color="#FAC12F" className="mx-auto mt-4" />
          </div>
        </div>
      </header>
    </div>
  );
};
