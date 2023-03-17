import "../App.css";
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
          <p className="header-close">Close</p>
        </div>
        <main>
          <div className="main-link">
            <p className="main-link-login">Log In</p>
            <p className="main-link-create-account">Create Account</p>
          </div>
          <h6 className="main-login-title">Login with your account</h6>
          <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <input
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
            <input className="login-confirm" type="submit" />
          </form>
          <button className="show-password" onClick={toggleInput}>
            Show
          </button>
        </main>
        <div className="footer"></div>
      </div>
    </div>
  );
};
