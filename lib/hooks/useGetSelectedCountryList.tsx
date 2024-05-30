import { useGetCountryList } from "./useGetCountryList";

export const useGetSelectedCountryList = (selectedCountries: string[]) => {
  const { countryList } = useGetCountryList();

  const selectedCountriesOption =
    selectedCountries.length > 0
      ? countryList
          .filter((country) => selectedCountries.includes(country.code))
          .map((country) => ({
            label: country.name,
            value: country.code,
          }))
      : [];

  return selectedCountriesOption;
};
