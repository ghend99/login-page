import "../css/Reset.css";

import { Header } from "../components/Header-M";
import { MainLink } from "../components/MainLink-M";
import { Footer } from "../components/Footer-M";

export const Reset = () => {
  return (
    <div>
      <Header />
      <MainLink />
      <h1>Reset Page</h1>
      <Footer />
    </div>
  );
};
