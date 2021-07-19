import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
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

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme}></Header>
        <main>
          <SearchBar></SearchBar>
          <CountryList></CountryList>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
