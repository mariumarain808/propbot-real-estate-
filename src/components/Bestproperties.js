import React, { useEffect, useState } from "react";

const FeaturedProperties = ({ title, buttonText, start = 0, end = 4 }) => {
  const [properties, setProperties] = useState([]);
  const [columns, setColumns] = useState(4);

  // Fetch data
  useEffect(() => {
    fetch(
      "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
    )
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  
  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 600) {
        setColumns(1); // mobile
      } else if (window.innerWidth < 900) {
        setColumns(2); // tablet
      } else if (window.innerWidth < 1200) {
        setColumns(3); // small laptop
      } else {
        setColumns(4); // desktop
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  return (
    <div style={{ width: "90%", margin: "40px auto" }}>
    
      <div
        style={{
          display: "flex",
          flexDirection: window.innerWidth < 600 ? "column" : "row",
          justifyContent: "space-between",
          alignItems: window.innerWidth < 600 ? "flex-start" : "center",
          marginBottom: "20px",
          gap: "10px",
        }}
      >
        <div>
          <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1a2b6d" }}>
            {title}
          </h2>
          <p style={{ color: "#555", marginTop: "5px", fontSize: "14px" }}>
            Browse our top-rated properties for sale, featuring premium listings <br />
            tailored to your needs. Find your dream home today!
          </p>
        </div>
        <button
          style={{
            background: "#1a2b6d",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "14px",
            alignSelf: window.innerWidth < 600 ? "flex-start" : "center",
          }}
        >
          {buttonText}
        </button>
      </div>

  
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "20px",
        }}
      >
        {properties.slice(start, end).map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            
            <img
              src={item.image || "https://via.placeholder.com/250"}
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                borderRadius: "12px",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />

            
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
                marginBottom: "5px",
                flexWrap: "wrap",
              }}
            >
              <span style={{ color: "#777" }}>
                📍 {item.city}, {item.country}
              </span>
              <span style={{ color: "#f4b400", fontWeight: "bold" }}>
                ⭐ {item.rating || "4.5"}/5
              </span>
            </div>

        
            <p
              style={{
                color: "#333",
                fontSize: "14px",
                lineHeight: "1.4",
                marginBottom: "10px",
              }}
            >
              Beautiful {item.name} located in {item.city}, {item.country}.
              Modern amenities and prime location.
            </p>

        
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginTop: "auto",
              }}
            >
              <button
                style={{
                  background: "#1a2b6d",
                  color: "#fff",
                  border: "none",
                  padding: "8px 16px",
                  borderRadius: "20px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Buy Now
              </button>
              <span style={{ fontWeight: "bold", color: "#222" }}>
                ${item.price || "250,000"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProperties;
