import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Header from './components/Header/Header';
import MainPage from './components/MainPage/MainPage';
import DetailPage from './components/DetailPage/DetailPage';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <Router>
      <ThemeProvider
        theme={theme === 'light' ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyles />
          <Header toggleTheme={toggleTheme}></Header>
          <Switch>
            <Route path="/" exact component={MainPage} />
            <Route
              path="/country/:countryId"
              exact
              component={DetailPage}
            />
          </Switch>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
