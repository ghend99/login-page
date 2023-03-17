import "../../css/Mobile/Login-M.css";
import { auth, provider } from "../../config/firebase";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Header } from "../../components/Mobile/Header-M";
import { Footer } from "../../components/Mobile/Footer-M";
import { MainLink } from "../../components/Mobile/MainLink-M";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  const auth = getAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        alert("Signed In");

        // ...
      })
      .catch((err) => {
        if (err.code === `auth/`) {
          alert(error);
        }
      });
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert(`Logged In`);
  };

  const [inputType, setInputType] = useState("password");

  const toggleInput = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  const createAccount = () => {
    navigate("/create");
  };

  const [style, setStyle] = useState("login-email");

  const changeStyle = () => {
    setStyle("login-email-2");
  };

  return (
    <div className="background-image">
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
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="login-password"
              type={inputType}
              placeholder="Password..."
              {...register("password")}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link className="reset-password" to="/change">
              Reset Password
            </Link>
            <input
              className="login-confirm"
              type="submit"
              placeholder="Log In"
              onClick={signIn}
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
