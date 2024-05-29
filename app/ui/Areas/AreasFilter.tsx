import Search from "@/app/ui/Inputs/Search";
import { SelectInput } from "@/app/ui/Inputs/SelectInput";
import { ISelectOptions } from "@/lib/types";
import { nanoid } from "nanoid";

export const AreasFilter = ({
  optionsList,
}: {
  optionsList: ISelectOptions[] | undefined;
}) => {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-4">
      <Search
        placeholder="Search by area"
        paramName="zone"
        className="px-2 rounded border block w-full border-[#CCCCCC] placeholder:text-bneutral-300 h-[38px]"
      />
      <SelectInput
        placeholder={"Select Country"}
        optionsList={optionsList}
        filterBy={"countries"}
        id={nanoid()}
      />
    </div>
  );
};
