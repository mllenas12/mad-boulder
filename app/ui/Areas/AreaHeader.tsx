"use client";
import React from "react";
import Link from "next/link";
import {
  PiInfo,
  PiMapPin,
  PiMapTrifoldLight,
  PiSun,
  PiNotebook,
} from "react-icons/pi";
import { usePathname } from "next/navigation";

export const AreaHeader = ({ areaName }: { areaName: string }) => {
  const pathname = usePathname();

  const linkStyle = (isActive: boolean) => ({
    fontWeight: isActive ? "600" : "normal",
    color: isActive ? "black" : "#a3a0a0",
  });

  return (
    <header className="flex flex-col justify-center items-center pt-8 bg-neutral-200">
      <h2 className=" font-semibold">{areaName.toUpperCase()}</h2>
      <nav>
        <ul className="flex justify-between gap-12 py-4">
          <li style={linkStyle(pathname == `/areas/${areaName}/info`)}>
            <Link href={`/areas/${areaName}/info`} className="flex gap-2">
              <PiInfo size="20px" className="my-auto" />{" "}
              <span className="hidden sm:flex">Info</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/map`)}>
            <Link href={`/areas/${areaName}/map`} className="flex gap-2">
              <PiMapPin size="20px" className="my-auto" />
              <span className="hidden sm:flex">Map</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/problems`)}>
            <Link href={`/areas/${areaName}/problems`} className="flex gap-2">
              <PiMapTrifoldLight size="20px" className="my-auto" />
              <span className="hidden sm:flex">Problems</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/weather`)}>
            <Link href={`/areas/${areaName}/weather`} className="flex gap-2">
              <PiSun size="20px" className="my-auto" />
              <span className="hidden sm:flex">Weather</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/guides`)}>
            <Link href={`/areas/${areaName}/guides`} className="flex gap-2">
              <PiNotebook size="20px" className="my-auto" />
              <span className="hidden sm:flex">Guides</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
