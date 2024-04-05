"use client";
import React from "react";

const Map = ({ url }: { url: string | undefined }) => {
  console.log(url);
  return (
    <iframe
      width="100%"
      height="100%"
      src={url}
      allowFullScreen
      className="mx-auto h-[250px] lg:h-[400px]"
    ></iframe>
  );
};

export default Map;
