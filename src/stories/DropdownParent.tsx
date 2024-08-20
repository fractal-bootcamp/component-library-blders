import { useState } from "react";
import Dropdown from "../components/Dropdown";
export interface DropdownParentProps {
  options: string[];
  multiple: boolean;
  disabled: boolean;
}
const DropdownParent = ({
  options,
  multiple,
  disabled
}: DropdownParentProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      <div className="w-fit">
        <Dropdown
          options={options}
          multiple={multiple}
          disabled={disabled}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="relative">
        <div className="absolute -z-10 top-0 left-0 flex flex-col text-xs">
          Selections:
          {selected.map(item => (
            <span>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DropdownParent;
