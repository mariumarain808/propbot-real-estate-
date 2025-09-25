import React, { useEffect, useState } from "react";
import { FaDollarSign, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import img1 from "../assets/home2.jpeg"; 
import img2 from "../assets/home3.jpeg"; 
const PropertySection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div
      style={{
        ...styles.propertySection,
        flexDirection: isMobile ? "column" : "row",
        padding: isMobile ? "20px" : "50px",
        margin: isMobile ? "20px auto" : "auto auto auto 50px",
      }}
    >
     
      <div
        style={{
          ...styles.imagesContainer,
          marginBottom: isMobile ? "20px" : "0",
          width: isMobile ? "100%" : "300px",
          height: isMobile ? "250px" : "300px",
        }}
      >
        <img src={img1} alt="Property 1" style={{ ...styles.image, zIndex: 0 }} />
        <img
          src={img2}
          alt="Property 2"
          style={{ ...styles.image, ...styles.img2, zIndex: 1 }}
        />
      </div>

      
      <div style={{ ...styles.contentContainer, margin: isMobile ? "0" : "40px" }}>
        <h2
          style={{
            ...styles.heading,
            width: isMobile ? "100%" : "400px",
            fontSize: isMobile ? "20px" : "24px",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          We provide latest properties for our valuable clients
        </h2>

        <div style={styles.iconSection}>
          <div style={styles.iconItem}>
            <FaDollarSign style={styles.icon} />
            <div>
              <h3 style={styles.subHeading}>Budget Friendly</h3>
              <p
                style={{
                  ...styles.paragraph,
                  width: isMobile ? "100%" : "400px",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                maxime quisquam ab exercitationem vero obcaecati consequuntur
                deserunt numquam.
              </p>
            </div>
          </div>

          <div style={styles.iconItem}>
            <FaUsers style={styles.icon} />
            <div>
              <h3 style={styles.subHeading}>Trusted by Thousand</h3>
              <p
                style={{
                  ...styles.paragraph,
                  width: isMobile ? "100%" : "400px",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Thousands of clients trust our services. Ipsum maxime quisquam ab
                exercitationem vero obcaecati consequuntur deserunt numquam.
              </p>
            </div>
          </div>

          <div style={styles.iconItem}>
            <FaMapMarkerAlt style={styles.icon} />
            <div>
              <h3 style={styles.subHeading}>Prime Location</h3>
              <p
                style={{
                  ...styles.paragraph,
                  width: isMobile ? "100%" : "400px",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                Properties located in prime areas. Ipsum maxime quisquam ab
                exercitationem vero obcaecati consequuntur deserunt numquam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  propertySection: {
    display: "flex",
    gap: "50px",
    alignItems: "center",
  },
  imagesContainer: {
    position: "relative",
    width: "300px",
    height: "300px",
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
  },
  img2: {
    left: "50px",
    top: "20px",
  },
  contentContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  iconSection: {
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  iconItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: "10px",
  },
  icon: {
    fontSize: "30px",
    marginTop: "5px",
    color: "#1e90ff",
  },
  subHeading: {
    fontSize: "18px",
  },
  paragraph: {
    margin: "0",
    fontSize: "14px",
    color: "#555",
  },
};

export default PropertySection;
