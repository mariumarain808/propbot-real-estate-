import React from "react";
import heroImg from "../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="hero position-relative text-center"
      style={{ backgroundColor: "white", padding: "40px 0" }} 
    >
      
      <div className="d-flex justify-content-center" style={{ padding: "0 20px" }}>
       
        <div style={{ maxWidth: "1100px", width: "100%", position: "relative" }}>
         
          <img
            src={heroImg}
            alt="Dream House"
            className="img-fluid"
            style={{
              maxHeight: "600px",
              width: "100%",
              borderRadius: "30px",
              objectFit: "cover",
            }}
          />

         
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.45)",
              borderRadius: "30px",
            }}
          ></div>

          
          <div className="position-absolute top-0 start-50 translate-middle-x text-white px-3 pt-4 w-100 text-center">
            <h1 className="fw-bold display-5 mb-2">
              Find Your Dream House in One Click
            </h1>
            <p className="lead mb-4">
              Discover, buy or rent verified properties with ease
            </p>
          </div>

          
          <div
            className="position-absolute start-50 translate-middle-x text-center w-100 px-3"
            style={{ top: "500px" }}
          >
            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Search your location"
                style={{ maxWidth: "250px", borderRadius: "10px" }}
              />
              <button
                className="btn btn-primary w-100 w-sm-auto"
                style={{ maxWidth: "150px", borderRadius: "10px" }}
              >
                List Your Property
              </button>
            </div>
          </div>

          
          <div
            className="bg-white shadow-lg p-3 rounded position-absolute start-50 translate-middle-x"
            style={{
              bottom: "-50px", 
              width: "92%",
              maxWidth: "1100px",
            }}
          >
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-lg-3">
                <select className="form-select">
                  <option>Rent</option>
                  <option>For Sale</option>
                  <option>For Lease</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <select className="form-select">
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                  <option>Villa</option>
                  <option>Townhouse</option>
                  <option>Studio</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-lg-3">
                <select className="form-select">
                  <option>Indonesia</option>
                  <option>USA</option>
                  <option>UK</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>Germany</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 d-grid">
                <button className="btn btn-success">Find Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
