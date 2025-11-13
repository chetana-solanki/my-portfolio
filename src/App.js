import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='min-h-screen dark:bg-black dark:text-white bg-white text-black'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={< About/>} />
          <Route path="/projects" element={< Projects/>} />
          <Route path="/contact" element={< Contact/>}/>
        </Routes>
      </div>
    </Router>
    

  );
}

export default App;
