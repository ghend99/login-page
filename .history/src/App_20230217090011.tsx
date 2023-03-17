import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";
import "./css/Login.css";
import "./css/Create2.css";
import { Login } from "./pages/Login";
import { Create } from "./pages/Create";
import { Create2 } from "./pages/Create2";
import { Change } from "./pages/Change";
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
