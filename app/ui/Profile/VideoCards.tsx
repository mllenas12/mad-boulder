"use client";
import { IFormData } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { setRandomNumber } from "@/lib/utils/utils";
import { FiEye } from "react-icons/fi";
import { FaRegCalendar, FaCircle } from "react-icons/fa";

export const VideoCards = ({ video }: { video: IFormData }) => {
  const [color, setColor] = useState("");
  useEffect(() => {
    setStatusColor(video.state);
  }),
    [video.state];
  const setStatusColor = (status: string | undefined) => {
    if (status == "Pending") {
      setColor("#FAC12E");
    } else if (status == "Published") {
      setColor("green");
    } else if (status == "Rejected") {
      setColor("red");
    }
  };

  return (
    <div key={video.id} className="flex w-full px-4 rounded-xl">
      <video
        controls
        width="100%"
        height="100%"
        className="rounded-l w-1/2 object-cover shadow-xl"
      >
        <source src={video.file} type="video/mp4" />
      </video>
      <div className="py-2 w-2/3 text-start px-4 flex flex-col gap-2 bg-white rounded-r shadow-xl">
        <h5 className="font-semibold">- {video.problem} -</h5>
        <p className=" ps-2 flex gap-2">
          <FaRegCalendar className="my-auto" />
          {video.createdAt}
        </p>
        <div className="flex gap-2 ps-2">
          <FaCircle fill={color} className="my-auto text-xs" />
          <p>{video.state} </p>
        </div>
        <p className=" ps-2 flex gap-2">
          <FiEye className="my-auto" />
          Views: {video.state == "Published" ? setRandomNumber(1, 1500) : 0}
        </p>
      </div>
    </div>
  );
};
