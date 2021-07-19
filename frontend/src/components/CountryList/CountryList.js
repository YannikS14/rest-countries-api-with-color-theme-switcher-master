import { StyledCountryList } from './CountryList.styled';

import Country from '../Country/Country';

function CountryList({ countries }) {
  return (
    <StyledCountryList>
      {countries.map((el, index) => {
        return <Country key={index} country={el}></Country>;
      })}
    </StyledCountryList>
  );
}

export default CountryList;
