import "../../css/Mobile/Create-M.css";
import { CountryDropdown } from "react-country-region-selector";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Header } from "../../components/Mobile/Header-M";
import { Footer } from "../../components/Mobile/Footer-M";
import { MainLink } from "../../components/Mobile/MainLink-M";

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

  const createAccount2 = () => {
    navigate("/create2");
  };

  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="container-create">
        <Header />
        <MainLink />
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
        </main>
        <input
          className="create-submit"
          type="submit"
          disabled={acceptTerms}
          onClick={createAccount2}
        />
        <Footer />
      </div>
    </div>
  );
};
