import Map from "@/app/ui/Map/Map";
import zoneData from "@/app/lib/data/zoneData.json";
import { IArea, TSector } from "@/app/lib/types";
import { nanoid } from "nanoid";
import Link from "next/link";
import Search from "@/app/ui/Search";

export async function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}
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
    typeof searchParams.search === "string"
      ? searchParams.search.toLowerCase()
      : undefined;

  let filteredData = query
    ? currentAreaData?.sectors.filter((sector: TSector) =>
        sector.name.toLowerCase().includes(query)
      )
    : currentAreaData?.sectors;

  const sectors = filteredData?.map((sector: TSector) => {
    return (
      <Link
        href={`/areas/${currentArea}/sector/${decodeURIComponent(sector.name)}`}
        key={nanoid()}
        className="flex flex-row p-2 text-center text-sm gap-2"
      >
        <p className="w-3/4 my-auto font-semibold text-start">{sector.name}</p>
        <p className="w-1/4 my-auto text-center">{sector.video_count}</p>
      </Link>
    );
  });

  return (
    <div className="flex flex-col gap-4">
      {/* AREA MAP */}
      <Map data={[currentAreaData]} />

      {/* SECTORS: */}
      <div className="p-8 bg-neutral-200">
        <div className="flex flex-col gap-4">
          {/* LIST OF SECTORS:  */}
          <h3 className="text-xl font-semibold">Sectors in this area:</h3>
          <Search placeholder="Sector" />
          {/* <input
            type="text"
            placeholder="Search"
            className=" border border-neutral-600  px-2 rounded "
          /> */}
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
      <div className="p-8">
        <h5>Parkings:</h5>
        <p>Parking 1: ...</p>
        <p>Description...</p>
      </div>
    </div>
  );
}
