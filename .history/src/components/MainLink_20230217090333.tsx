import { Link } from "react-router-dom";
import "../css/Mobile/MainLink.css";

export const MainLink = () => {
  return (
    <div className="main-link">
      <Link className="main-link-login" to="/login">
        Log In
      </Link>
      <Link className="main-link-create-account" to="/create">
        Create Account
      </Link>
    </div>
  );
};
