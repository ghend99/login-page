import "../css/Create2.css";
import { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink-M";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const Create2 = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate("/create");
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        alert(`Account Created`);
        navigate("/");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        alert(errorMessage);
        // ..
      });
  };
  const [inputType, setInputType] = useState("password");

  const toggleInput = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div className="container-create2">
      <Header />
      <MainLink />
      <main>
        <img
          className="back-arrow"
          src={require("../images/back.png")}
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
          type={inputType}
          placeholder="Password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="show-password-create2" onClick={toggleInput}>
          Show
        </button>
        <button type={"submit"} className="create-submit2" onClick={signUp}>
          Sign Up
        </button>
      </main>

      <Footer />
    </div>
  );
};