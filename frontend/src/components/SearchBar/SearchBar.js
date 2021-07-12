import './SearchBar.css';

function SearchBar() {
  return (
    <div className="selection">
      <div className="search">
        <input
          type="search"
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="filter">
        <select>
          <option value="" selected disabled hidden>
            Filter by Region
          </option>
          <option>Africa</option>
          <option>America</option>
          <option>Asias</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default SearchBar;
