"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({
  placeholder,
  paramName,
}: {
  placeholder: string;
  paramName: string;
}) {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set(paramName, term);
    } else {
      params.delete(paramName);
    }

    replace(`${pathname}?${params.toString()}`, { scroll: false });
  }, 300);
  return (
    <input
      type="text"
      placeholder={placeholder}
      name={paramName}
      onChange={(event) => handleSearch(event.target.value)}
      defaultValue={searchParams.get(paramName)?.toString()}
      className="input input-bordered w-full h-[36px] "
    />
  );
}
