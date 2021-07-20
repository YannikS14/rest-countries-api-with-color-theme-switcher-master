import SearchBar from '../SearchBar/SearchBar';
import CountryList from '../CountryList/CountryList';
import { StyledMainPage } from './MainPage.styled';

function MainPage({
  region,
  setRegion,
  input,
  handleInputChange,
  filteredCountries,
}) {
  return (
    <StyledMainPage>
      <SearchBar
        region={region}
        setRegion={setRegion}
        input={input}
        handleInputChange={handleInputChange}
      ></SearchBar>
      <CountryList
        filteredCountries={filteredCountries}
      ></CountryList>
    </StyledMainPage>
  );
}

export default MainPage;
