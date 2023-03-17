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
          <div>
            <p className="trending-reviews--title">Top Trending Reviews </p>
            <img
              className="trending-reviews--image1"
              src={require("../images/diablo.png")}
            />
            <p className="trending-reviews--name1">Diablo IV</p>
            <div className="trending-reviews--meta1">
              <p className="trending-review--meta1score">78%</p>
            </div>
            <div>
            <p className="trending-reviews--title">Top Trending Reviews </p>
            <img
              className="trending-reviews--image1"
              src={require("../images/diablo.png")}
            />
            <p className="trending-reviews--name1">Diablo IV</p>
            <div className="trending-reviews--meta1">
              <p className="trending-review--meta1score">78%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
