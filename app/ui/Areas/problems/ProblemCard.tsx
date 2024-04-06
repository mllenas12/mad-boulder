import { IProblem } from "@/app/lib/types";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { GiCarabiner } from "react-icons/gi";
import { PiMapPin, PiStar } from "react-icons/pi";

import { nanoid } from "nanoid";
export const ProblemCard = ({ problem }: { problem: IProblem }) => {
  const ytID = problem.url.split("=")[1];
  const imgUrl = ` https://img.youtube.com/vi/${ytID}/mqdefault.jpg`;

  return (
    //OPCIó 1:
    <Link
      href={`/problem/${problem.name}`}
      key={nanoid()}
      className="flex justify-between md:h-36 rounded-2xl bg-white"
    >
      <div className="w-4/12">
        <img
          src={imgUrl}
          alt={`Photo of problem ${problem.name} in ${problem.zone} boulder Area`}
          className="h-full w-full rounded-l-2xl"
        />
      </div>

      <div className="flex flex-col gap-1 ps-3 md:ps-8 my-auto py-2 md:py-0 w-7/12 rounded-r-2xl">
        <h5 className="font-semibold md:text-xl">{problem.name}</h5>
        <div className="md:px-2 flex flex-col gap-1 ">
          <p className="flex gap-1 md:text-lg">
            <PiMapPin className="my-auto" /> Sector - {problem.sector}
          </p>

          <p className="flex gap-1 md:text-lg">
            <PiStar className="my-auto" /> Grade - {problem.grade}
          </p>
        </div>
      </div>
      <FaChevronRight className="my-auto mr-2 w-1/12" />
    </Link>
  );
};
