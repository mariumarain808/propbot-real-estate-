// JourneyFormInline.js
import React, { useState, useEffect } from "react";

const JourneyFormInline = () => {
  const [userType, setUserType] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  // Detect screen size
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 600);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const containerStyle = {
    margin: "auto auto auto 50px",
    maxWidth: "800px",
  };

  const headingStyle = {
    color: "#1D4ED8",
    fontSize: "33px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subheadingStyle = {
    color: "#555",
    marginBottom: "10px",
    marginTop: "-6px",
  };

  const formStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    alignItems: "flex-end",
    flexDirection: isMobile ? "column" : "row", 
  };

  const inputStyle = {
    flex: 1,
    minWidth: isMobile ? "100%" : "200px", 
    padding: "8px 7px",
    borderRadius: "6px",
    border: "2px solid #34039eff",
  };

  const buttonStyle = {
    backgroundColor: "#1D4ED8",
    color: "white",
    padding: "10px 30px",
    borderRadius: "40px",
    border: "none",
    cursor: "pointer",
    width: isMobile ? "100%" : "auto", 
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Start Your Journey Today</h2>
      <p style={subheadingStyle}>
        Create a profile in seconds and find your ideal home
      </p>

      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          style={inputStyle}
          required
        />

        <select
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          style={inputStyle}
          required
        >
          <option value="">Select user type</option>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>

        <input
          type="text"
          placeholder="Enter your location"
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          Continue
        </button>
      </form>
    </div>
  );
};

export default JourneyFormInline;
