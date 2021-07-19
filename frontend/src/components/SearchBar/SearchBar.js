import { useState } from 'react';
import { StyledSearchBar } from './SearchBar.styled';

function SearchBar({ region, setRegion }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleFilterMenuOpen = () => setIsOpen(!isOpen);

  const handleRegionClick = (newRegion) => {
    if (region === newRegion) return setRegion('');
    setRegion(newRegion);
  };

  return (
    <StyledSearchBar>
      <div className="search">
        <input
          type="search"
          placeholder="Search for a country..."
        ></input>
      </div>
      <div className="filter" onClick={toggleFilterMenuOpen}>
        <button>{region ? region : 'Filter by Region'}</button>
        {isOpen && (
          <ul>
            <li
              onClick={() => {
                handleRegionClick('Africa');
              }}
            >
              Africa
            </li>
            <li
              onClick={() => {
                handleRegionClick('America');
              }}
            >
              America
            </li>
            <li
              onClick={() => {
                handleRegionClick('Asia');
              }}
            >
              Asia
            </li>
            <li
              onClick={() => {
                handleRegionClick('Europe');
              }}
            >
              Europe
            </li>
            <li
              onClick={() => {
                handleRegionClick('Oceania');
              }}
            >
              Oceania
            </li>
          </ul>
        )}
      </div>
    </StyledSearchBar>
  );
}

export default SearchBar;
