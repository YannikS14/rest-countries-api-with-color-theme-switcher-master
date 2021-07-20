import { Link } from 'react-router-dom';
import { StyledCountry } from './Country.styled';

function Country({ country }) {
  return (
    <StyledCountry>
      <Link to={`/country/${country.alpha2Code}`}>
        <img className="flag" src={country.flag} alt="" />
        <div className="textContent">
          <h3>{country.name}</h3>
          <p className="population">
            <span>Population: </span>
            {country.population.toLocaleString('de')}
          </p>
          <p className="region">
            <span>Region: </span>
            {country.region}
          </p>
          <p className="capital">
            <span>Capital: </span>
            {country.capital}
          </p>
        </div>
      </Link>
    </StyledCountry>
  );
}

export default Country;
