import "../css/App.css";
import { Login } from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import "../css/Sidebar.css";
import "../css/Mainbody.css";
export const Home = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-body">
        <div className="trending-reviews">
          <p className="trending-reviews--title">Top Trending Reviews </p>
          <img
            className="sidebar-links-image--home"
            src={require("../images/home.png")}
          />
        </div>
      </main>
    </div>
  );
};
