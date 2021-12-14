//import logo from './logo.svg';
import './App.css';
import ReceptVy from './ReceptVy';
import Navbar from './Navbar';
import Startsida from './Startsida';
import AddWord from './Settings.js';
import Favoriter from './Favoriter';
import Remove from './FavRemove';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import generate from './generateRecipe.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//F9545B red  0AC850 green   25263A dark blue
const theme = createTheme({
  palette: {
    primary: {
      main: "#F9545B"
    },
    secondary:{
      main: "#0AC850"
    },
    info: {
      main: "#25263A"
    }
  },
});


export default function App() {
  window.localStorage.setItem("getFromDB", "livs");
  window.localStorage.setItem("recept", JSON.stringify(generate("livs")));

  return (
    <ThemeProvider theme={theme}>
  <Router>
    <div>
      <Routes>
        <Route path="/recept-roulette/Favoriter/:nr" element={<div><Remove/></div>}/>
        <Route path="/recept-roulette/Settings/" element={<div><AddWord/></div>} />
        <Route path="/recept-roulette/Recept/" element={<ReceptVy />} />
        <Route path="/recept-roulette/Favoriter/" element={<div><Favoriter/></div>} />
        <Route path="/recept-roulette/" element={<div><Startsida/></div>} />
      </Routes>
      <Navbar/>
    </div>
  </Router>
  </ThemeProvider>
);
}


