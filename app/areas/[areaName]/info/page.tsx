import { IArea } from "@/app/lib/types";
import zoneData from "@/app/lib/data/zoneData.json";
import Link from "next/link";

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
    <div>
      {/* PHOTO + CTA EXPLORE: */}
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`relative  bg-cover bg-center py-32 md:py-48 flex justify-center`}
      >
        <button className=" absolute bottom-8 bg-yellow-400 text-neutral-700 font-semibold rounded px-4 py-2 ">
          EXPLORE AREA
        </button>
      </div>
      <div>
        {/* DESCRIPTION: */}
        <p className="p-8 text-xs text-center">
          {currentAreaData?.overview[0]}
        </p>
        {/* SUMMARY: */}
        <div className="bg-neutral-400 p-8 flex gap-4 justify-center">
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
            href={`/areas/${currentAreaData?.name}/explore`}
            className="h-40 w-40 rounded bg-[url('/images/stats-videos.webp')] bg-cover bg-center flex justify-center items-center"
          >
            <p className="text-2xl text-white font-bold text-center">
              {currentAreaData?.video_count} video
              {currentAreaData?.video_count == 1 ? "" : "s"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
