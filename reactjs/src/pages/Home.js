import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import { Link } from'react-router-dom';

import '../App.css';

function Home() {
  return (    
    <div className="App">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login</Link>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default Home;

