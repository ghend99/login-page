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
        <h3 className="section-header">Top Trending Reviews</h3>
        <div className="review-container--review1">
          <img
            className="sidebar-links-image--home"
            src={require("../images/cyberpunk.png")}
          />
        </div>
        <div className="review-container--review2"></div>
        <div className="review-container--review3"></div>
      </main>
    </div>
  );
};
