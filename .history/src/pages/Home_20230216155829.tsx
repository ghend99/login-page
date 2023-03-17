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

      <main></main>
    </div>
  );
};
