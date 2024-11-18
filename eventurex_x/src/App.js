// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import JoinEvent from './pages/JoinEvent';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import CreateEvent from './pages/CreateEvent';
import Login from './pages/Login';
import Signup from './pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<JoinEvent />} />
          <Route path="/create" element={<CreateEvent />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
      
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;