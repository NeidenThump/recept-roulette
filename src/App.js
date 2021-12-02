import './App.css';
import ReceptVy from './ReceptVy';
import Start from './Start';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
            
            
            <Routes>
              <Route path="/receptvy" element={<ReceptVy/>} ></Route>
              <Route path="/" element={<Start/>}></Route>

            </Routes>
          
      </div>
    </Router> 
  );
}

export default App;
