import React from 'react';
import { Link } from 'react-router-dom';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { Login } from './components/login';
import { Register } from './components/register';
function App() {
  return (
    <div className="App">
      
      <Link to="/login" class="list">
            Login
          </Link>
          <Link to="/register" class="list">
            Register
          </Link>
          <Link to="/body" class="list">
            Start
          </Link>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/body" element={<Body />} />
          </Routes>
      
    </div>
  );
}

export default App;
