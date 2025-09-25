import React, { useEffect, useState } from "react";

export default function FeaturedProperty() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setProperties(data.slice(0, 4))) 
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Featured Property</h2>
        <button className="btn btn-outline-primary rounded-pill px-4">
          See 268 new projects <span className="ms-1">→</span>
        </button>
      </div>

      
      <div className="row g-3">
       
        <div className="col-lg-5">
          {properties[0] && (
            <img
              src={properties[0].image}
              alt={properties[0].name}
              className="img-fluid w-100 h-100 rounded object-fit-cover"
              style={{ minHeight: "400px" }}
            />
          )}
        </div>

        
        <div className="col-lg-4">
          {properties[1] && (
            <img
              src={properties[1].image}
              alt={properties[1].name}
              className="img-fluid w-100 h-100 rounded object-fit-cover"
              style={{ minHeight: "400px" }}
            />
          )}
        </div>

       
        <div className="col-lg-3 d-flex flex-column gap-3">
          {properties[2] && (
            <img
              src={properties[2].image}
              alt={properties[2].name}
              className="img-fluid w-100 rounded object-fit-cover"
              style={{ height: "190px" }}
            />
          )}
          {properties[3] && (
            <img
              src={properties[3].image}
              alt={properties[3].name}
              className="img-fluid w-100 rounded object-fit-cover"
              style={{ height: "190px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
