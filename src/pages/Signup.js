import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import houseImg from "../assets/loginhome.avif"; 
import { useNavigate, Link } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // ✅ Store the signed-up user's email in local storage
      localStorage.setItem("loggedInUser", userCredential.user.email);

      alert("Account created successfully!");
      navigate("/Home");
    } catch (error) {
      alert(error.message);
    }
  };

  const isMobile = windowWidth <= 768;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      
      {/* Navbar */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px",
        borderBottom: "1px solid #ddd",
        flexWrap: "wrap"
      }}>
        <button
          onClick={() => navigate("/Home")}
          style={{
            background: "white",
            color: "#007bff",
            border: "1px solid #007bff",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            marginBottom: isMobile ? "10px" : "0"
          }}
        >Back to Home</button>

        <div style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold", flex: 1 }}>
          MyApp Title
        </div>

        <button 
          onClick={() => navigate("/About us")}
          style={{
            background: "#007bff",
            color: "white",
            padding: "6px 12px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            marginTop: isMobile ? "10px" : "0"
          }}
        >About Us</button>
      </div>

      {/* Main Content */}
      <div style={{ display: "flex", flex: 1, flexDirection: isMobile ? "column" : "row" }}>
        {/* Left Form Section */}
        <div style={{ flex: isMobile ? "1" : "0.4", padding: "40px" }}>
          <h2>Create Account</h2>
          <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            
            <label>Full Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <label>Password</label>
            <input 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <label>Confirm Password</label>
            <input 
              type="password" 
              placeholder="Confirm your password" 
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
            />

            <button type="submit" style={{
              background: "#007bff",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>Create Account</button>
          </form>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            Already have an account?
            <Link
              style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
              to="/Login"
            >Login</Link>
          </div>
        </div>

        {/* Right Image Section */}
        <div style={{ flex: isMobile ? "1" : "0.6", minHeight: isMobile ? "300px" : "auto" }}>
          <img 
            src={houseImg} 
            alt="House" 
            style={{ width: "100%", height: "100%", objectFit: "cover" }} 
          />
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
