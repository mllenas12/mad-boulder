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
    <div className="grid grid-cols-2 gap-4 px-4 lg:px-24">
      <SelectInput
        placeholder={"Select Country"}
        optionsList={optionsList}
        filterBy={"countries"}
        id={nanoid()}
      />
      <Search placeholder="Search by zone" paramName="zone" />
    </div>
  );
};
