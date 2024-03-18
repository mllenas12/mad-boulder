import Link from "next/link";
export const Beta = () => {
  return (
    <div
      className="relative text-center text-white flex flex-col justify-center gap-4 py-16 px-4 lg:p-40 bg-no-repeat bg-cover bg-right md:bg-center"
      style={{
        backgroundImage: "url('/images/home/upload-background-small.png')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <h3 className="z-10  text-4xl font-bold relative">UPLOAD YOUR BETA</h3>
      <h3 className="z-10 font-semibold  relative">
        Do you want to help us in our journey? Upload your beta and contribute
        to the project.
      </h3>

      <Link
        href="/video-uploader"
        className="bg-yellow-400 z-10 text-neutral-700 font-semibold rounded w-fit px-4 py-2 mx-auto"
      >
        UPLOADER
      </Link>
    </div>
  );
};
