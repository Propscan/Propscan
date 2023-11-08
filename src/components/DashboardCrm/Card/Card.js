import React from "react";

function Card({ bgColor, color }) {
  return (
    <div style={{ marginTop: "7vh" }}>
      <div
        style={{
          marginTop: "2vh",
          width: "150px",
          height: "179px",
          display: "flex",
          marginLeft: "8vh",
        }}
      >
        <div
          style={{
            // marginLeft: "7vh",F

            borderRadius: "8px",
            background: "var(--color-white, #FFF)",
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.16)",
          }}
        >
          <div class="card-body">
            <p className="paragraph5">New</p>
            <h6 className="card-title paragraph6">Property Address line 2</h6>
            <p className="card-text" style={{ marginLeft: "1.5vh" }}>
              City,State
            </p>
            <p
              style={{ marginTop: "2vh", marginLeft: "1.5vh" }}
              className="paragraph3"
            >
              Rs. 123456789
            </p>

            <div
              style={{
                backgroundColor: `${bgColor}`,

                width: "150px",
                height: "34px",
                borderRadius: "2px 2px 8px 8px",
                marginTop: "4vh",
              }}
            >
              {!bgColor ? (
                <p className="paragraph7">
                  <input type="checkbox" /> Contacted
                </p>
              ) : (
                <p
                  style={{
                    color: "#FFF",
                    fontSize: "12px",
                    fontFamily: " Poppins",
                    fontWeight: "500",
                    lineHeight: "16px",
                    textAlign: "center",
                   
                  }}
                >
                  See property details
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
