import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

import '../App.css';

function Home() {
  return (
    
    <div className="App">
      <Header />
        <h1>Memories List Homepage</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/signup">SignUp</Link>
        <Link to="/login">Login</Link>
      <Hero />
      <Footer />

    </div>
  );
}

export default Home;

