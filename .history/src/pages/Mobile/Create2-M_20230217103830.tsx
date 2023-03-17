import "../../css/Mobile/Create2-M.css";
import { useState } from "react";
import { Header } from "../../components/Mobile/Header-M";
import { Footer } from "../../components/Mobile/Footer-M";
import { MainLink } from "../../components/Mobile/MainLink-M";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const Create2 = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate("/create");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorCode);
        // ..
      });
  };

  return (
    <div className="container-create2">
      <Header />
      <MainLink />
      <main>
        <img
          className="back-arrow"
          src={require("../../images/back.png")}
          onClick={backPage}
        />
        <Link to="/create" className="back-link">
          Back
        </Link>
        <h3 className="create-input-email--header">Email</h3>
        <input
          className="create-input--email"
          type={"email"}
          placeholder="Email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="create-input-password--header">Password</h3>
        <input
          className="create-input--password"
          type={"password"}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type={"submit"} className="create-submit" onClick={signUp}>
          Sign Up
        </button>
      </main>

      <Footer />
    </div>
  );
};
