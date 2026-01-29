import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/home';
import About from './components/about'
import './App.css';
// import { Navbar } from 'react-bootstrap';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
  );
}
 
export default App;
