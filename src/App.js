import { Routes, Route } from 'react-router-dom';
import { AboutPage } from './views/AboutPage/AboutPage';
import { HomePage } from './views/HomePage/HomePage';
import { ContactsPage } from './views/ContactsPage/ContactsPage';
import { Navigation } from './components/Navigation/Navigation';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </div>
  );
}

export default App;
