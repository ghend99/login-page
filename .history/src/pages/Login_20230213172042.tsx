import "../css/App.css";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const [inputType, setInputType] = useState("password");

  const toggleInput = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const resetPassword = () => {
    navigate("/change");
  };

  const [style, setStyle] = useState("login-email");

  const changeStyle = () => {
    setStyle("login-email-2");
  };

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
          <p className="header-title">Next-Gen Gaming</p>
          <Link className="header-close" to="/">
            Close
          </Link>
        </div>
        <main>
          <div className="main-link">
            <p className="main-link-login">Log In</p>
            <Link className="main-link-create-account" to="/create" />
          </div>
          <h3 className="main-login-title">Login with your account</h3>
          <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <input
              onClick={changeStyle}
              className="login-email"
              type="text"
              placeholder="Email..."
              {...register("email")}
            />
            <input
              className="login-password"
              type={inputType}
              placeholder="Password..."
              {...register("password")}
            />
            <Link className="reset-password" to="/change">
              Reset Password
            </Link>
            <input
              className="login-confirm"
              type="submit"
              placeholder="Log In"
            />
          </form>
          <button className="show-password" onClick={toggleInput}>
            Show
          </button>
          <h4 className="login-break"> OR</h4>
          <button className="google-login" onClick={signInWithGoogle}>
            Log In with Google
          </button>
        </main>
        <div className="footer">
          <p className="footer-title">Next-Gen Gaming</p>
          <p className="footer-certification">Ethan Pratt @2023</p>
        </div>
      </div>
    </div>
  );
};
