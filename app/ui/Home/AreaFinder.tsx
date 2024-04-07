"use client";
import React, { useState } from "react";
import zoneData from "@/app/lib/data/zoneData.json";
import { useDebouncedCallback } from "use-debounce";
import { IArea } from "@/app/lib/types";
import Link from "next/link";
export const AreaFinder = () => {
  const areaList = zoneData.items.map((area: IArea) => area.name);
  const [query, setQuery] = useState("");

  return (
    <div className="text-center p-12 flex flex-col gap-4">
      <h3 className="font-semibold">AREA FINDER</h3>
      <div className="relative">
        <label className="relative block">
          <span className="absolute inset-y-0 right-0 flex items-center pr-2">
            <img src="/lupa.svg" alt="" className="w-4" />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border text-black border-slate-300 rounded-md py-2 pl-3  shadow-sm focus:outline-none  "
            placeholder="Search by zone"
            type="text"
            name="search"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>
        {/* Search Results Container */}
        <div
          className={`absolute mt-1 w-full p-2 bg-white shadow-lg rounded-bl rounded-br max-h-36 overflow-y-auto ${
            query == "" && "hidden"
          }`}
        >
          {areaList
            .filter((area) => area.toLocaleLowerCase().includes(query))
            .map((area, index) => {
              return (
                <Link
                  key={index}
                  href={`areas/${area}/info`}
                  className={`relative text-xs p-2 text-start hover:bg-black hover:bg-opacity-10 flex flex-col `}
                >
                  <p>{area}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
