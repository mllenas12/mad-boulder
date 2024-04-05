import { IArea } from "@/app/lib/types";
import Link from "next/link";
export const AreaCard = ({ area }: { area: IArea }) => {
  return (
    <Link href={`/areas/${area.name}/info`} className="h-52">
      <img
        src={area.thumbnail}
        alt={`Card image of ${area.name}`}
        className="rounded-t h-2/3 w-full object-cover shadow-xl"
      />
      <div className="text-center h-1/3 flex flex-col  justify-center bg-white rounded-b shadow-xl">
        <h5 className="font-semibold">{area.name}</h5>
        <p className="text-xs">
          {area.video_count} video{area.video_count > 1 && "s"}
        </p>
      </div>
    </Link>
  );
};
