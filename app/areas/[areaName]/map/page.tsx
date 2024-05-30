import zoneData from "@/lib/data/zoneData.json";
import { IArea, TSector, IParking } from "@/lib/types";
import { nanoid } from "nanoid";
import Link from "next/link";
import Search from "@/app/ui/Inputs/Search";
import dynamic from "next/dynamic";
import GeneralSkeleton from "@/app/ui/Skeletons/GeneralSkeleton";
import HeadComponent from "@/app/ui/HeadComponent";
import { useGetCurrentAreaData } from "@/lib/hooks/useGetCurrentAreaData";

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
  const { currentAreaData, currentArea, parkingList, sectors } =
    useGetCurrentAreaData(params.areaName, searchParams);

  return (
    <>
      <HeadComponent
        title={currentArea}
        description={currentAreaData?.overview[0]}
      />
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
              {sectors?.length == 0 ? (
                <p className="p-2">- No sectors available -</p>
              ) : (
                sectors?.map((sector) => {
                  return (
                    <Link
                      href={`/areas/${currentArea}/problems?sectors=${decodeURIComponent(
                        sector.name
                      )}`}
                      key={sector.id}
                      className="flex flex-row p-2 text-center text-sm gap-2"
                    >
                      <p className="w-3/4 my-auto font-semibold text-start">
                        {sector.name}
                      </p>
                      <p className="w-1/4 my-auto text-center">
                        {sector.video_count}
                      </p>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
        {/* DESCRIPTION HOW TO ARRIVE */}
        <div className="p-6 bg-white md:bg-neutral-100 rounded">
          <h4 className="text-lg font-semibold">
            Access and Parking Information
          </h4>
          {currentAreaData?.parkings.length == 0 ? (
            <p className="p-2">- No parking available -</p>
          ) : (
            parkingList
          )}
        </div>
      </div>
    </>
  );
}
