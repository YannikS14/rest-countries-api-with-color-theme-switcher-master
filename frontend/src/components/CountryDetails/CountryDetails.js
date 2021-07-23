import { Link } from 'react-router-dom';
import { StyledCountryDetails } from './CountryDetails.styled';
import BorderCountry from '../BorderCountry/BorderCountry';

function CountryDetails({ country }) {
  return (
    <StyledCountryDetails>
      <div className="country-data-wrapper">
        <img src={country.flag} alt="country flag"></img>
        <div className="country-data">
          <h2>{country.name}</h2>
          <div className="country-base-data-wrapper">
            <div className="country-data-1">
              <p>
                <span>Native Name: </span>
                {country.nativeName}
              </p>
              <p>
                <span>Population: </span>
                {country.population &&
                  country.population.toLocaleString('de')}
              </p>
              <p>
                <span>Region: </span>
                {country.region}
              </p>
              <p>
                <span>Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span>Capital: </span>
                {country.capital}
              </p>
            </div>
            <div className="country-data-2">
              <p>
                <span>Top Level Domain: </span>
                {country.topLevelDomain &&
                  country.topLevelDomain.map((el, index) => {
                    if (index !== country.topLevelDomain.length - 1) {
                      return `${el}, `;
                    } else {
                      return el;
                    }
                  })}
              </p>
              <p>
                <span>Currencies: </span>
                {country.currencies &&
                  country.currencies.map((el, index) => {
                    if (index !== country.currencies.length - 1) {
                      return `${el.name}, `;
                    } else {
                      return el.name;
                    }
                  })}
              </p>
              <p>
                <span>Languages: </span>
                {country.languages &&
                  country.languages.map((el, index) => {
                    if (index !== country.languages.length - 1) {
                      return `${el.name}, `;
                    } else {
                      return el.name;
                    }
                  })}
              </p>
            </div>
          </div>
          <div className="border-countries">
            <span>Border Countries: </span>
            <div className="countries-wrapper">
              {country.borders &&
                country.borders.map((el, index) => {
                  return (
                    <Link to={`/country/${el}`} key={index}>
                      <BorderCountry countryCode={el}></BorderCountry>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </StyledCountryDetails>
  );
}

export default CountryDetails;
