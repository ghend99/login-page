import "../css/Reset.css";

import { Header } from "../components/Header";
import { MainLink } from "../components/MainLink";
import { Footer } from "../components/Footer";

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
