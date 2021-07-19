import { StyledCountryList } from './CountryList.styled';

import Country from '../Country/Country';

function CountryList({ countries, region, filteredCountries }) {
  return (
    <StyledCountryList>
      {!region
        ? countries.map((el, index) => {
            return <Country key={index} country={el}></Country>;
          })
        : filteredCountries.map((el, index) => {
            return <Country key={index} country={el}></Country>;
          })}
    </StyledCountryList>
  );
}

export default CountryList;
