//import logo from './logo.svg';
import './App.css';
import ReceptVy from './ReceptVy';
import Navbar from './Navbar';
import Startsida from './Startsida';
import AddWord from './Settings';
import Favoriter from './Favoriter';
import Remove from './FavRemove';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function App() {
  return (
  <Router>
    <div>
      <Routes>
        <Route path="/recept-roulette/Favoriter/:nr" element={<Remove/>}/>
        <Route path="/recept-roulette/Settings/" element={<div><AddWord/><Navbar/></div>} />
        <Route path="/recept-roulette/Recept/" element={<div><ReceptVy/><Navbar/></div>} />
        <Route path="/recept-roulette/Favoriter/" element={<div><Favoriter/><Navbar/></div>} />
        <Route path="/recept-roulette/" element={<div><Startsida/><Navbar/></div>} />
      </Routes>
    </div>
  </Router>
);
}


