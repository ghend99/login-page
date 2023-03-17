import "../css/Create.css";
import { CountryDropdown } from "react-country-region-selector";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Create = () => {
  const [country, setCountry] = useState("");

  const [date, setDateValue] = useState(new Date());

  const [acceptTerms, setAcceptTerms] = useState(false);

  const agreeTerms = () => {
    setAcceptTerms(true);
  };

  return (
    <div className="container-create">
      <div className="header">
        <img
          className="header-logo"
          src={require("../images/logo.png")}
          height={200}
          width={200}
        />
        <p className="header-title">Next-Gen Gaming</p>
        <Link className="header-close" to="/">
          Close
        </Link>
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
          <input className="terms-checkbox" type="checkbox" />
          <p className="terms-text">
            I agree to the User Agreement and understand Next-Gen Gaming's
            Privacy Policy.
          </p>
        </div>
        <input className="create-submit" type="submit" disabled={acceptTerms} />
      </main>
      <div className="footer">
        <p className="footer-title">Next-Gen Gaming</p>
        <p className="footer-certification">Ethan Pratt @2023</p>
      </div>
    </div>
  );
};
