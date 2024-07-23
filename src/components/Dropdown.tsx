import DropdownItem from "./DropdownItem";
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
      setSelected([value]);
    }
  };
  return (
    <div className=" flex flex-col justify-between items-start">
      {options.map(option => (
        <DropdownItem
          value={option}
          handleSelect={handleSelect}
          selected={selected.includes(option)}
        />
      ))}
    </div>
  );
};
export default Dropdown;
