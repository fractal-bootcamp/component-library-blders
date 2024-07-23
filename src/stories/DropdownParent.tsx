import { useState } from "react";
import Dropdown from "../components/Dropdown";
export interface DropdownParentProps {
  options: string[];
  multiple?: boolean;
}
const DropdownParent = ({ options, multiple = false }: DropdownParentProps) => {
  const [selected, setSelected] = useState([""]);
  return (
    <div>
      <Dropdown
        options={options}
        multiple={multiple}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
};

export default DropdownParent;
