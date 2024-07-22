import { sampleDropdownItems } from "../sampleData/DropdownSample";
interface DropdownProps {
  children: string[];
  selectionMode: "single" | "multiple";
  selection: number;
  setSelection: (index: number) => void;
}

import React, { useState } from "react";
interface DropdownItemProps {
  value: string;
  onSelect: (value: string) => void;
  selected: boolean;
}
const DropdownItem = ({ value, onSelect, selected }: DropdownItemProps) => {
  const classes = {
    selected: "bg-teal-500 text-white",
    unselected: "bg-white text-gray-900"
  };

  return (
    <div
      className={`${classes[selected ? "selected" : "unselected"]} px-4 py-2 cursor-pointer`}
      onClick={() => onSelect(value)}
    >
      {value}
    </div>
  );
};

interface DropdownProps {
  options: string[];
  multiple: boolean;
  selected: string[];
  setSelected: (selected: string[]) => void;
}
const Dropdown = ({
  options,
  multiple,
  selected,
  setSelected
}: DropdownProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  return (
    <div>
      {options.map(option => (
        <DropdownItem
          value={option}
          onSelect={handleSelect}
          selected={selected.includes(option)}
        />
      ))}
    </div>
  );
};
