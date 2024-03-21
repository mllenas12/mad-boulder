import zoneData from "@/app/lib/data/zoneData.json";
import problemsData from "@/app/lib/data/problemsData.json";
import { IArea, IProblemArea, IProblemsData, IProblem } from "@/app/lib/types";
import { nanoid } from "nanoid";
import Search from "@/app/ui/Search";
import ex from "@/app/lib/data/ex.json";
import SortButtons from "../../SortButtons";
import { SelectSector } from "@/app/ui/Areas/SelectSector";
export async function generateStaticParams() {
  const areaNames = zoneData.items.map((area: IArea) =>
    decodeURIComponent(area.name)
  );
  return areaNames.map((name) => ({ areaName: name }));
}

export default function ExplorePage({
  params,
  searchParams,
}: {
  params: { areaName: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const currentArea = decodeURIComponent(params.areaName);

  const currentAreaData: IArea | undefined = zoneData.items.find(
    (zone: IArea) => zone.name == currentArea
  );
  const nameQuery =
    typeof searchParams.name === "string"
      ? searchParams.name.toLowerCase()
      : undefined;

  const selectedSectors =
    typeof searchParams.sectors === "string"
      ? decodeURIComponent(searchParams.sectors).split(",")
      : [];

  const areaInfo = problemsData.items.find(
    (area: IProblemArea) => area.name == currentArea
  );

  const filteredData = areaInfo.problem_list.filter(
    (problem: IProblem) =>
      selectedSectors.length == 0 || selectedSectors.includes(problem.sector)
  );

  const filteredProblems = filteredData.filter((problem: IProblem) =>
    nameQuery ? problem.name.toLowerCase().includes(nameQuery) : true
  );

  const problemsInfo = filteredProblems.map((problem: IProblem) => {
    const ytID = problem.url.split("=")[1];
    const imgUrl = ` https://img.youtube.com/vi/${ytID}/mqdefault.jpg`;

    return (
      <div
        key={nanoid()}
        className="text-xs sm:text-base flex gap-2 mb-4 bg-neutral-200 rounded"
      >
        <img
          src={imgUrl}
          alt={`Photo of problem ${problem.name} in ${problem.zone} boulder Area`}
          className="w-30 h-16 rounded-l"
        />
        <div className=" flex flex-col gap-1 my-auto">
          <p className=" font-semibold">{problem.name}</p>
          <p className="">{problem.sector}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="px-8">
      {/* Search: */}
      <div className="py-4">
        <div className=" py-2 grid grid-cols-2 gap-4 lg:px-24">
          <Search placeholder="Name" paramName="name" />
          <SelectSector currentAreaData={currentAreaData} />
        </div>
      </div>
      {/* List of videos */}
      <SortButtons />
      <div>{problemsInfo}</div>
    </div>
  );
}
