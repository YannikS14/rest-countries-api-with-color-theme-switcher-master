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
        <button>Filter by Region</button>
        <ul>
          <li>Africa</li>
          <li>America</li>
          <li>Asias</li>
          <li>Europe</li>
          <li>Oceania</li>
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
