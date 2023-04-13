import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { About } from "./components/About";
import Home from "./components/Home";
import Test from "./components/Test";
import Login from "./pages/login";
import Private from "./pages/Private";
import Provider from "./context/Provider";

function App() {
  const test = localStorage.getItem("login");

  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={test ? <Home /> : <Login />} />
          <Route path="/about" element={test ? <About /> : <Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
