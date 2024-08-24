import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Campus from './pages/campus.jsx';
import Events from './pages/events.jsx';
import Resources from './pages/resources.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<Campus/>}/>
          <Route path="events" element={<Events/>}/>
          <Route path="/resources" element={<Resources/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
