import zoneData from "@/lib/data/zoneData.json";
import problemsData from "@/lib/data/problemsData.json";
import { IArea, IProblemArea, IProblem, TSector } from "@/lib/types";
import { nanoid } from "nanoid";
import Search from "@/app/ui/Inputs/Search";
import { SelectInput } from "@/app/ui/Inputs/SelectInput";
import SortB from "@/app/ui/Buttons/SortB";
import { orderSelectOptionsByGrade } from "@/lib/utils/utils";
import { ProblemCard } from "@/app/ui/Areas/problems/ProblemCard";
import HeadComponent from "@/app/ui/HeadComponent";

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

  const problemList = sortedByGrade.map((problem: IProblem) => {
    return <ProblemCard problem={problem} key={problem.name} />;
  });

  const defaultValue = selectedSectors.map((sector: string) => {
    return {
      label: sector,
      value: sector,
    };
  });

  return (
    <>
      <HeadComponent
        title={currentArea}
        description={currentAreaData?.overview[0]}
      />

      <div className="px-6 py-6 bg-neutral-100 rounded">
        {/* Search: */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold">Problems in this area:</h3>
          <div className=" py-2 grid grid-cols-2 md:flex gap-4 md:gap-2 ">
            <div className="col-span-2 md:w-1/3">
              <Search
                placeholder="Search by name"
                paramName="name"
                className="px-4 rounded border block w-full border-[#b3b3b3] placeholder:text-bneutral-300 h-[38px]"
              />
            </div>

            <div className="col-span-2 md:col-span-1 md:w-1/3">
              <SelectInput
                placeholder={"Select Sector"}
                optionsList={sectorOptionsList}
                filterBy={"sectors"}
                defaultValue={defaultValue}
                id={nanoid()}
              />
            </div>
            <div className="col-span-2 md:col-span-1 md:w-1/3">
              <SelectInput
                placeholder={"Select grade"}
                optionsList={sortedGradeOptionList}
                filterBy={"grade"}
                id={nanoid()}
                defaultValue={[]}
              />
            </div>
          </div>
        </div>
        {/* List of videos */}
        <div className="py-4">
          <nav className="font-semibold flex p-2 justify-end text-start">
            <div className="w-3/5 flex justify-end px-2">
              <SortB sortBy="Grade" />
            </div>
            <hr />
          </nav>
          <div className="flex flex-col gap-6 ">{problemList}</div>
        </div>
      </div>
    </>
  );
}
