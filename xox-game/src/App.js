import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/Player';
import Computer from './pages/Computer';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/player' element={<Player />} />
          <Route path='/computer' element={<Computer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
