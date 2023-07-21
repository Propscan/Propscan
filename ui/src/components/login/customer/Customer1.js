import React, { useState } from "react";
import "./customer.css";
import axios from "axios";
import { propscan_base_url } from "../../utils/Route";

function Customer1() {
  const [full_name, setFull_Name] = useState("");
  const [phone_no, setPhone_No] = useState("");
  const [email, setEmail] = useState("");
  console.log(full_name);
  console.log(phone_no);
  console.log(email);

  const handleChange = () => {
    axios
      .post(`${propscan_base_url}/accounts/register`, {
        user: {
          "full_name": full_name,
          "phone_no": phone_no,
          "email": email,
          "user_type": "BUYER",
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div class="container">
        <div>
          <p className="paragraph1">Personal Information</p>
        </div>
        <div>
          <div>
            <div>
              <div
                class="input-group mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  class="input-group-text icon_style"
                  style={{
                    backgroundColor: "white",
                    border: " 1px solid #0D2855",
                    borderRadius: "30px 0px 0px 30px",
                    padding: "0.7vh",
                    marginTop: "0vh",
                  }}
                >
                  <img src="images/name_icon.png" alt="Not found!" />
                </span>
                <input
                  type="text"
                  value={full_name}
                  onChange={(e) => setFull_Name(e.target.value)}
                  class="form-control"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  style={{ marginTop: "1vh" }}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                class="input-group mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  class="input-group-text icon_style"
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
                  class="form-control"
                  placeholder="+91  Mobile Number"
                  aria-label="phone"
                  style={{ marginTop: "-1vh" }}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                class="input-group mb-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  class="input-group-text icon_style"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #0D2855",
                    borderRadius: "30px 0px 0px 30px",
                    padding: "1.2vh",
                    marginTop: "-1.9vh",
                  }}
                >
                  <img src="images/email_icon.png" alt="Not found!" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="form-control"
                  placeholder="Email Id"
                  aria-label="email"
                  style={{ marginTop: "-1vh" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: "0.6vh" }}>
          <button className="btn1" type="submit" onClick={handleChange}>
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  );
}

export default Customer1;
