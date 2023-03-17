import "../css/Header.css";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = () => {
    navigate("/");
  };
  return (
    <div className="header">
      <img className="header-logo" src={require("../images/logo.png")} />
      <p className="header-title">Next-Gen Gaming</p>
      <img className="header-close" src={require("../images/Close.png")} />
    </div>
  );
};
