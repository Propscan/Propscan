import React from "react";
import "./login.css";

function index() {
  return (
    <div className="login">
      <form>
        <div className="form">
          <div style={{ textAlign: "center" }}>
            <img src="images/loginPropscan.png" />
          </div>
          <div className="mb-3" style={{ marginTop: "2.5vh" }}>
            <p className="p1">Your Trusted Real Estate Partner</p>
          </div>
          <div className="p2">Continue as</div>
          <div style={{ textAlign: "center", margin: "1vw" }}>
            <button className="btn1" type="submit">
              OWNER/BROKER
            </button>
            <button className="btn1" type="submit">
              CUSTOMER
            </button>
          </div>
        </div>

        <div className="icon_div">
          <img className="icons" src="images/facebook_icon.png" />
          <img className="icons" src="images/Twitter_icon.png" />
          <img className="icons" src="images/Insta_icon.png" />
          <img className="icons" src="images/LinkedIn_icon.png" />
        </div>
      </form>
    </div>
  );
}

export default index;
