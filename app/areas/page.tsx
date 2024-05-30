import { AreaCard } from "@/app/ui/Areas/AreaCard";
import Map from "@/app/ui/Map/Map";
import { AreasFilter } from "@/app/ui/Areas/AreasFilter";
import SortButton from "@/app/ui/Buttons/SortButton";
import { useGetCountryList } from "@/lib/hooks/useGetCountryList";
import HeadComponent from "../ui/HeadComponent";
import { useFilterAreaData } from "@/lib/hooks/useFilterAreaData";
import { useGetSelectedCountryList } from "@/lib/hooks/useGetSelectedCountryList";

export default function AreasPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { sortedFilteredAreas, selectedCountries } =
    useFilterAreaData(searchParams);
  const { optionsCountryList } = useGetCountryList();
  const selectedCountriesOptions = useGetSelectedCountryList(selectedCountries);
  const cards = sortedFilteredAreas.map((area) => (
    <AreaCard area={area} key={area.name} />
  ));

  return (
    <>
      <HeadComponent
        title="Areas"
        description="Explore climbing areas around the world."
      />
      <div className="flex flex-col md:gap-8">
        {/* MAP: */}
        <div className="h-[300px] md:h-[420px]">
          {sortedFilteredAreas && <Map data={sortedFilteredAreas} />}
        </div>
        <div className="flex flex-col gap-6 md:w-4/5 mx-auto mb-10 p-6 bg-neutral-100 lg:p-8 rounded-lg">
          {/* FINDER: */}
          <h2 className="font-semibold ">FIND YOUR AREA:</h2>
          <AreasFilter
            optionsList={optionsCountryList}
            defaultInputValue={selectedCountriesOptions}
          />
          {/* LIST OF AREA CARDS: */}
          <div>
            <div>
              {/* <SortButtons /> */}
              <div className="grid grid-cols-2 md:flex md:justify-end gap-4 mb-4 font-semibold">
                <SortButton sortBy="videoCount" label="Number of Videos" />
              </div>
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
