import { AreaCard } from "../ui/Areas/AreaCard";
import Map from "@/app/ui/Map/Map";
import zoneData from "@/app/lib/data/zoneData.json";
import { AreasFilter } from "../ui/Areas/AreasFilter";
import SortButtons from "./SortButtons";

export default function AreasPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = zoneData.items;
  const query =
    typeof searchParams.search === "string"
      ? searchParams.search.toLowerCase()
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

  return (
    <div className="flex flex-col gap-4 lg:gap-8">
      {/* MAP: */}
      <Map data={filteredData} />
      <h3 className="font-semibold text-xl px-4 lg:px-24">FIND YOUR ZONE:</h3>
      {/* FINDER: */}
      <AreasFilter />
      {/* LIST OF AREA CARDS: */}
      <div className="p-10  sm:px-24 2xl:px-96 bg-neutral-100">
        <SortButtons />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">{cards}</div>
      </div>
    </div>
  );
}
