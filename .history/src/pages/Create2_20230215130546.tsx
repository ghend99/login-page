import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink";
import { Link, useNavigate } from "react-router-dom";

export const Create2 = () => {
  const navigate = useNavigate();

  const backPage = () => {
    navigate("/create");
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
        <input
          className="create-input--email"
          type="email"
          placeholder="Email..."
        />
      </main>
      <Footer />
    </div>
  );
};
