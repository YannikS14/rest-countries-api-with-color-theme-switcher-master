import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CountryList from './components/CountryList/CountryList';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    try {
      const response = await axios.get(
        'https://restcountries.eu/rest/v2/all',
      );
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const [region, setRegion] = useState('');
  const filteredCountries = countries.filter((country) => {
    if (region === 'America') return country.region === 'Americas';
    return country.region === region;
  });

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}></Header>
        <main>
          <SearchBar
            region={region}
            setRegion={setRegion}
          ></SearchBar>
          <CountryList
            countries={countries}
            region={region}
            filteredCountries={filteredCountries}
          ></CountryList>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
