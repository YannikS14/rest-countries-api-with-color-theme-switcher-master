import { StyledSearchBar } from './SearchBar.styled';

function SearchBar() {
  return (
    <StyledSearchBar>
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
    </StyledSearchBar>
  );
}

export default SearchBar;
