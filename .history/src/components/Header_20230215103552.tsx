import { Close } from "../components/Close";

export const Header = () => {
  return (
    <div className="header">
      <img
        className="header-logo"
        src={require("../images/logo.png")}
        height={200}
        width={200}
      />
      <p className="header-title">Next-Gen Gaming</p>
      <Close />
    </div>
  );
};
