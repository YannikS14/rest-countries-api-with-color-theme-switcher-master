import { StyledCountryList } from './CountryList.styled';

import Country from '../Country/Country';

function CountryList({ filteredCountries }) {
  return (
    <StyledCountryList>
      {filteredCountries.map((el, index) => {
        return <Country key={index} country={el}></Country>;
      })}
    </StyledCountryList>
  );
}

export default CountryList;
