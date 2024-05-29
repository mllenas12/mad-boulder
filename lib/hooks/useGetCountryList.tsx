import countries from "@/lib/data/countries.json";
import { ICountry } from "@/lib/types";

export const useGetCountryList = () => {
  const countryList = countries.items.map((country: ICountry) => {
    return {
      name: country.name[0],
      code: country.reduced_code,
    };
  });

  return countryList.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
    return 0;
  });
};