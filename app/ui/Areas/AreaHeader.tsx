import React from "react";

import {
  PiInfo,
  PiMapPin,
  PiMapTrifoldLight,
  PiSun,
  PiNotebook,
} from "react-icons/pi";

export const AreaHeader = ({ areaName }: { areaName: string }) => {
  return (
    <header className="flex flex-col justify-center items-center pt-8 bg-stone-200">
      <h2 className="text-2xl font-semibold">
        {areaName.toUpperCase()} BOULDER
      </h2>
      <nav>
        <ul className="menu menu-horizontal flex justify-center gap-4">
          <li>
            <a href={`/areas/${areaName}/info`}>
              <PiInfo style={{ color: "black" }} size="20px" />{" "}
              <span className="hidden sm:flex">Info</span>
            </a>
          </li>
          <li>
            <a href={`/areas/${areaName}/map`}>
              <PiMapPin style={{ color: "gray" }} size="20px" />
              <span className="hidden sm:flex">Map</span>
            </a>
          </li>
          <li>
            <a href={`/areas/${areaName}/explore`}>
              <PiMapTrifoldLight style={{ color: "gray" }} size="20px" />
              <span className="hidden sm:flex">Sectors</span>
            </a>
          </li>
          <li>
            <a href={`/areas/${areaName}/weather`}>
              <PiSun style={{ color: "gray" }} size="20px" />
              <span className="hidden sm:flex">Weather</span>
            </a>
          </li>
          <li>
            <a href={`/areas/${areaName}/guides`}>
              <PiNotebook style={{ color: "gray" }} size="20px" />
              <span className="hidden sm:flex">Guides</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
