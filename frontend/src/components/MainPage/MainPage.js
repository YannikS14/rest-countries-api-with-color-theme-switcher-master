import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import CountryList from '../CountryList/CountryList';
import { StyledMainPage } from './MainPage.styled';

function MainPage() {
  const [countries, setCountries] = useState([]);
  const [countriesDefault, setCountriesDefault] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(
        'https://restcountries.eu/rest/v2/all',
      );
      setCountries(response.data);
      setCountriesDefault(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const [region, setRegion] = useState('');
  const filteredCountries = countries.filter((country) => {
    if (!region) return country;
    if (region === 'America') return country.region === 'Americas';
    return country.region === region;
  });

  const [input, setInput] = useState('');
  const updateInput = (input) => {
    const filtered = countriesDefault.filter((country) => {
      return country.name.toLowerCase().includes(input.toLowerCase());
    });
    setInput(input);
    setCountries(filtered);
  };

  return (
    <StyledMainPage>
      <SearchBar
        region={region}
        setRegion={setRegion}
        input={input}
        handleInputChange={updateInput}
      ></SearchBar>
      <CountryList
        filteredCountries={filteredCountries}
      ></CountryList>
    </StyledMainPage>
  );
}

export default MainPage;
