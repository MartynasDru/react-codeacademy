import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('COMPONENT MOUNTED');
  }, []);

  const handleIncrement = (event) => {
    console.log(event);
  }

  const handleIncrementKeyDown = (event) => {
    console.log('KEY DOWN');
  }

  const handleIncrementKeyUp = () => {
    console.log('KEY UP');
  }

  const handleInputChange = (event) => {
    console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('SUBMIT!');
  }

  const handleInputBlur = () => {
    console.log('INPUT LOST FOCUS!');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {count}
        <button 
          onKeyUp={handleIncrementKeyUp}
          onKeyDown={handleIncrementKeyDown} 
          onClick={handleIncrement}
        >
          Increment
        </button>
        <input onChange={handleInputChange} onBlur={handleInputBlur} />
      </form>
    </div>
  );
}

export default App;
