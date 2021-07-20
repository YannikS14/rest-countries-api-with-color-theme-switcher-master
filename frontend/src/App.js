import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}></Header>
        <MainPage
          region={region}
          setRegion={setRegion}
          input={input}
          handleInputChange={updateInput}
          filteredCountries={filteredCountries}
        />
      </>
    </ThemeProvider>
  );
}

export default App;
