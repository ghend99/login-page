import "../css/LogIn.css";
import { auth, provider } from "../config/firebase";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink";
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

  const createAccount = () => {
    navigate("/create");
  };

  const [style, setStyle] = useState("login-email");

  const changeStyle = () => {
    setStyle("login-email-2");
  };

  return (
    <div>
      <div className="container">
        <Header />
        <main>
          <MainLink />
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
        <Footer />
      </div>
    </div>
  );
};