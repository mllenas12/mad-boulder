import { PiMedal } from "react-icons/pi";
export const ProfileHeader = () => {
  return (
    <>
      <header className="flex flex-col justify-center bg-neutral-400 h-[194px] md:h-[200px] bg-cover bg-center"></header>
      <div className="flex flex-col gap-4 absolute top-[90px] left-1/2 transform -translate-x-1/2 w-full">
        <img
          src="/images/bg-example.jpg"
          alt=""
          className="rounded-full w-32 h-32 md:w-48 md:h-48 mx-auto"
        />
        <div>
          <h3 className="font-semibold text-2xl ">Name</h3>
          <p className="text-sm text-neutral-400">Welcome to MadBoulder</p>
        </div>
        <PiMedal size="67px" color="#FAC12F" className="mx-auto" />
      </div>
    </>
  );
};
