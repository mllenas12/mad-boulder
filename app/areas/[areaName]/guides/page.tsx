import { CardFlip } from "@/app/ui/Areas/CardFlip";
import HeadComponent from "@/app/ui/HeadComponent";
import zoneData from "@/lib/data/zoneData.json";
import { IArea } from "@/lib/types";
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
        className="flex gap-2 border rounded p-2 bg-neutral-100 font-semibold"
      >
        <FeatherIcon icon="book" className="text-neutral-600" /> {link.name}
      </a>
    );
  });

  return (
    <>
      <HeadComponent
        title={currentArea}
        description={currentAreaData?.overview[0]}
      />
      <div className="md:px-8 bg-neutral-100 rounded flex flex-col gap-6 py-6">
        {/* Guides Images: */}
        <CardFlip data={currentAreaData} />
        {/* LINKS: */}
        <div className="bg-white p-8">
          <h4 className="font-semibold">Websites of interest:</h4>
          <div className="divider"></div>
          <div className="flex flex-col gap-4">{links}</div>
        </div>
      </div>
    </>
  );
}
