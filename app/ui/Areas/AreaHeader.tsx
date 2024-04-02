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
    color: isActive ? "black" : "gray",
  });

  return (
    <header className="flex flex-col justify-center items-center pt-8 bg-stone-200">
      <h2 className="text-2xl font-semibold">
        {areaName.toUpperCase()} BOULDER
      </h2>
      <nav>
        <ul className="menu menu-horizontal flex justify-center gap-4">
          <li style={linkStyle(pathname == `/areas/${areaName}/info`)}>
            <Link href={`/areas/${areaName}/info`}>
              <PiInfo size="20px" />{" "}
              <span className="hidden sm:flex">Info</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/map`)}>
            <Link href={`/areas/${areaName}/map`}>
              <PiMapPin size="20px" />
              <span className="hidden sm:flex">Map</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/problems`)}>
            <Link href={`/areas/${areaName}/problems`}>
              <PiMapTrifoldLight size="20px" />
              <span className="hidden sm:flex">Problems</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/weather`)}>
            <Link href={`/areas/${areaName}/weather`}>
              <PiSun size="20px" />
              <span className="hidden sm:flex">Weather</span>
            </Link>
          </li>
          <li style={linkStyle(pathname == `/areas/${areaName}/guides`)}>
            <Link href={`/areas/${areaName}/guides`}>
              <PiNotebook size="20px" />
              <span className="hidden sm:flex">Guides</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
