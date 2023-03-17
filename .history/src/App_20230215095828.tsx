import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import "./css/LogIn.css";
import "./css/Create2.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Change } from "./pages/Change";
import { Create } from "./pages/Create";
import { Navbar } from "./Navbar";
import { Create2 } from "./pages/Create2";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/change" element={<Change />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create2" element={<Create2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
