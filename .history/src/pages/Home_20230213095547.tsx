import "../App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "../Navbar";
export const Home = () => {
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
