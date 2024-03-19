"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <input
      type="text"
      placeholder="Zone"
      name="search"
      onChange={(event) => handleSearch(event.target.value)}
      defaultValue={searchParams.get("query")?.toString()}
      className="input input-bordered w-full h-[36px] "
    />
  );
}
