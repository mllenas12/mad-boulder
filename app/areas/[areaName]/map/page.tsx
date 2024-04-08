import zoneData from "@/lib/data/zoneData.json";
import { IArea, TSector, IParking } from "@/lib/types";
import { nanoid } from "nanoid";
import Link from "next/link";
import Search from "@/ui/Search";
import dynamic from "next/dynamic";
import GeneralSkeleton from "@/ui/Skeletons/GeneralSkeleton";
import { PiMapPin } from "react-icons/pi";
export async function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}

const DynamicMap = dynamic(() => import("@/ui/Map/Map"), {
  ssr: false,
  loading: () => <GeneralSkeleton />,
});

export default function MapAreaPage({
  params,
  searchParams,
}: {
  params: { areaName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentArea = decodeURIComponent(params.areaName);
  const currentAreaData: any = zoneData.items.find(
    (zone: IArea) => zone.name == currentArea
  );

  const query =
    typeof searchParams.sector === "string"
      ? searchParams.sector.toLowerCase()
      : undefined;

  let filteredData = query
    ? currentAreaData?.sectors.filter((sector: TSector) =>
        sector.name.toLowerCase().includes(query)
      )
    : currentAreaData?.sectors;

  const sectors = filteredData?.map((sector: TSector) => {
    return (
      <Link
        href={`/areas/${currentArea}/problems?sectors=${decodeURIComponent(
          sector.name
        )}`}
        key={sector.id}
        className="flex flex-row p-2 text-center text-sm gap-2"
      >
        <p className="w-3/4 my-auto font-semibold text-start">{sector.name}</p>
        <p className="w-1/4 my-auto text-center">{sector.video_count}</p>
      </Link>
    );
  });
  const parkingList = currentAreaData.parkings.map((parking: IParking) => {
    return (
      <p key={nanoid()} className="px-4 flex gap-1">
        <PiMapPin className="my-auto" /> Parking:
        <a
          href={`https://www.google.com/maps/place/${parking.parking_latitude},${parking.parking_longitude}`}
          target="_blank"
          className="text-blue-400 underline"
        >
          Google Maps Location
        </a>
      </p>
    );
  });

  return (
    <div className="flex flex-col md:gap-4">
      {/* AREA MAP */}
      <div className="h-72 md:h-80 lg:h-96">
        {currentAreaData && (
          <DynamicMap className="rounded" data={[currentAreaData]} />
        )}
      </div>
      {/* SECTORS: */}
      <div className="p-6 bg-neutral-100 rounded">
        <div className="flex flex-col gap-4">
          {/* LIST OF SECTORS:  */}
          <h3 className="text-xl font-semibold">Sectors in this area:</h3>
          <Search
            placeholder="Sector"
            paramName="sector"
            className="px-4 rounded border block w-full border-[#CCCCCC] placeholder:text-bneutral-300 h-[38px]"
          />
          <div className="bg-white p-2 rounded">
            <nav className="font-semibold flex p-2">
              <p className="w-3/4 text-start">Name</p>
              <p className="w-1/4 text-center">Problems</p>
            </nav>
            <hr />
            {currentAreaData.sectors.length == 0 ? (
              <p className="p-2">- No sectors available -</p>
            ) : (
              sectors
            )}
          </div>
        </div>
      </div>
      {/* DESCRIPTION HOW TO ARRIVE */}
      <div className="p-6 bg-white md:bg-neutral-100 rounded">
        <h3 className="text-lg font-semibold">
          Access and Parking Information
        </h3>
        {currentAreaData.parkings.length == 0 ? (
          <p className="p-2">- No parking available -</p>
        ) : (
          parkingList
        )}
      </div>
    </div>
  );
}
