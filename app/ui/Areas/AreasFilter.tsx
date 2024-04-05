import Search from "@/app/ui/Search";
import { SelectInput } from "../SelectInput";
import { ISelectOptions } from "@/app/lib/types";
import { nanoid } from "nanoid";

export const AreasFilter = ({
  optionsList,
}: {
  optionsList: ISelectOptions[] | undefined;
}) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
      <SelectInput
        placeholder={"Select Country"}
        optionsList={optionsList}
        filterBy={"countries"}
        id={nanoid()}
      />
      <Search
        placeholder="Search by area"
        paramName="zone"
        className="px-2 rounded border block w-full border-neutral-300 placeholder:text-bneutral-300 h-[38px] "
      />
    </div>
  );
};
