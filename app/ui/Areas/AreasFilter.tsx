"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import countries from "@/app/lib/data/countries.json";
import { ICountry, TOptions } from "@/app/lib/types";
import Select, { ActionMeta, MultiValue } from "react-select";
import Search from "../Search";
import { SelectCountry } from "./SelectCountry";

export const AreasFilter = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 lg:px-24">
      <SelectCountry />

      <input
        type="text"
        placeholder="Filters"
        className="input input-bordered w-full "
      />
      <Search />

      <input
        type="text"
        placeholder="Order"
        className="input input-bordered w-full "
      />
    </div>
  );
};
