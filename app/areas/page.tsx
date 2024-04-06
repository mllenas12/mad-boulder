import { AreaCard } from "../ui/Areas/AreaCard";
import Map from "@/app/ui/Map/Map";
import zoneData from "@/app/lib/data/zoneData.json";
import { AreasFilter } from "../ui/Areas/AreasFilter";
import SortButtons from "./SortButtons";
import countries from "@/app/lib/data/countries.json";
import { ICountry } from "../lib/types";
export default function AreasPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = zoneData.items;
  const query =
    typeof searchParams.zone === "string"
      ? searchParams.zone.toLowerCase()
      : undefined;

  const selectedCountries =
    typeof searchParams.countries === "string"
      ? decodeURIComponent(searchParams.countries).split(",")
      : [];

  const filteredData = data.filter(
    (area) =>
      selectedCountries.length == 0 || selectedCountries.includes(area.country)
  );

  let sortedData = [...filteredData];

  if (searchParams.sortby && searchParams.order) {
    const orderBy = searchParams.sortby;
    const orderDirection = searchParams.order;

    if (orderBy === "name") {
      sortedData.sort((a, b) =>
        orderDirection === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
    } else if (orderBy === "videoCount") {
      sortedData.sort((a, b) =>
        orderDirection === "asc"
          ? a.video_count - b.video_count
          : b.video_count - a.video_count
      );
    }
  }

  const cards = query
    ? sortedData
        .filter((card) => card.name.toLowerCase().includes(query))
        .map((card) => <AreaCard area={card} key={card.name} />)
    : sortedData.map((area) => <AreaCard area={area} key={area.name} />);

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

  const optionsList = countryList.map((country) => {
    return { value: country.code, label: country.name };
  });

  return (
    <div className="flex flex-col md:gap-8">
      {/* MAP: */}
      <div className="h-[300px] md:h-[420px]">
        {filteredData && <Map data={filteredData} />}
      </div>
      <div className="flex flex-col gap-6 md:w-4/5 mx-auto mb-10 p-6 bg-neutral-100 lg:p-8 rounded-lg">
        {/* FINDER: */}
        <h2 className="font-semibold ">FIND YOUR AREA:</h2>
        <AreasFilter optionsList={optionsList} />
        {/* LIST OF AREA CARDS: */}
        <div className=" ">
          {/* <div className="hidden md:block"> */}
          <div className="">
            <SortButtons />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{cards}</div>
        </div>
      </div>
    </div>
  );
}
