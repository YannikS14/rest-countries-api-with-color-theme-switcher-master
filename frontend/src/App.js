import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <SearchBar></SearchBar>
      </main>
    </div>
  );
}

export default App;
