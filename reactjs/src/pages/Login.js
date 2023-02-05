import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AuthService from "../services/auth.service";

import "../App.css";

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await AuthService.login(email, password).then(
        response => {
          navigate("/dashboard")
        })
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="App">
    <h1>Login Screen</h1>
      <Header />
      <Link to="/dashboard">Dashboard</Link>
      <section>
        <form onSubmit={handleLogin}>
          <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
          <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign Up</button>
        </form>
      </section>
      <Hero />
      <Footer />
    </div>
  );
}

export default Login;
