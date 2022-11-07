import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RouteSuspense } from './components/RouteSuspense/RouteSuspense';
import { PageLayout } from './components/PageLayout/PageLayout';
// import { Route } from './components/Route/Route';
// import HomePage from './views/HomePage/HomePage';
// import ContactsPage from './views/ContactsPage/ContactsPage';
// import AboutPage from './views/AboutPage/AboutPage';

import './App.css';

const HomePage = React.lazy(() => import('./views/HomePage/HomePage'));
const ContactsPage = React.lazy(() => import('./views/ContactsPage/ContactsPage'));
const AboutPage = React.lazy(() => import('./views/AboutPage/AboutPage'));
const LoginPage = React.lazy(() => import('./views/LoginPage/LoginPage'));

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => setUser({ username });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout user={user} />}>
          <Route index element={
            <RouteSuspense>
              <HomePage />
            </RouteSuspense>
          } />
          <Route path="/contacts" element={
            <RouteSuspense>
              <ContactsPage />
            </RouteSuspense>
          } />
          <Route path="/about" element={
            <RouteSuspense>
              <AboutPage />
            </RouteSuspense>
          } />
        </Route>
        <Route path="/login" element={
          <RouteSuspense>
            <LoginPage onLogin={handleLogin} />
          </RouteSuspense>
        } />
      </Routes>
    </div>
  );
}

export default App;

