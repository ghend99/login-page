import "../css/Change.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MainLink } from "../components/MainLink";
import { getAuth, updatePassword } from "firebase/auth";

export const Change = () => {
  const auth = getAuth();

  const user = auth.currentUser;
  const newPassword = getASecureRandomPassword();

  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
  return (
    <div className="container-change">
      <Header />
      <MainLink />
      <main>
        <h3 className="change-title--email">Email</h3>
        <input className="change-input--email" />
        <h3 className="change-title--old-password">Old Password</h3>
        <input className="change-input--old-password" />
      </main>
      <Footer />
    </div>
  );
};
