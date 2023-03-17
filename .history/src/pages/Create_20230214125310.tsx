import "../css/Create.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import React, { useState } from "react";
import DatePicker from "react-date-picker";

export const Create = () => {
  const [country, setCountry] = useState("");

  const [date, setDateValue] = useState(new Date());

  return (
    <div className="container">
      <div className="header"></div>
      <h3>Country of residence</h3>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
      <h3>Date of birth</h3>
      <DatePicker
        className="date-picker"
        onChange={setDateValue}
        value={date}
      />
    </div>
  );
};
