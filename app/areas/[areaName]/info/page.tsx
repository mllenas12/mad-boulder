import { IArea } from "@/app/lib/types";
import zoneData from "@/app/lib/data/zoneData.json";
import Link from "next/link";
import { capitalizeFirstLetter } from "@/app/lib/utils/utils";
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
    <div className="flex flex-col gap-6 px-8 py-6 bg-neutral-100 rounded">
      {/* PHOTO + CTA EXPLORE: */}
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`relative  bg-cover bg-center py-32 md:py-48 flex justify-center`}
      >
        <Link
          href={`/areas/${currentAreaData?.name}/problems`}
          className=" absolute bottom-8 bg-yellow-400 text-neutral-700 font-semibold rounded px-4 py-2 "
        >
          EXPLORE AREA
        </Link>
      </div>
      {/* DESCRIPTION: */}
      <p className="text-xs text-center">{currentAreaData?.overview[0]}</p>
      <div className="flex border rounded-xl mx-auto p-2 px-4 w-full md:w-2/3 lg:w-1/2 justify-between md:justify-center md:gap-6 bg-white">
        <p className="text-xs">
          <strong className="text-xs">Rock type:</strong>
          {"  "}
          {capitalizeFirstLetter(currentAreaData?.rock_type)}
          stone
        </p>
        <p className="text-xs">
          <strong className="text-xs">Altitude:</strong>
          {"  "}
          {currentAreaData?.altitude}m
        </p>
      </div>
      {/* SUMMARY: */}
      <div className="bg-neutral-300 p-8 flex gap-4 justify-center">
        <Link
          href={`/areas/${currentAreaData?.name}/map`}
          className="h-40 w-40 rounded bg-[url('/images/stats-sectors.webp')] bg-cover bg-center flex justify-center items-center"
        >
          <p className="text-2xl text-white font-bold text-center">
            {currentAreaData?.sectors.length} Sector
            {currentAreaData?.sectors.length == 1 ? "" : "s"}
          </p>
        </Link>
        <Link
          href={`/areas/${currentAreaData?.name}/problems`}
          className="h-40 w-40 rounded bg-[url('/images/stats-videos.webp')] bg-cover bg-center flex justify-center items-center"
        >
          <p className="text-2xl text-white font-bold text-center">
            {currentAreaData?.video_count} video
            {currentAreaData?.video_count == 1 ? "" : "s"}
          </p>
        </Link>
      </div>
    </div>
  );
}
