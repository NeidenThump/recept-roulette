//import logo from './logo.svg';
import './App.css';
import ReceptVy from './ReceptVy';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";

export default function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path="/recept-roulette/Recept/" element={<div><ReceptVy/><Navbar/></div>} />
        <Route path="/recept-roulette/Favoriter/" element={<div><Navbar/></div>} />
        <Route path="/recept-roulette/" element={<div><Navbar/></div>} />
      </Routes>
    </div>
  </Router>
);
}


