import { IArea } from "@/app/lib/types";
import Link from "next/link";
export const AreaCard = ({ area }: { area: IArea }) => {
  return (
    <Link href={`/areas/${area.name}`}>
      <img
        src={area.thumbnail}
        alt={`Card image of ${area.name}`}
        className="rounded-t h-32 lg:h-40 w-full object-cover shadow-xl"
      />
      <div className="py-2 text-center bg-white rounded-b shadow-xl">
        <h5 className="font-semibold">{area.name}</h5>
        <p className="text-xs">{area.video_count} video</p>
      </div>
    </Link>
  );
};
