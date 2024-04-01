import { FaCircle } from "react-icons/fa";
export default function MyVideosPage() {
  const videoData = {
    videoName: "Problema 32 (sit)",
    date: "24/12/2023",
    status: "Uploaded",
  };

  const videoCard = (
    // <div className="flex w-full px-4">
    <div className="flex w-full px-4 md:w-1/2 md:mx-auto">
      <img
        src="/images/bg-example.jpg"
        alt=""
        className="rounded-l h-32 w-1/2 object-cover shadow-xl"
      />
      <div className="py-2 w-2/3 text-start px-4 flex flex-col gap-2 bg-white rounded-r shadow-xl">
        <h5 className="font-semibold">{videoData.videoName}</h5>
        <p className="text-xs ps-2">{videoData.date} </p>
        <div className="text-xs flex gap-2 ps-2">
          <FaCircle fill="green" className="my-auto" />
          <p>{videoData.status} </p>
        </div>
        <p className="text-xs ps-2">Views: 1432</p>
      </div>
    </div>
  );

  return (
    <div className="text-center flex flex-col gap-4 ">
      <h3 className="text-xl font-semibold">Your uploaded videos:</h3>
      <div className="flex flex-col gap-4 ">
        {/* <div className="flex flex-col gap-4 md:px-8 md:grid md:grid-cols-2"> */}
        {videoCard}
        {videoCard}
        {videoCard}
        {videoCard}
      </div>
    </div>
  );
}
