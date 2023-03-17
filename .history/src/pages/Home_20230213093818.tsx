import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "../Navbar";
export const Home = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <img className="header-logo" src={require("../images/logo.png")} />
        </div>
        <Router>
          <Navbar />
        </Router>
      </div>
    </div>
  );
};
