import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
export const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img className="header-logo" src={require("../images/logo.png")} />
        </div>

        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Navbar />
        </Router>
      </div>
    </div>
  );
};
