import Search from "@/app/ui/Search";
import { SelectInput } from "../SelectInput";
import { ISelectOptions } from "@/app/lib/types";

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
      />
      <Search placeholder="Search by zone" paramName="zone" />
    </div>
  );
};
