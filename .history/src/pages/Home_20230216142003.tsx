import "../css/App.css";
import { Login } from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import "../css/Sidebar.css";
import "../css/MainBody.css";
export const Home = () => {
  return (
    <div>
      <Sidebar />
      <main className="main-body">
        <div>
          <img
            className="game-news-cyberpunk--image"
            src={require("../images/cyberpunk.png")}
          />
          <h1 className="game-news-cyberpunk--title">
            Cyberpunk 2077 Resurgeance
          </h1>
        </div>
      </main>
    </div>
  );
};
