import Map from "@/app/ui/Map/Map";
import problemsData from "@/app/lib/data/problemsData.json";
import zoneData from "@/app/lib/data/zoneData.json";
import { IProblem, IProblemArea, IArea } from "@/app/lib/types";
import Link from "next/link";
export async function generateStaticParams() {
  const problemsList = problemsData.items.flatMap((area: IProblemArea) =>
    area.problem_list.map((problem: IProblem) => problem.name)
  );

  return problemsList.map((problem: string) => ({
    problemName: problem,
  }));
}

export default function ProblemPage({
  params,
}: {
  params: { problemName: string };
}) {
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

  return (
    <>
      <header className="py-8 bg-neutral-200 text-center">
        <h2 className="font-semibold">{currentProblemData?.name}</h2>
        <h5>
          {currentProblemData?.grade_with_info}, {currentProblemData?.sector},{" "}
          {currentProblemData?.zone}
        </h5>
      </header>
      <div className="bg-neutral-100 rounded flex flex-col gap-4 px-8 py-6 lg:mx-64 md:mx-36 my-6">
        <iframe
          width="100%"
          height="100%"
          src={url}
          allowFullScreen
          className="mx-auto h-[250px] lg:h-[400px]"
        ></iframe>
        <ul className="p-6  list-disc">
          <li>
            <strong>Name:</strong> {currentProblemData?.name}
          </li>
          <li>
            <strong>Grade:</strong> {currentProblemData?.grade}
          </li>
          <li>
            <strong>Zone:</strong>{" "}
            <Link href={`/areas/${currentProblemData?.zone}/info`}>
              {currentProblemData?.zone}
            </Link>
          </li>
          <li>
            <strong>Sector:</strong>{" "}
            <Link
              href={`/areas/${currentProblemData?.zone}/explore?sectors=${currentProblemData?.sector}`}
            >
              {currentProblemData?.sector}
            </Link>
          </li>
          <li>
            <strong>Boulder:</strong> {currentProblemData?.boulder}
          </li>
          <li>
            <strong>Climber:</strong> {currentProblemData?.climber}
          </li>
        </ul>
        <div className="h-[200px]">
          {currentAreaData && <Map data={[currentAreaData]} />}
        </div>
      </div>
    </>
  );
}
