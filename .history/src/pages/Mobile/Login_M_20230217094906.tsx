import "../../css/Mobile/Login.css";
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
import { Header } from "../../components/Header_M";
import { Footer } from "../../components/Footer_M";
import { MainLink } from "../../components/MainLink-M";

export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
  };

  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("Signed In");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert({ errorCode });
        return <h1 className="signIn-error">{errorCode}</h1>;
      });
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log("Reset email sent");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("Error Code");
      });
  };

  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
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
