import React, { useEffect } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import { About } from './components/About';
import Home from './components/Home';
import Test from './components/Test';
import Login from './pages/login';
import Private from './pages/Private';

export const BASE_URL= process.env.NEXT_API

function App() {
  const test = localStorage.getItem('login')
  console.log(test)

  return (
    <Router>
      <Routes>
        <Route path="/" element={test ? <Home /> : <Login /> } />
        <Route path="/about" element={test ? <About /> : <Login /> } />
      </Routes>
    </Router>
  );
}

export default App;
