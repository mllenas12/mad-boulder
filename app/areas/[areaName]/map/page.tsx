import zoneData from "@/app/lib/data/zoneData.json";
import { IArea, TSector, IParking } from "@/app/lib/types";
import { nanoid } from "nanoid";
import Link from "next/link";
import Search from "@/app/ui/Search";
import dynamic from "next/dynamic";
import GeneralSkeleton from "@/app/ui/Skeletons/GeneralSkeleton";

export async function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}

const DynamicMap = dynamic(() => import("@/app/ui/Map/Map"), {
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
      <p key={nanoid()} className="px-4">
        - Parking Coordinates:{" "}
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
    <div className="flex flex-col gap-4">
      {/* AREA MAP */}
      <div className="h-[400px]">
        {currentAreaData && <DynamicMap data={[currentAreaData]} />}
      </div>
      {/* SECTORS: */}
      <div className="p-6 bg-neutral-200 rounded">
        <div className="flex flex-col gap-4">
          {/* LIST OF SECTORS:  */}
          <h3 className="text-xl font-semibold">Sectors in this area:</h3>
          <Search
            placeholder="Sector"
            paramName="sector"
            className="input input-bordered w-full h-[36px]"
          />
          <div className="bg-white p-2 rounded">
            <nav className="font-semibold flex p-2">
              <p className="w-3/4 text-start">Name</p>
              <p className="w-1/4 text-center">Problems</p>
            </nav>
            <hr />
            {sectors}
          </div>
        </div>
      </div>
      {/* DESCRIPTION HOW TO ARRIVE */}
      <div className="p-6 bg-neutral-100 rounded">
        <h3 className="text-lg font-semibold">
          Access and Parking Information
        </h3>
        <h5 className="font-semibold px-2">Parkings:</h5>
        {parkingList}
      </div>
    </div>
  );
}
