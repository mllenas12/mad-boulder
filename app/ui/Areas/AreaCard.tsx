import { IArea } from "@/lib/types";
import Link from "next/link";

export const AreaCard = ({ area }: { area: IArea }) => {
  return (
    <Link href={`/areas/${area.name}/info`} className="rounded-lg">
      <div
        style={{ backgroundImage: `url(${area.thumbnail})` }}
        className="relative bg-no-repeat h-48 lg:h-52 bg-cover bg-center text-center flex flex-col text-white justify-center rounded-lg shadow-xl group"
      >
        <div className="absolute inset-0 bg-black opacity-30 rounded-lg transition-opacity group-hover:opacity-10 "></div>
        <div className="relative z-2 px-2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <h3 className="font-semibold ">{area.name}</h3>
          <h4>
            {area.video_count} video{area.video_count > 1 && "s"}
          </h4>
        </div>
      </div>
    </Link>
  );
};
