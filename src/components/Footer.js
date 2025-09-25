import React, { useState } from "react";
import logo from "../assets/logo.png"; 

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please fill out this form");
    } else {
      alert(`Thank you for subscribing with ${email}`);
      setEmail("");
    }
  };

  return (
    <footer
      style={{
        backgroundColor: "#1c3f6c",
        color: "white",
        padding: "40px 20px",
      }}
    >
      
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "26px", marginBottom: "10px" }}>
          Get in touch with us
        </h1>
        <h2 style={{ fontSize: "18px", fontWeight: "400" }}>
          Subscribe now for exclusive property insights and deals
        </h2>

       
        <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
          <div
            style={{
              position: "relative",
              maxWidth: "350px",
              margin: "0 auto",
              width: "100%",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px 15px",
                paddingRight: "110px",
                borderRadius: "50px",
                border: "none",
                fontSize: "16px",
              }}
            />
            <button
              type="submit"
              style={{
                position: "absolute",
                right: "5px",
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                borderRadius: "50px",
                backgroundColor: "#0d6efd",
                color: "white",
                padding: "8px 20px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>

     
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap", 
          gap: "20px",
          borderTop: "1px solid rgba(255,255,255,0.3)",
          paddingTop: "20px",
          textAlign: "center",
        }}
      >
        
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            justifyContent: "center",
            flex: "1 1 100px",
          }}
        >
          <img src={logo} alt="Logo" style={{ width: "40px", height: "40px" }} />
          <span style={{ fontWeight: "bold", fontSize: "18px" }}>Prop Boot</span>
        </div>

        
        <div
          style={{
            display: "flex",
            gap: "15px",
            flex: "1 1 200px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            For Sale
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Rentals
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            New Projects
          </a>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Property News
          </a>
        </div>

       
        <div style={{ fontSize: "14px", flex: "1 1 100px" }}>
          © 2025 Prop Boot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
