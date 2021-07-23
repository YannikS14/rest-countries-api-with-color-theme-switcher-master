import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import CountryList from '../CountryList/CountryList';
import { StyledMainPage } from './MainPage.styled';
import Loading from '../Loading/Loading';

function MainPage() {
  const [countries, setCountries] = useState([]);
  const [countriesDefault, setCountriesDefault] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://restcountries.eu/rest/v2/all',
      );
      setCountries(response.data);
      setCountriesDefault(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
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
      {loading && <Loading />}
      {countries && (
        <>
          <SearchBar
            region={region}
            setRegion={setRegion}
            input={input}
            handleInputChange={updateInput}
          ></SearchBar>
          <CountryList
            filteredCountries={filteredCountries}
          ></CountryList>
        </>
      )}
    </StyledMainPage>
  );
}

export default MainPage;
