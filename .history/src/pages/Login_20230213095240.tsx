import "../App.css";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "../Navbar";

export const Login = () => {
  return (
    <div>
      <Router>
        <Navbar />
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
