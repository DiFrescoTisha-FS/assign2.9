import React, { useState } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom"
import AuthService from "../services/auth.service";

import "../App.css";

function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await AuthService.signup(email, password).then(
        response => {
          navigate("/dashboard")
        }
      )
    } catch (error) {
      console.error(error)
    }
    console.log(email, password)
  }
  return (
    <div className="App">
    <h1>SignUp Screen</h1>
      <Header />
      <Link to="/dashboard">Dashboard</Link>
      <section>
        <form onSubmit={handleSignup}>
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

export default SignUp;
