import React, { useState } from "react";
import Owner from "../owner/Owner1";
import Customer from "../customer/Customer1";
import "./SignUp.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function SignUp() {
  const [Button, setButton] = useState("");
  return (
    <div class="row login">
      {Button === "Owner" && (
        <div class="col" style={{ textAlign: "right", padding: 0 }}>
          <img src="images/image 6.png" alt="Not found!" />
        </div>
      )}
      {Button === "Customer" && (
        <div class="col" style={{ textAlign: "right", padding: 0 }}>
          <img src="images/Group 42.png" alt="Not found!" />
        </div>
      )}
      <div
        class={Button === "" ? "col d-flex justify-content-center" : "col"}
        style={{ padding: 0 }}
      >
        <div className="form">
          {/* {Button !== "" && (
            <div>
              <button
                type="click"
                class="btn btn btn2"
                onClick={() => setButton("")}
              >
                <NavigateBeforeIcon
                  style={{ padding: "0.5vh", marginLeft: "0vh" }}
                />
                Back
              </button>
            </div>
          )} */}
          <div style={{ textAlign: "center" }}>
            <img src="images/loginPropscan.png" alt="Not found!" />
          </div>
          {Button === "Owner" ? (
            <Owner></Owner>
          ) : Button === "Customer" ? (
            <Customer></Customer>
          ) : (
            <div>
              <div className="mb-3" style={{ marginTop: "2.5vh" }}>
                <p className="paragraph">Your Trusted Real Estate Partner</p>
              </div>
              <div className="p2">Continue as</div>
              <div style={{ textAlign: "center", margin: "1vw" }}>
                <button
                  className="btn1"
                  type="submit"
                  onClick={() => setButton("Owner")}
                >
                  OWNER/BROKER
                </button>
                <button
                  className="btn1"
                  type="submit"
                  onClick={() => setButton("Customer")}
                >
                  CUSTOMER
                </button>
              </div>
            </div>
          )}
          <div className="icon_div">
            <img
              src="images/facebook_icon.png"
              alt="Not found!"
              style={{ height: "3vh", width: "auto" }}
            />
            <img
              src="images/Twitter_icon.png"
              alt="Not found!"
              style={{ height: "4vh", width: "auto", marginTop: "1vh" }}
            />
            <img
              src="images/Insta_icon.png"
              alt="Not found!"
              style={{ height: "3vh", width: "auto" }}
            />
            <img
              src="images/LinkedIn_icon.png"
              alt="Not found!"
              style={{ height: "4.2vh", width: "auto", marginTop: "1.2vh" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
