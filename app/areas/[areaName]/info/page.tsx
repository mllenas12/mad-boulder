import { IArea } from "@/app/lib/types";
import zoneData from "@/app/lib/data/zoneData.json";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/app/lib/utils/utils";
import { PiMountains } from "react-icons/pi";

export async function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}

export default function InfoPage({ params }: { params: { areaName: string } }) {
  const currentArea = decodeURIComponent(params.areaName);
  const currentAreaData = zoneData.items.find(
    (zone: IArea) => zone.name == currentArea
  );

  const imageUrl = currentAreaData?.thumbnail || "/images/example.jpeg";

  return (
    <div className="flex flex-col rounded">
      {/* PHOTO + CTA EXPLORE: */}
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="relative bg-no-repeat h-72 md:h-80 bg-cover bg-center text-center  text-white  shadow md:rounded-t"
      >
        {/* <div className="absolute inset-0 bg-black opacity-10 md:rounded-t"></div> */}
        <Link
          href={`/areas/${currentAreaData?.name}/problems`}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-amber-400 text-neutral-600 font-semibold rounded px-4 py-2"
        >
          EXPLORE AREA
        </Link>
      </div>

      {/* DESCRIPTION: */}
      <div className="flex flex-col px-6 gap-4 md:rounded-b bg-neutral-100 py-6">
        <p className="text-center text-neutral-600 md:px-4">
          {currentAreaData?.overview[0]}
        </p>
        <div className=" flex justify-center gap-6 rounded-b ">
          <p className="w-28 h-28 rounded-full border text-white bg-amber-500 border-amber-500 flex flex-col items-center justify-center ">
            <strong className="">Rock type:</strong>
            {"  "}
            {capitalizeFirstLetter(currentAreaData?.rock_type)}
            stone
          </p>
          <p className="w-28 h-28 rounded-full border bg-white text-amber-500 border-amber-500 flex flex-col items-center justify-center">
            <strong className="">Altitude:</strong>
            {"  "}
            {currentAreaData?.altitude}
          </p>
        </div>
      </div>

      {/* SUMMARY: */}
      <div className="bg-white p-8 flex gap-4 justify-center">
        <Link
          href={`/areas/${currentAreaData?.name}/map`}
          className="rounded-lg "
        >
          <div
            style={{
              backgroundImage: "url(/images/backgrounds/bg-evans.jpeg)",
            }}
            className="relative bg-no-repeat h-40 w-40 bg-cover bg-center text-center flex flex-col text-white justify-center rounded-lg shadow-xl"
          >
            <div className="absolute inset-0 bg-black opacity-0 rounded-lg  "></div>
            <div className="relative z-10 px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <h3 className="font-semibold ">
                {currentAreaData?.sectors.length} Sector
                {currentAreaData?.sectors.length == 1 ? "" : "s"}
              </h3>
            </div>
          </div>
        </Link>
        <Link
          href={`/areas/${currentAreaData?.name}/problems`}
          className="rounded-lg "
        >
          <div
            style={{
              backgroundImage:
                "url(/images/backgrounds/bouldering-background.webp)",
            }}
            className="relative bg-no-repeat h-40 w-40 bg-cover bg-center text-center flex flex-col text-white justify-center rounded-lg shadow-xl"
          >
            <div className="absolute inset-0 bg-black opacity-0 rounded-lg  "></div>
            <div className="relative z-10 px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              <h3 className="font-semibold ">
                {currentAreaData?.video_count} video
                {currentAreaData?.video_count == 1 ? "" : "s"}
              </h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
