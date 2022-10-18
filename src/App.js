import { useState } from 'react';
import './App.css';
import { Counter } from './Counter/Counter';

function App() {
  const [isCounterVisible, setIsCounterVisible] = useState(true);

  const handleToggleCounter = () => {
    setIsCounterVisible(!isCounterVisible);
  }

  return (
    <div className="App">
      <button onClick={handleToggleCounter}>Toggle Counter</button>
      {isCounterVisible &&  <Counter />}
    </div>
  );
}

export default App;
