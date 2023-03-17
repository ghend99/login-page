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
        <h2 className="main-body--title">The Future Of All Things Gaming</h2>
      </main>
    </div>
  );
};
