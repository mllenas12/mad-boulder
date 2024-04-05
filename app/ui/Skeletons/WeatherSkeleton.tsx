import React from "react";

const WeatherSkeleton = () => (
  <div className="skeleton flex flex-col md:flex-row w-full">
    <div className="skeleton w-full md:w-1/2"></div>
    <div className="skeleton flex flex-col md:1/2">
      <div className="skeleton h-14 w-full "></div>
      <div className="skeleton h-14 w-full "></div>
      <div className="skeleton h-14 w-full"></div>
    </div>
  </div>
);

export default WeatherSkeleton;
