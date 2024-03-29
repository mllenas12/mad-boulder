"use client";
import SortArrow from "@/app/ui/SortArrow";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";

export default function SortB({ sortBy }: { sortBy: string }) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [isSorted, setIsSorted] = useState(true);

  const [orderDirection, setOrderDirection] = useState(false);

  const handleSort = () => {
    let direction = "asc";
    direction = orderDirection ? "asc" : "desc";

    const params = new URLSearchParams(searchParams);
    params.set("sortby", sortBy);
    params.set("order", direction);
    setOrderDirection((prev) => !prev);
    setIsSorted((prev) => !prev);

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <button onClick={() => handleSort()} className="flex gap-2 mx-auto md:mx-0">
      <p>{sortBy}</p>
      <SortArrow isOrdered={isSorted} />
    </button>
  );
}