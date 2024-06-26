import problemsData from "@/lib/data/problemsData.json";
import zoneData from "@/lib/data/zoneData.json";
import { IProblem, IProblemArea } from "@/lib/types";
import Link from "next/link";
import dynamic from "next/dynamic";
import GeneralSkeleton from "@/app/ui/Skeletons/GeneralSkeleton";
import HeadComponent from "@/app/ui/HeadComponent";
import { useGetProblemData } from "@/lib/hooks/useGetProblemData";

export async function generateStaticParams() {
  const problemsData: {
    items: IProblemArea[];
  } = require("@/lib/data/problemsData.json");

  const problemsList = problemsData.items.flatMap((area: IProblemArea) =>
    area.problem_list.map((problem: IProblem) => problem.name)
  );
  return problemsList.map((problem: string) => ({
    problemName: problem,
  }));
}

const DynamicMap = dynamic(() => import("@/app/ui/Map/Map"), {
  ssr: false,
  loading: () => <GeneralSkeleton />,
});

const DynamicVideoProblem = dynamic(
  () => import("@/app/ui/Profile/VideoProblem"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[250px] lg:h-[400px]">
        <GeneralSkeleton />
      </div>
    ),
  }
);

export default function ProblemPage({
  params,
}: {
  params: { problemName: string };
}) {
  const { currentProblemData, url, currentAreaData } =
    useGetProblemData(params);

  return (
    <>
      <HeadComponent
        title={currentProblemData?.name}
        description={`Info of ${currentProblemData?.name} problem`}
      />
      <header className="py-8 bg-neutral-200 text-center">
        <h2 className="font-semibold pb-2">{currentProblemData?.name}</h2>
        <h5>
          {currentProblemData?.grade_with_info}, {currentProblemData?.sector},{" "}
          {currentProblemData?.zone}
        </h5>
      </header>
      <div className="bg-neutral-100 rounded flex flex-col gap-8 md:p-8 md:w-3/4 lg:w-3/5 md:mx-auto md:my-6">
        <DynamicVideoProblem url={url} />
        <ul className="px-12  list-disc">
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
              href={`/areas/${currentProblemData?.zone}/problems?sectors=${currentProblemData?.sector}`}
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
          {currentAreaData && (
            <DynamicMap className="rounded" data={[currentAreaData]} />
          )}
        </div>
      </div>
    </>
  );
}
