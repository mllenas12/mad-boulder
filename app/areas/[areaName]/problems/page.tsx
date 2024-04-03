import zoneData from "@/app/lib/data/zoneData.json";
import problemsData from "@/app/lib/data/problemsData.json";
import { IArea, IProblemArea, IProblem, TSector } from "@/app/lib/types";
import { nanoid } from "nanoid";
import Search from "@/app/ui/Search";
import { SelectInput } from "@/app/ui/SelectInput";
import SortB from "@/app/ui/SortB";
import Link from "next/link";
import { orderSelectOptionsByGrade } from "@/app/lib/utils/utils";
import { ProblemList } from "@/app/ui/Areas/problems/ProblemList";
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

  const selectedGrade =
    typeof searchParams.grade === "string"
      ? decodeURIComponent(searchParams.grade).split(",")
      : [];

  const areaInfo = problemsData.items.find(
    (area: IProblemArea) => area.name == currentArea
  );

  const filteredProblems = areaInfo
    ? areaInfo.problem_list.filter((problem: IProblem) => {
        const isNameMatch = nameQuery
          ? problem.name.toLowerCase().includes(nameQuery)
          : true;
        const isSectorMatch =
          selectedSectors.length === 0 ||
          selectedSectors.includes(problem.sector);
        const isGradeMatch =
          selectedGrade.length === 0 || selectedGrade.includes(problem.grade);
        return isNameMatch && isSectorMatch && isGradeMatch;
      })
    : [];

  let sortedByGrade = [...filteredProblems];
  const orderDirection = searchParams.order;
  if (searchParams.sortby && searchParams.order) {
    sortedByGrade.sort((a, b) =>
      orderDirection === "asc"
        ? a.grade_with_info.localeCompare(b.grade_with_info)
        : b.grade_with_info.localeCompare(a.grade_with_info)
    );
  }

  const sectorsList = currentAreaData?.sectors.map((sector: TSector) => {
    return { name: sector.name };
  });

  const sectorOptionsList = sectorsList?.map((sector) => {
    return { value: sector.name, label: sector.name };
  });

  const sortedGradeOptionList = orderSelectOptionsByGrade(filteredProblems);

  const problemsInfo = sortedByGrade.map((problem: IProblem) => {
    return <ProblemList problem={problem} key={problem.name} />;
  });

  return (
    <div className="px-8 pb-12 bg-neutral-200 rounded">
      {/* Search: */}
      <div className="flex flex-col gap-4 py-8">
        <h3 className="text-xl font-semibold">Problems in this area:</h3>
        <div className=" py-2 grid grid-cols-2 gap-4 lg:px-24">
          <div className="col-span-2">
            <Search placeholder="Name" paramName="name" />
          </div>
          <div className="col-span-2 md:col-span-1">
            <SelectInput
              placeholder={"Select Sector"}
              optionsList={sectorOptionsList}
              filterBy={"sectors"}
              id={nanoid()}
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <SelectInput
              placeholder={"Select grade"}
              optionsList={sortedGradeOptionList}
              filterBy={"grade"}
              id={nanoid()}
            />
          </div>
        </div>
      </div>
      {/* List of videos */}
      <div className="">
        <nav className="font-semibold flex p-2 justify-between text-start">
          <p className="w-2/5">Problems:</p>
          <div className="w-3/5 flex justify-end px-2">
            <SortB sortBy="Grade" />
          </div>
          <hr />
        </nav>
        <div className="flex flex-col gap-4">{problemsInfo}</div>
      </div>
    </div>
  );
}
