import logo from './logo.svg';
import './App.scss';
import MyComponents from './example/MyComponents';
import Nav from './Navigation/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Navigation/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/job" element={<MyComponents />} />
          </Routes>
        </header> 
      </div >
    </Router>
  );
}

export default App;
