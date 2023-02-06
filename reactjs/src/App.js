import React, { useState, useEffect } from 'react';
import AuthService from './services/auth.service';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Memory from './pages/Memory';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    // const user = false;
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, [])

  const logOut = () => {
    AuthService.logOut();
  }

  return (
    <div>
      <h1>Demo logging in</h1>
    <div>
      {
        currentUser === false
        ? <h2>Logged In</h2>
        : <h2>Logged Out</h2>
      }
    </div>
      <section>
      <Routes>
        <Route path="/memory/:id" exact element={<Memory />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/" exact element={<Home />} />        
      </Routes>
    </section>
    </div>
  );
}

export default App;