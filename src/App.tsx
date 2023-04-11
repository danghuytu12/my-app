import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { About } from './components/About';
import Home from './components/Home';

function App() {
  const test = localStorage.getItem('login')
  console.log(test)
  return (
    <Router>
      <Routes>
        <Route path="/" element={test ? <Home /> : <>Login</>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
