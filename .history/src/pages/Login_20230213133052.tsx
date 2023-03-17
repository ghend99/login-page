import "../App.css";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    console.log("Hello World");
  };

  const [inputType, setInputType] = useState("password");

  const toggleInput = () => {
    setInputType(inputType === "password" ? "text" : "text");
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
          <p className="header-close">Close</p>
        </div>
        <main>
          <div className="main-link">
            <p className="main-link-login">Log In</p>
            <p className="main-link-create-account">Create Account</p>
          </div>
          <p className="main-login-title">Login with your account</p>
          <form className="login" onSubmit={handleSubmit(onSubmit)}>
            <input className="login-email" type="text" placeholder="Email..." />
            <input
              className="login-password"
              type="inputType"
              placeholder="Password..."
            />
            <button className="show-password" onClick={toggleInput}>
              Show
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};
