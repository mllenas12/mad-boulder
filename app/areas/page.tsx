import { AreaCard } from "@/app/ui/Areas/AreaCard";
import Map from "@/app/ui/Map/Map";
import zoneData from "@/lib/data/zoneData.json";
import { AreasFilter } from "@/app/ui/Areas/AreasFilter";
import SortButtons from "@/app/ui/Buttons/SortButtons";
import { useGetCountryList } from "@/lib/hooks/useGetCountryList";
import HeadComponent from "../ui/HeadComponent";
import { useAreaData } from "@/lib/hooks/useAreaData";

export default function AreasPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { searchQuery, filteredAreas, sortedAreas } = useAreaData(searchParams);

  const cards = searchQuery
    ? sortedAreas
        .filter((card) => card.name.toLowerCase().includes(searchQuery))
        .map((card) => <AreaCard area={card} key={card.name} />)
    : sortedAreas.map((area) => <AreaCard area={area} key={area.name} />);

  const countryList = useGetCountryList();

  const optionsList = countryList.map((country) => {
    return { value: country.code, label: country.name };
  });

  return (
    <>
      <HeadComponent
        title="Areas"
        description="Explore climbing areas around the world."
      />
      <div className="flex flex-col md:gap-8">
        {/* MAP: */}
        <div className="h-[300px] md:h-[420px]">
          {filteredAreas && <Map data={filteredAreas} className="" />}
        </div>
        <div className="flex flex-col gap-6 md:w-4/5 mx-auto mb-10 p-6 bg-neutral-100 lg:p-8 rounded-lg">
          {/* FINDER: */}
          <h2 className="font-semibold ">FIND YOUR AREA:</h2>
          <AreasFilter optionsList={optionsList} />
          {/* LIST OF AREA CARDS: */}
          <div>
            <div>
              <SortButtons />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4">
              {cards}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
