"use client";
import { IFormData } from "@/app/lib/types";
import { FaCircle } from "react-icons/fa";
import React, { useEffect } from "react";
import { useState } from "react";
import { capitalizeFirstLetter, setRandomNumber } from "@/app/lib/utils";
export const VideoCards = ({ video }: { video: IFormData }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    setStatusColor(video.state);
    console.log(video.state);
  }),
    [video.state];
  const setStatusColor = (status: string) => {
    if (status == "Pending") {
      setColor("#FAC12E");
    } else if (status == "Published") {
      setColor("green");
    } else if (status == "Rejected") {
      setColor("red");
    }
  };

  return (
    <div key={video.id} className="flex w-full px-4">
      {/* <div className="flex w-full px-4 md:w-1/2 md:mx-auto"> */}
      <video
        controls
        width="100%"
        height="100%"
        className="rounded-l w-1/2 object-cover shadow-xl"
      >
        <source src={video.file} type="video/mp4" />
      </video>
      <div className="py-2 w-2/3 text-start px-4 flex flex-col gap-2 bg-white rounded-r shadow-xl">
        <h5 className="font-semibold">{video.problem}</h5>
        <p className="text-xs ps-2">{video.createdAt}</p>
        <div className="text-xs flex gap-2 ps-2">
          <FaCircle fill={color} className="my-auto" />
          <p>{video.state} </p>
        </div>
        <p className="text-xs ps-2">
          Views: {video.state == "Published" ? setRandomNumber(1, 1500) : 0}
        </p>
      </div>
    </div>
  );
};
