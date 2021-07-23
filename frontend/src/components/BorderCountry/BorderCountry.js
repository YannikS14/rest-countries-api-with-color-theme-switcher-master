import { StyledBorderCountry } from './BorderCountry.styled';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BorderCountry({ countryCode }) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    const getCountry = async () => {
      try {
        const response = await axios.get(
          `https://restcountries.eu/rest/v2/alpha/${countryCode}`,
        );
        setCountry(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getCountry();
  }, [countryCode]);
  return <StyledBorderCountry>{country.name}</StyledBorderCountry>;
}

export default BorderCountry;
