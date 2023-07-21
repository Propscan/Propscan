import React, { useEffect, useState } from "react";
import axios from "axios";
import { propscan_base_url } from "../../utils/Route";
import Otp from "./otp";

function Login(props) {
  const [button, setButton] = useState("");
  const [phone_no, setPhone_No] = useState("");
  const handleSubmit = () => {
    axios
      .post(`${propscan_base_url}/accounts/login_user/`, {
        phone_number: phone_no,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div
        className="input-group mb-3"
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "15vh",
          width: "240px",
          marginLeft: "3vh",
        }}
      >
        <span
          className="input-group-text icon_style"
          style={{
            backgroundColor: "white",
            border: "1px solid #0D2855",
            borderRadius: "30px 0px 0px 30px",
            padding: "0.8vh",
            marginTop: "-2vh",
          }}
        >
          <img src="images/smartphone_icon.png" alt="Not found!" />
        </span>
        <input
          type="tel"
          value={phone_no}
          onChange={(e) => setPhone_No(e.target.value)}
          className="form-control"
          placeholder="Enter Number"
          aria-label="phone"
          style={{ marginTop: "-1vh", borderRadius: "0px 30px 30px 0px" }}
        />
      </div>
      <div
        style={{
          marginTop: "12vh",
          marginLeft: "5vh",
        }}
      >
        <button
          onClick={(handleSubmit, () => setButton("Otp"))}
          style={{
            width: "220px",
            height: "32px",
            borderRadius: "40px",
            background: "#092C4C",
            color: "#FFF",
            textAlign: "center",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "16px",
          }}
          type="button"
        >
          Send Otp
        </button>
      </div>
    </div>
  );
}

export default Login;
