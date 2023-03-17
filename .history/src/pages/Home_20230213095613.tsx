import "../App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
export const Home = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <div className="container">
        <div className="header">
          <img
            className="header-logo"
            src={require("../images/logo.png")}
            height={200}
            width={200}
          />
        </div>
      </div>
    </div>
  );
};
