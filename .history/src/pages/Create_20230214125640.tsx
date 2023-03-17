import "../css/Create.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import { Link } from "react-router-dom";

export const Create = () => {
  const [country, setCountry] = useState("");

  const [date, setDateValue] = useState(new Date());

  return (
    <div className="container">
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
        <h3 className="residence-title">Country of residence</h3>
        <CountryDropdown
          className="country-picker"
          value={country}
          onChange={(val) => setCountry(val)}
        />
        <h3>Date of birth</h3>
        <DatePicker
          className="date-picker"
          onChange={setDateValue}
          value={date}
        />
      </main>
    </div>
  );
};
