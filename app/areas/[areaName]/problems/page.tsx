import zoneData from "@/lib/data/zoneData.json";
import { IArea, IProblem } from "@/lib/types";
import { nanoid } from "nanoid";
import Search from "@/app/ui/Inputs/Search";
import { SelectInput } from "@/app/ui/Inputs/SelectInput";
import SortButton from "@/app/ui/Buttons/SortButton";
import { ProblemCard } from "@/app/ui/Areas/problems/ProblemCard";
import HeadComponent from "@/app/ui/HeadComponent";
import { useGetCurrentAreaData } from "@/lib/hooks/useGetCurrentAreaData";
import { useGetProblemsInfo } from "@/lib/hooks/useGetProblemsInfo";

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
  const { currentArea, currentAreaData, sectors } = useGetCurrentAreaData(
    params.areaName,
    searchParams
  );
  const { selectedSectors, sortedGradeOptionList, sortedByGrade } =
    useGetProblemsInfo(params.areaName, searchParams);

  const sectorsOptionsList = sectors?.map((sector) => {
    return { value: sector.name, label: sector.name };
  });

  const problemList = sortedByGrade.map((problem: IProblem) => {
    return <ProblemCard problem={problem} key={problem.name} />;
  });

  const sectorsDefaultValue = selectedSectors.map((sector: string) => {
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
                optionsList={sectorsOptionsList}
                filterBy={"sectors"}
                defaultValue={sectorsDefaultValue}
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
              <SortButton sortBy="Grade" label="Grade" />
            </div>
            <hr />
          </nav>
          <div className="flex flex-col gap-6 ">{problemList}</div>
        </div>
      </div>
    </>
  );
}
