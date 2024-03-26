import { CardFlip } from "@/app/ui/Areas/CardFlip";
import zoneData from "@/app/lib/data/zoneData.json";
import { IArea } from "@/app/lib/types";
import FeatherIcon from "feather-icons-react";

export async function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}

export default function GuidesPage({
  params,
}: {
  params: { areaName: string };
}) {
  const currentArea = decodeURIComponent(params.areaName);
  const currentAreaData = zoneData.items.find(
    (zone: IArea) => zone.name == currentArea
  );

  const links = currentAreaData?.links.map((link) => {
    return (
      <a
        key={link.link}
        href={link.link}
        target="_blank"
        className="flex gap-2 border rounded p-2 mx-8 bg-neutral-200 font-semibold"
      >
        <FeatherIcon icon="book" className="text-neutral-600" /> {link.name}
      </a>
    );
  });

  return (
    <div className="p-8 flex flex-col gap-8">
      {/* Guides Images: */}
      <CardFlip data={currentAreaData} />
      {/* LINKS: */}
      <div className="flex flex-col gap-4">{links}</div>
    </div>
  );
}
