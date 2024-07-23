import { useState } from "react";
import Dropdown from "../components/Dropdown";
export interface DropdownParentProps {
  options: string[];
  multiple?: boolean;
}
const DropdownParent = ({ options, multiple = false }: DropdownParentProps) => {
  const [selected, setSelected] = useState([""]);
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      Selections: {selected.join(", ") || "-"}
      <div className="w-fit">
        <Dropdown
          options={options}
          multiple={multiple}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div>Stuff beneath the dropdown</div>
    </div>
  );
};

export default DropdownParent;
