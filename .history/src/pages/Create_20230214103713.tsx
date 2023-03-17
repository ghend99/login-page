import "../css/Create.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import React, { useState } from "react";

const Create = () => {
  const [country, setCountry] = useState("");
  return (
    <div>
      <CountryDropdown value={country} onChange={(val) => setCountry(val)} />
    </div>
  );
};
