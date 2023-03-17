import "../css/App.css";
import { Login } from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import "../css/Sidebar.css";
export const Home = () => {
  return (
    <div className="sidebar">
      <img className="sidebar-logo" src={require("../images/logo.png")} />
      <h1 className="sidebar-title">Next-Gen Gaming</h1>
    </div>
  );
};
