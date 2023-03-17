import "../App.css";

export const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="header">
          <img
            className="header-logo"
            src={require("../images/logo.png")}
            height={200}
            width={200}
          />
          <p className="header-close">Close</p>
        </div>
        <main>
          <div className="main-link">
            <p className="main-link-login">Log In</p>
            <p className="main-link-create-account">Create Account</p>
          </div>
          <p className="main-login-title">Login with your account</p>
        </main>
      </div>
    </div>
  );
};
