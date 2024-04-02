import { IProblem } from "@/app/lib/types";
import Link from "next/link";
import { nanoid } from "nanoid";
export const ProblemList = ({ problem }: { problem: IProblem }) => {
  const ytID = problem.url.split("=")[1];
  const imgUrl = ` https://img.youtube.com/vi/${ytID}/mqdefault.jpg`;

  return (
    <Link
      href={`/problem/${problem.name}`}
      key={nanoid()}
      className="flex justify-between gap-2 bg-white rounded md:h-36"
    >
      <div className="w-2/5 ">
        <img
          src={imgUrl}
          alt={`Photo of problem ${problem.name} in ${problem.zone} boulder Area`}
          className="h-full w-full rounded-l"
        />
      </div>
      <div className="flex flex-col gap-1 p-2 w-3/5 my-auto md:my-4">
        <h4 className="font-semibold">{problem.name}</h4>
        <p className="">Sector: {problem.sector}</p>
        <p className="w-1/2">Grade: {problem.grade}</p>
      </div>
    </Link>
  );
};
