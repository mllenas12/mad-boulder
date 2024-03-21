import Search from "../Search";
import { SelectCountry } from "./SelectCountry";

export const AreasFilter = () => {
  return (
    <div className="grid grid-cols-2 gap-4 px-4 lg:px-24">
      <SelectCountry />
      <Search placeholder="Zone" paramName="zone" />
    </div>
  );
};
