import { useState } from "react";
import DropdownItem from "./DropdownItem";
import { ChevronDown, ChevronUp } from "lucide-react";
interface DropdownProps {
  options: string[];
  multiple: boolean;
  selected: string[];
  setSelected: (selected: string[]) => void;
}
const Dropdown = ({
  options, //list of selectable options
  multiple, //flag for multi/single selection
  selected, //array of current selection passed in from parent state
  setSelected //selected setter function to update parent state
}: DropdownProps) => {
  //TODO: implement search functionality
  // const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleSelect = (value: string) => {
    //if multi-select, add/remove from selection array accordingly
    if (multiple) {
      if (selected.includes(value)) {
        setSelected(selected.filter(item => item !== value));
      } else {
        setSelected([...selected, value]);
      }
    }
    //if single-select, set selection to the value
    else {
      setSelected(selected[0] === value ? [] : [value]);
    }
  };
  const maxOptionLength = 14;
  return (
    <div
      className="text-xs cursor-pointer relative "
      tabIndex={0}
      onBlur={() => setExpanded(false)}
    >
      {/* Dropdown header/unexpanded display */}
      <div
        className={`${selected.length === 0 ? "text-gray-400" : "text-black"} flex justify-between items-center w-[150px] px-4 py-2 border border-slate-500 rounded-lg`}
        onClick={() => setExpanded(!expanded)}
      >
        <div className="text-nowrap overflow-hidden ">
          {selected.length === 0
            ? "Select..."
            : selected.length === 1
              ? selected[0].length > maxOptionLength
                ? selected[0].slice(0, maxOptionLength) + "..."
                : selected[0]
              : `${selected.length} selected`}
        </div>
        {expanded ? (
          <ChevronUp className="text-black ml-2 h-4 w-4 min-w-4" />
        ) : (
          <ChevronDown className="text-black ml-2 h-4 w-4 min-w-4" />
        )}
      </div>
      {/* Dropdown list */}
      <div
        className={`${expanded ? " max-h-[150px] opacity-100" : " max-h-[0px] opacity-0"} absolute right-0  w-fit min-w-[100px] border overflow-y-auto border-slate-200 transition-all duration-500`}
      >
        <div className=" flex flex-col justify-between items-start">
          {options.map(option => (
            <DropdownItem
              value={option}
              handleSelect={handleSelect}
              selected={selected.includes(option)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Dropdown;
