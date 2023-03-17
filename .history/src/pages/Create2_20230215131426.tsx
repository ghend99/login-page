import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export const Create2 = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate("/create");
  };

  const [email, setPassword];

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

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
        />
        <h3 className="create-input-password--header">Password</h3>
        <input
          className="create-input--password"
          type={"password"}
          placeholder="Password..."
        />
      </main>
      <Footer />
    </div>
  );
};
