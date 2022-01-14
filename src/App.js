import './App.css';
import Navigation from './components/Navigation'
import SearchForm from './components/Form'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <div className="container">
        <SearchForm/>
      </div>
    </div>
  );
}

export default App;
