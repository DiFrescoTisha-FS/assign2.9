import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import Memory from './pages/Memory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/memory/:id" exact element={<Memory />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/" exact element={<Home />} />        
      </Routes>
    </Router>
  );
}

export default App;
