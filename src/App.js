import React from 'react';
import Home from './components/home';
import Project from './components/projects'
import Experience from './components/experience'
import Footer from './components/footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
}
 
export default App;
