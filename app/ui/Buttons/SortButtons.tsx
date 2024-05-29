"use client";
import SortArrow from "@/app/ui/Buttons/SortArrow";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function SortButtons() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isSortedByVideos, setIsSortedByVideos] = useState(true);
  const [isSortedAlph, setIsSortedAlph] = useState(false);

  const [orderBy, setOrderBy] = useState("");
  const [orderDirection, setOrderDirection] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    const orderByParam = params.get("sortby") || "";
    const orderDirectionParam = params.get("order") || "";

    setOrderBy(orderByParam);
    setOrderDirection(orderDirectionParam);
  }, [searchParams]);

  const handleSort = (
    orderBy: string,
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    changeArrow(orderBy);
    let direction = "asc";

    if (orderBy === "name") {
      direction = orderDirection === "asc" ? "desc" : "asc";
    } else if (orderBy === "videoCount") {
      direction = orderDirection === "asc" ? "desc" : "asc";
    }
    const params = new URLSearchParams(searchParams);
    params.set("sortby", orderBy);
    params.set("order", direction);

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const changeArrow = (orderBy: string) => {
    if (orderBy == "name") {
      setIsSortedAlph((prev) => !prev);
    }
    if (orderBy == "videoCount") {
      setIsSortedByVideos((prev) => !prev);
    }
  };

  return (
    <div className="grid grid-cols-2 md:flex md:justify-end gap-4 mb-4">
      <button
        onClick={(event) => handleSort("videoCount", event)}
        className="font-semibold text-xs lg:flex gap-1 p-2 my-auto justify-center hidden "
        type="button"
      >
        Number of Videos
        <SortArrow isOrdered={isSortedByVideos} />
      </button>
    </div>
  );
}
