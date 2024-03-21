import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedPage from './pages/ProtectedPage';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <Router>
      <div className="app">
        <Header loggedIn={loggedIn} handleLogout={handleLogout} />
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" render={(props) => <Signup {...props} handleLogin={handleLogin} />} />
          <Route path="/login" render={(props) => <Login {...props} handleLogin={handleLogin} />} />
          <Route
            path="/protected"
            render={(props) => <ProtectedPage {...props} loggedIn={loggedIn} user={user} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
