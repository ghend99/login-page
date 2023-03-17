import { Login, handleSubmit } from "../pages/Login";
import { Link } from "react-router-dom";

export const LogInForm = () => {
  return (
    <form className="login" onSubmit={handleSubmit(onSubmit)}>
      <input
        onClick={changeStyle}
        className="login-email"
        type="text"
        placeholder="Email..."
        {...register("email")}
      />
      <input
        className="login-password"
        type={inputType}
        placeholder="Password..."
        {...register("password")}
      />
      <Link className="reset-password" to="/change">
        Reset Password
      </Link>
      <input className="login-confirm" type="submit" placeholder="Log In" />
    </form>
  );
};
