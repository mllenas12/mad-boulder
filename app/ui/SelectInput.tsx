"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { TOptions, ISelectOptions } from "@/app/lib/types";
import Select from "react-select";

export const SelectInput = ({
  placeholder,
  optionsList,
  filterBy,
  id,
}: {
  placeholder: string;
  optionsList: ISelectOptions[] | undefined;
  filterBy: string;
  id: string;
}) => {
  const { replace } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const options = optionsList?.map((option) => {
    return { value: option.value, label: option.label };
  });

  const handleChange: TOptions = (selectedOption) => {
    const options = selectedOption.map((option) => option.value).join(",");
    const params = new URLSearchParams(searchParams);
    if (options) {
      params.set(filterBy, options);
    } else {
      params.delete(filterBy);
    }
    replace(`${pathname}?${params.toString()}`);
    return;
  };

  return (
    <Select
      id={id}
      isMulti={true}
      placeholder={<div>{placeholder}</div>}
      name={filterBy}
      className="basic-multi-select"
      classNamePrefix="select"
      options={options}
      onChange={handleChange}
    />
  );
};
