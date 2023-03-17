import "../App.css";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export const Login = () => {
  const navigate = useNavigate();
  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);

    const Form = () => {
      const schema = yup;
    };

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({ resolver: yupResolver(schema) });
  //   const onSubmit = (data) => {
  //     console.log(data);
  //   };
  // };

  return (
    <div>
      <div className="container">
        <div className="header">
          <img
            className="header-logo"
            src={require("../images/logo.png")}
            height={200}
            width={200}
          />
          <p className="header-close">Close</p>
        </div>
        <main>
          <div className="main-link">
            <p className="main-link-login">Log In</p>
            <p className="main-link-create-account">Create Account</p>
          </div>
          <p className="main-login-title">Login with your account</p>
          <Form></Form>
        </main>
      </div>
    </div>
  );
};
