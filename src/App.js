import logo from './logo.svg';
import './App.css';
import Title from './Title';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title></Title>
        
      </header>
    </div>
  );
}

export default App;
