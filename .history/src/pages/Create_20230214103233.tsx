import "../css/Create.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import React, { useState } from "react";

export const Create = () => {
  const example = () => {
    const [country, setCountry] = useState("");
  };
  return (
    <div className="container">
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
    </div>
  );
};
