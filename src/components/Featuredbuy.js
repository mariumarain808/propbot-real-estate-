import React, { useEffect, useState } from "react";

const FeaturedProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setProperties(data.slice(0, 25))) // show only 25
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div style={{ width: "90%", margin: "auto", padding: "40px 0" }}>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "25px",
          gap: "10px",
        }}
      >
        <h2 style={{ fontSize: "28px", fontWeight: "bold" }}>
          Featured Property
        </h2>
        <button
          style={{
            padding: "10px 20px",
            border: "1px solid #0056ff",
            background: "transparent",
            color: "#0056ff",
            fontWeight: "500",
            borderRadius: "25px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.background = "#0056ff";
            e.target.style.color = "white";
          }}
          onMouseOut={(e) => {
            e.target.style.background = "transparent";
            e.target.style.color = "#0056ff";
          }}
        >
          See 268 New Projects ↗
        </button>
      </div>

      
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {properties.length === 0 ? (
          <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
            No properties found.
          </p>
        ) : (
          properties.map((property, index) => (
            <div key={index} style={{ borderRadius: "12px", overflow: "hidden" }}>
          
              <img
                src={`https://picsum.photos/500/300?random=${index}`}
                alt={property.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
              />

        
              <div
                style={{
                  background: "white",
                  borderRadius: "12px",
                  padding: "15px",
                  marginTop: "-40px",
                  width: "85%",
                  marginLeft: "auto",
                  marginRight: "auto",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                  position: "relative",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    marginBottom: "6px",
                    color: "#0a2a66",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  📍 {property.name}, {property.city}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "#555",
                    marginBottom: "12px",
                    lineHeight: "1.4",
                    height: "40px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Beautiful {property.name} located in {property.city},{" "}
                  {property.country}. Modern amenities and prime location.
                </p>

            
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: "bold",
                      color: "#000",
                    }}
                  >
                    ${property.buildingNumber * 300}
                  </span>
                  <button
                    style={{
                      padding: "8px 16px",
                      border: "none",
                      borderRadius: "20px",
                      background: "#0056ff",
                      color: "white",
                      cursor: "pointer",
                      transition: "background 0.3s",
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.background = "#003bb3")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.background = "#0056ff")
                    }
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeaturedProperty;
