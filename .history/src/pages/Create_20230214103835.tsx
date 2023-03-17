import "../css/Create.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import React, { useState } from "react";

export const Create = () => {
  const [country, setCountry] = useState("");
  return (
    <div>
      <h3>Country of residence</h3>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
    </div>
  );
};
