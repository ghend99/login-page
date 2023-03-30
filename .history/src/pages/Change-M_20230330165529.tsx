import "../css/Change.css";
import { Header } from "../components/Header-M";
import { Footer } from "../components/Footer-M";
import { MainLink } from "../components/MainLink-M";
import { useState } from "react";
import {
  getAuth,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

export const Change = () => {
  const auth = getAuth();

  const [email, setEmail] = useState<string>("");

  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log("Reset email sent");
        alert(`Reset email sent`);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log(error.code);
      });
  };

  const navigate = useNavigate();

  return (
    <div className="container-change">
      <Header />
      <MainLink />
      <main>
        <h3 className="change-title--email">Email</h3>
        <input
          className="change-input--email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="change-button--submit" onClick={resetPassword}>
          Request Password Change
        </button>
      </main>
      <Footer />
    </div>
  );
};
