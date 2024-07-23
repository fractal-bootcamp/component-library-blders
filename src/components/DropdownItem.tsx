interface DropdownItemProps {
  value: string;
  handleSelect: (value: string) => void;
  selected: boolean;
}
const DropdownItem = ({ value, handleSelect, selected }: DropdownItemProps) => {
  const classes = {
    selected: "bg-teal-500 text-white",
    unselected: "bg-white text-gray-900"
  };

  return (
    <div
      className={`${classes[selected ? "selected" : "unselected"]}px-4 py-2 cursor-pointer`}
      onClick={() => handleSelect(value)}
    >
      {value}
    </div>
  );
};
export default DropdownItem;
