"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { PiMagnifyingGlass } from "react-icons/pi";
export default function Search({
  placeholder,
  paramName,
  className,
}: {
  placeholder: string;
  paramName: string;
  className: string;
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
    <label className="relative block">
      <span className="absolute inset-y-0 right-0 flex items-center pr-2">
        <PiMagnifyingGlass />
      </span>
      <input
        placeholder={placeholder}
        type="text"
        name={paramName}
        onChange={(event) => handleSearch(event.target.value)}
        defaultValue={searchParams.get(paramName)?.toString()}
        className={className}
      />
    </label>

    // <input
    //   type="text"
    //   placeholder={placeholder}
    //   name={paramName}
    //   onChange={(event) => handleSearch(event.target.value)}
    //   defaultValue={searchParams.get(paramName)?.toString()}
    //   className={className}
    // />
  );
}
