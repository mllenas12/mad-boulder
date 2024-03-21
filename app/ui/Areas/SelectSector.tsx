"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import countries from "@/app/lib/data/countries.json";
import { IArea, ICountry, TOptions, TSector } from "@/app/lib/types";
import Select from "react-select";

export const SelectSector = ({
  currentAreaData,
}: {
  currentAreaData: IArea | undefined;
}) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sectorsList = currentAreaData?.sectors.map((sector: TSector) => {
    return { name: sector.name };
  });

  const options = sectorsList?.map((sector) => {
    return { value: sector.name, label: sector.name };
  });

  const handleChange: TOptions = (selectedOption) => {
    const options = selectedOption.map((option) => option.value).join(",");
    const params = new URLSearchParams(searchParams);
    if (options) {
      params.set("sectors", options);
    } else {
      params.delete("sectors");
    }
    replace(`${pathname}?${params.toString()}`);
    return;
  };

  return (
    <Select
      isMulti
      name="sectors"
      className="basic-multi-select"
      classNamePrefix="select"
      options={options}
      onChange={handleChange}
    />
  );
};
