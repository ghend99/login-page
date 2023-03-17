import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink";
import {Link, useNavigate} from "react-router-dom";

export const Create2 = () => {
  const navigate = useNavigate()


  return (
    <div className="container-create2">
      <Header />
      <MainLink />
      <main>
        <Link to="/create"
      </main>
      <Footer />
    </div>
  );
};
