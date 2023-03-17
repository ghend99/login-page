import "../css/App.css";
import { Login } from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import "../css/Sidebar.css";
export const Home = () => {
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={require("../images/logo.png")} />
      <h1 className="sidebar-title--first">NGG</h1>
      <h2 className="sidebar-title--second">Next-Gen Gaming</h2>
      <div className="sidebar-links">
        <img
          className="sidebar-links--home"
          src={require("../images/home.png")}
        />
        <p className="sidebar-links-title--home">Home</p>
      </div>
      <div className="sidebar-links--search">
        <img
          className="sidebar-links--search"
          src={require("../images/search.png")}
        />
        <p className="sidebar-links-title--search">Home</p>
      </div>
    </div>
  );
};
