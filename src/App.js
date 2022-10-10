import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Codeacademy.lt React paskaita!
        </p>
        <a
          className="App-link"
          href="https://codeacademy.lt/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Codeacademy.lt
        </a>
      </header>
    </div>
  );
}

export default App;
