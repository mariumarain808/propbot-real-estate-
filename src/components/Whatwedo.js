import React from "react";
import { House, Home, Search, ShieldCheck } from "lucide-react"; 


export default function WhatWeDo() {
  return (
    <section className="my-5 py-5 text-center">
      <div className="container">
    
        <h2 className="fw-bold ">What We Do?</h2>
        <p className="text-muted mb-5">
          Helping you find, buy, and rent the perfect property with ease
        </p>

        
        <div className="row g-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <House size={40} className="text-primary mb-3" />
              <h5 className="fw-bold">Buy & Sell Properties</h5>
              <p className="text-muted">
                Find verified homes for sale or lease with ease and confidence.
              </p>
            </div>
          </div>

        
          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <Home size={40} className="text-success mb-3" />
              <h5 className="fw-bold">Find Rental Homes</h5>
              <p className="text-muted">
                Explore rental properties that fit your budget and lifestyle.
              </p>
            </div>
          </div>


          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <Search size={40} className="text-warning mb-3" />
              <h5 className="fw-bold">Smart AI Property Search</h5>
              <p className="text-muted">
                Our AI-powered system helps you discover the best properties 
                tailored to your needs in just seconds.
              </p>
            </div>
          </div>

        
          <div className="col-12 col-md-6 col-lg-3">
            <div className="p-4 border rounded shadow-sm h-100">
              <ShieldCheck size={40} className="text-danger mb-3" />
              <h5 className="fw-bold">Safe & Secure Transactions</h5>
              <p className="text-muted">
                Enjoy seamless and secure property transactions you can trust.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
