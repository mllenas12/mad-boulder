import Link from "next/link";

export const Beta = () => {
  return (
    <div
      className="relative text-center text-white flex flex-col justify-center gap-6 py-16 px-4 lg:p-40 bg-no-repeat bg-cover bg-center  min-h-[400px]"
      style={{
        backgroundImage: "url('/images/backgrounds/bg-md-far2.jpeg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <h3 className="z-10 font-bold relative">UPLOAD YOUR BETA</h3>
      <h4 className="z-10 font-semibold  relative">
        Do you want to help us in our journey? Upload your beta and contribute
        to the project.
      </h4>

      <Link
        href="/contributors"
        className="bg-amber-400 z-10 text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-auto"
      >
        UPLOADER
      </Link>
    </div>
  );
};
