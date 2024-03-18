"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const AreasFilter = () => {
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
    <div className="grid grid-cols-2 gap-4 px-4 lg:px-24">
      <input
        type="text"
        placeholder="Country"
        className="input input-bordered w-full "
      />
      <input
        type="text"
        placeholder="Filters"
        className="input input-bordered w-full "
      />

      <input
        type="text"
        placeholder="Zone"
        name="search"
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
        className="input input-bordered w-full "
      />

      <input
        type="text"
        placeholder="Order"
        className="input input-bordered w-full "
      />
    </div>
  );
};
