import React from "react";

export const AreaFinder = () => {
  return (
    <div className="text-center p-12 flex flex-col gap-4">
      <h3 className="font-semibold">AREA FINDER</h3>
      <label className="relative block">
        <span className="absolute inset-y-0 right-0 flex items-center pr-2">
          <img src="/lupa.svg" alt="" className="w-4" />
        </span>
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border text-black border-slate-300 rounded-md py-2 pl-3  shadow-sm focus:outline-none  "
          placeholder="Search by boulder or zone"
          type="text"
          name="search"
          //onChange={(event) => setQuery(event.target.value)}
        />
      </label>
    </div>
  );
};
