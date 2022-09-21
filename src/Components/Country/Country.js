import React from "react";

const Country = (props) => {
  const { name, capital, area, population, flags } = props.country;
  return (
    <div className="col sm-p-2">
      <div className="card h-100 bg-dark text-success">
        <img
          src={flags ? flags.png : "no data found"}
          className="card-img-top w-100"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {name.common ? name.common : "no data found"}
          </h5>
          <h5>Capital: {capital ? capital : "no data found"}</h5>
          <p className="card-text">
            <small>Area: {area}</small>;{" "}
            <small>
              Population: {population ? population : "no data found"}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Country;
