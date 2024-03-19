import { ArrowProps } from "../lib/types";
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
const SortArrow = ({ isOrdered }: ArrowProps) => {
  return (
    <div className={`w-4 ${isOrdered ? "my-auto" : "my-auto mt-1"}`}>
      {isOrdered ? <VscTriangleUp /> : <VscTriangleDown />}
    </div>
  );
};
export default SortArrow;
