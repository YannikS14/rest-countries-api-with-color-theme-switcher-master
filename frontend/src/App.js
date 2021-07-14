import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import CountryList from './components/CountryList/CountryList';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Header></Header>
        <main>
          <SearchBar></SearchBar>
          <CountryList></CountryList>
        </main>
      </>
    </ThemeProvider>
  );
}

export default App;
