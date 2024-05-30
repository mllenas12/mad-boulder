import { CardFlip } from "@/app/ui/Areas/CardFlip";
import HeadComponent from "@/app/ui/HeadComponent";
import zoneData from "@/lib/data/zoneData.json";
import { useGetCurrentAreaData } from "@/lib/hooks/useGetCurrentAreaData";
import { IArea } from "@/lib/types";

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
  const { currentArea, currentAreaData, links } = useGetCurrentAreaData(
    decodeURIComponent(params.areaName)
  );

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
