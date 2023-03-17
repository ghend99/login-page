import "../css/Mobile/Change.css";
import { Header } from "../../components/Header-M";
import { Footer } from "../../components/Footer_M";
import { MainLink } from "../../components/MainLink-M";
import { useState } from "react";
import {
  getAuth,
  sendPasswordResetEmail,
  reauthenticateWithCredential,
} from "firebase/auth";

export const Change = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");

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
        console.log(error.code);
      });
  };

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
