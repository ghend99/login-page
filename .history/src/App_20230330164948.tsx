import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import "../src/css/Login";
import "../src/css/Create2.css";
import { Login } from "./pages/Login-M";
import { Create } from "./pages/Create-M";
import { Create2 } from "./pages/Create2-M";
import { Change } from "./pages/Change-M";
import { Reset } from "./pages/reset";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/change" element={<Change />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create2" element={<Create2 />} />
          <Route path="/reset" element={<Reset />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
