import React, { useState, useEffect } from "react";
import { auth } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import houseImg from "../assets/loginhome.avif"; // replace with your image
import img from '../assets/logo.png'
import { useNavigate, Link } from "react-router-dom";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Single handleLogin function with localStorage
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);

      // Store the logged-in user's email in local storage
      localStorage.setItem("loggedInUser", userCredential.user.email);

      alert("Login successful!");
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
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={img}
              alt="Logo"
              width="40"
              height="40"
              className="d-inline-block align-text-top me-2"
            />
            <span className="fw-bold fs-5">Bootstrap</span>
          </Link>
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
          <h2>Login</h2>
          <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
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

            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", flexWrap: "wrap" }}>
              <label style={{ marginBottom: isMobile ? "5px" : "0" }}>
                <input type="checkbox" /> Remember me
              </label>
              <span style={{ color: "#007bff", cursor: "pointer" }}>Forgot Password?</span>
            </div>

            <button type="submit" style={{
              background: "#007bff",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer"
            }}>Login</button>
          </form>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <p>or continue with</p>
            <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
              <FaApple/>
              <FaFacebook/>
              <FaGoogle/>
            </div>
          </div>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            Don’t have an account? 
            <Link
              style={{ color: "#007bff", cursor: "pointer", marginLeft: "5px" }}
              to="/Signup"
            >Create one</Link>
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

export default LoginPage;
