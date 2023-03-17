import "../css/Create.css";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import React, { useState } from "react";

  const Example = () => {
    const [country, setCountry] = useState("");
  };
  return (
    <div>
      <CountryDropdown  value={country} onCnange={setCountry(val)}/>
    </div>
  );
};
