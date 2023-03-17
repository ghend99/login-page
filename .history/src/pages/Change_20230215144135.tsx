import "../css/Change.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink";

export const Change = () => {
  return (
    <div className="container-change">
      <Header />
      <MainLink />
      <main>
        <h3 className="change-title--email">Email</h3>
        <input className="change-input--email" />
        <h3>Old Password</h3>
      </main>
      <Footer />
    </div>
  );
};
