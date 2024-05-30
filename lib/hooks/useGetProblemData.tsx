import { IProblem, IProblemArea } from "../types";
import zoneData from "@/lib/data/zoneData.json";
export const useGetProblemData = (params: { problemName: string }) => {
  const problemsData: {
    items: IProblemArea[];
  } = require("@/lib/data/problemsData.json");

  const currentProblem = decodeURIComponent(params.problemName);
  const allProblems = problemsData.items.flatMap(
    (area: IProblemArea) => area.problem_list
  );

  const currentProblemData = allProblems.find(
    (problem: IProblem) => problem.name == currentProblem
  );

  const url = currentProblemData?.url.replace("watch?v=", "embed/");

  const currentAreaData = zoneData?.items.find(
    (zone) => zone?.name == currentProblemData?.zone
  );
  return { currentProblemData, url, currentAreaData };
};
