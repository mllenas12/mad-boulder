import Map from "@/app/ui/Map/Map";
import zoneData from "@/app/lib/data/zoneData.json";
import { IArea } from "@/app/lib/types";

export async function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}
export default function MapAreaPage({
  params,
}: {
  params: { areaName: string };
}) {
  const currentArea = decodeURIComponent(params.areaName);
  const currentAreaData = zoneData.items.find(
    (zone: IArea) => zone.name == currentArea
  );

  return (
    <div>
      {/* AREA MAP */}
      <Map data={[currentAreaData]} parkings={[]} />
      {/* DESCRIPTION HOW TO ARRIVE */}
      <div className="p-8">
        <h5>Parkings:</h5>
        <p>Parking 1: ...</p>
        <p>Description...</p>
      </div>
      {/* SECTORS: */}
      <div className="p-8 bg-neutral-200">
        <div className="flex flex-col gap-4">
          {/* LIST OF SECTORS:  */}
          <h3 className="text-xl font-semibold">Sectors in this area:</h3>
          <input
            type="text"
            placeholder="Search"
            className=" border border-neutral-600  px-2 rounded "
          />
          <div className="bg-white p-2 rounded">
            <nav className="font-semibold flex p-2">
              <p className="w-3/4 text-start">Name</p>
              <p className="w-1/4 text-center">Problems</p>
            </nav>
            <hr />
            <div className="flex flex-row p-2 text-center text-sm gap-2">
              <p className="w-3/4 my-auto font-semibold text-start">
                Ladrones de Sierrasecha
              </p>
              <p className="w-1/4 my-auto text-center">8</p>
            </div>
            <div className="flex flex-row p-2 text-center text-sm  gap-2">
              <p className="w-3/4 my-auto font-semibold text-start">Unknown</p>
              <p className="w-1/4 my-auto text-center">4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
