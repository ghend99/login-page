import "../css/Create.css";
import { CountryDropdown } from "react-country-region-selector";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export const Create = () => {
  const [country, setCountry] = useState("");

  const [date, setDateValue] = useState(new Date());

  const [acceptTerms, setAcceptTerms] = useState(true);

  const agreeTerms = () => {
    setAcceptTerms(!acceptTerms);
    console.log("terms agreed");
  };

  const schema = yup.object().shape({
    age: yup.number().positive().integer().min(16).required("16 or over"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="background">
      <div className="container-create">
        <div className="header-create">
          <img
            className="header-logo"
            src={require("../images/logo.png")}
            height={200}
            width={200}
          />
          <p className="header-title">Next-Gen Gaming</p>
          <img
            className="header-create--close"
            src={require("../images/Close.svg")}
          />
        </div>
        <div className="main-link">
          <Link className="main-link-login" to="/login">
            Log In
          </Link>
          <Link className="main-link-create-account" to="/create">
            Create Account
          </Link>
        </div>
        <main>
          <h3 className="main-title"> Create Your Next-Gen Gaming Account</h3>
          <h3 className="residence-title">Country of residence</h3>
          <CountryDropdown
            classes="country-selector"
            value={country}
            onChange={(val) => setCountry(val)}
          />
          <h3 className="date-title">Date of birth</h3>
          <input className="date-picker" type={"date"} />
          <div className="terms">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="terms-checkbox"
                type="checkbox"
                onClick={agreeTerms}
                {...register("age")}
              />
            </form>
            <p className="terms-text">
              I agree to the User Agreement and understand Next-Gen Gaming's
              Privacy Policy.
            </p>
          </div>
          <input
            className="create-submit"
            type="submit"
            disabled={acceptTerms}
          />
        </main>
        <div className="footer-create">
          <p className="footer-create--title">Next-Gen Gaming</p>
          <p className="footer-create--certification">Ethan Pratt @2023</p>
        </div>
      </div>
    </div>
  );
};
