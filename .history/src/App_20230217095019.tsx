import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import "./css/Mobile/Login.css";
import "./css/Mobile/Create2.css";
import { Login } from "./pages/Mobile/Login_M";
import { Create } from "./pages/Mobile/Create_M";
import { Create2 } from "./pages/Mobile/Create2_M";
import { Change } from "./pages/Mobile/Change-M";
import { Navbar } from "./Navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/change" element={<Change />} />
          <Route path="/create" element={<Create />} />
          <Route path="/create2" element={<Create2 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
