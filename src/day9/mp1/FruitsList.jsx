import React from "react";

const FruitsList = () => {
  const fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {fruits.map((fruit, index) => (
          <React.Fragment key={index}>
            <li
              style={{
                fontSize: "20px",
                margin: "8px 0",
                padding: "5px 10px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                width: "200px",
                marginInline: "auto",
              }}
            >
              {fruit}
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default FruitsList;
