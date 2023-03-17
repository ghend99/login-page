import "../css/Change.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

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
        console.log("Error Code");
      });
  };

  return (
    <div className="container-change">
      <Header />
      <MainLink />
      <main>
        <h3 className="change-title--email">Email</h3>
        <input className="change-input--email" />
        <button className="change-button--submit">
          Request Password change
        </button>
      </main>
      <Footer />
    </div>
  );
};
