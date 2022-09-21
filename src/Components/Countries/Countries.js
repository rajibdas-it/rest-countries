import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);
  return (
    <div className="container mt-5 text-success">
      <h2 className="fw-bold">
        Country information's Using Rest Countries API
      </h2>
      <p>
        Information of{" "}
        <span className="fs-1 fw-bold text-danger">{countries.length}</span>{" "}
        Countries
      </p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {countries.map((country) => (
          <Country country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
