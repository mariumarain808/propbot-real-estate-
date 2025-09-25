
import './App.css';
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Buy from './pages/Buy'
import Login from './pages/Login'
import Signup from './pages/Signup'
function App() {
  return (
    
    <Router>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
       <Route path="/Home" element={<Home />} />
       <Route path="/Signup" element={<Signup />} />
        <Route path="/Buy" element={<Buy />} />

      
      </Routes>
    </Router>
  );
}

export default App;
