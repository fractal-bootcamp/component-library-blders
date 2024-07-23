interface DropdownSearchProps {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setExpanded: (expanded: boolean) => void;
}
const DropdownSearch = ({
  searchTerm,
  setSearchTerm,
  setExpanded
}: DropdownSearchProps) => {
  return (
    <div className={`bg-slate-50 px-4 py-2 w-full cursor-pointer`}>
      <input
        type="text"
        value={searchTerm}
        onFocus={() => setExpanded(true)}
        onChange={e => setSearchTerm(e.target.value)}
      />
    </div>
  );
};
export default DropdownSearch;
