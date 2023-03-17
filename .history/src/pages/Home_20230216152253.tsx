import "../css/App.css";
import { Login } from "./Login";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import "../css/Sidebar.css";
import "../css/MainBody.css";
export const Home = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-body">
        <div className="game-news">
          <div className="game-news--title">Top Gaming News</div>
          <img
            className="game-news-cyberpunk--image"
            src={require("../images/cyberpunk.png")}
          />
          <h1 className="game-news-cyberpunk--title">
            Cyberpunk 2077 Resurgeance As Player Count Reaches All Time High
          </h1>
          <button className="read-more">Read More</button>
          <button className="favourite">Favourite</button>
        </div>
      </main>
    </div>
  );
};
