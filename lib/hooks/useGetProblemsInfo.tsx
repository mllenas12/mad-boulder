import { IProblem, IProblemArea } from "../types";
import { orderSelectOptionsByGrade } from "../utils/utils";

export const useGetProblemsInfo = (
  areaName: string,
  params?: any | undefined
) => {
  const currentArea = decodeURIComponent(areaName);

  const problemsData: {
    items: IProblemArea[];
  } = require("@/lib/data/problemsData.json");

  const areaInfo = problemsData.items.find(
    (area: IProblemArea) => area.name == currentArea
  );

  const nameQuery =
    typeof params.name === "string" ? params.name.toLowerCase() : undefined;

  const selectedSectors =
    typeof params.sectors === "string"
      ? decodeURIComponent(params.sectors).split(",")
      : [];

  const selectedGrade =
    typeof params.grade === "string"
      ? decodeURIComponent(params.grade).split(",")
      : [];

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
  const orderDirection = params.order;
  if (params.sortby && params.order) {
    sortedByGrade.sort((a, b) =>
      orderDirection === "asc"
        ? a.grade_with_info.localeCompare(b.grade_with_info)
        : b.grade_with_info.localeCompare(a.grade_with_info)
    );
  }
  const sortedGradeOptionList = orderSelectOptionsByGrade(filteredProblems);
  return {
    problemsData,
    selectedSectors,
    filteredProblems,
    sortedByGrade,
    sortedGradeOptionList,
  };
};
