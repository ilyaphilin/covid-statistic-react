export default function Search({ filterText, onFilterTextChange }) {
  return (
    <input
      type="text"
      id="searchBar"
      placeholder="Search..."
      value={filterText}
      onChange={(e) => onFilterTextChange(e.target.value)}
    />
  );
}
