import "../css/App.css";
import { Login } from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "../Navbar";
import { Sidebar } from "../components/Sidebar";
import "../css/Sidebar.css";
export const Home = () => {
  return <Sidebar />;
};
