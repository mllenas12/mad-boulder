import { ArrowProps } from "@/lib/types";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

const SortArrow = ({ isOrdered }: ArrowProps) => {
  return (
    <div className={`w-2 ${isOrdered ? "my-auto" : "my-auto mt-1"}`}>
      {isOrdered ? <GoChevronDown /> : <GoChevronUp />}
    </div>
  );
};
export default SortArrow;
