"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import countries from "@/app/lib/data/countries.json";
import { ICountry, TOptions } from "@/app/lib/types";
import Select from "react-select";

export const SelectCountry = () => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const countryList = countries.items.map((country: ICountry) => {
    return {
      name: country.name[0],
      code: country.reduced_code,
    };
  });
  countryList.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });

  const options = countryList.map((country) => {
    return { value: country.code, label: country.name };
  });

  const handleChange: TOptions = (selectedOption) => {
    const options = selectedOption.map((option) => option.value).join(",");
    const params = new URLSearchParams(searchParams);
    if (options) {
      params.set("countries", options);
    } else {
      params.delete("countries");
    }
    replace(`${pathname}?${params.toString()}`);
    return;
  };

  return (
    <Select
      isMulti
      name="countries"
      className="basic-multi-select"
      classNamePrefix="select"
      options={options}
      //defaultValue={{ label: "", value: "" }}
      // searchParams.get("search")?.toString()
      onChange={handleChange}
    />
  );
};
