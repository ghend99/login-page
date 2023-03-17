import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "./Navbar";
export const Home = () => {
  return (
    <div>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};
