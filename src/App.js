import './App.css';
import Header from './components/header/Header'
import Results from './components/Results'

const App = () => {

  return (
    <div className="App">
        <Header />
        <main>
          <Results />
        </main>
      </div>
  );
}

export default App;
