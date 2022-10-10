import { Button } from './Button/Button';
import { Header } from './Header/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Button type="secondary">Click me!</Button>
      <Button type="secondary">Press</Button>
      <Button type="primary">I am first button <span>123</span></Button>
    </div>
  );
}

export default App;
