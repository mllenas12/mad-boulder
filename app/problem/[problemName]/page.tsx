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
      <header className="py-4 bg-neutral-300 text-center font-semibold text-2xl">
        {currentProblemData?.name}
      </header>
      <div className=" flex flex-col justify-center ">
        <iframe
          width="100%"
          height="100%"
          src={url}
          allowFullScreen
          className="mx-auto py-4 h-[250px] md:h-[400px] lg:h-[450px]"
        ></iframe>
        <div className="p-8 bg-neutral-200">
          <p>Name: {currentProblemData?.name}</p>
          <p>Grade: {currentProblemData?.grade}</p>
          <p>
            Zone:{" "}
            <Link href={`/areas/${currentProblemData?.zone}/info`}>
              {currentProblemData?.zone}
            </Link>
          </p>
          <p>
            Sector:{" "}
            <Link
              href={`/areas/${currentProblemData?.zone}/explore?sectors=${currentProblemData?.sector}`}
            >
              {currentProblemData?.sector}
            </Link>
          </p>
          <p>Boulder: {currentProblemData?.boulder}</p>
          <p>Climber: {currentProblemData?.climber}</p>
        </div>
      </div>
      <div className="">
        {currentAreaData && (
          <Map data={[currentAreaData]} height={250} mdHeight={440} />
        )}
      </div>
    </>
  );
}
