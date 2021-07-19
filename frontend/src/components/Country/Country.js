import { StyledCountry } from './Country.styled';

function Country() {
  return (
    <StyledCountry>
      <img className="flag" src="flag.png" alt="" />
      <div className="textContent">
        <h3>Germany</h3>
        <p className="population">
          <span>Population: </span>81,770,900
        </p>
        <p className="region">
          <span>Region: </span> Europe
        </p>
        <p className="capital">
          <span>Capital: </span> Berlin
        </p>
      </div>
    </StyledCountry>
  );
}

export default Country;
