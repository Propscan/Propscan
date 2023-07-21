import React, { useState } from "react";
import "./owner.css";
import axios from "axios";
import { propscan_base_url } from "../../utils/Route";
import Alert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  components: {
    // Name of the component
    MuiAlert: {
      defaultProps: {
        // The default props to change
        components: {
          CloseIcon: CloseIcon,
        },
      },
    },
  },
});

export default function Owner1() {
  const [full_name, setFull_Name] = useState("");
  const [phone_no, setPhone_No] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleChange = () => {
    setError(false);
    setSuccess(false);
    axios
      .post(`${propscan_base_url}/accounts/register`, {
        user: {
          full_name: full_name,
          phone_no: phone_no,
          email: email,
          user_type: "OWNER",
        },
        additional_phone_no: phone_no,
      })
      .then((res) => {
        console.log(res);
        console.log(res.status);
        if (res.status) setSuccess(res.status === 200 || res.status === 201);
        else {
          console.log(res);
          setError(true);
          setErrorMessage(res.response.data.error);
          // console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setErrorMessage(err.response.data.error);
      });
  };

  return (
    <div className="container">
      <div>
        <p className="paragraph1">Personal Information</p>
      </div>
      <div style={{ marginTop: "-1.5vh" }}>
        <div>
          <div>
            <div
              className="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: " 1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding: "0.7vh",
                  marginTop: "0.1vh",
                }}
              >
                <img src="images/name_icon.png" alt="Not found!" />
              </span>
              <input
                value={full_name}
                onChange={(e) => setFull_Name(e.target.value)}
                type="text"
                className="form-control"
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
              className="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
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
                placeholder="+91 Mobile Number"
                aria-label="phone"
                style={{ marginTop: "-1vh", borderRadius: "0px 30px 30px 0px" }}
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <div
              className="input-group mb-3"
              style={{ display: "flex", alignItems: "center" }}
            >
              <span
                className="input-group-text icon_style"
                style={{
                  backgroundColor: "white",
                  border: "1px solid #0D2855",
                  borderRadius: "30px 0px 0px 30px",
                  padding: "1.2vh",
                  marginTop: "-2vh",
                }}
              >
                <img src="images/email_icon.png" alt="Not found!" />
              </span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="form-control"
                placeholder="Email Id"
                aria-label="email"
                style={{ marginTop: "-1vh" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="form-check "
        style={{ marginLeft: "4vh", marginTop: "-1.5vh" }}
      >
        <input
          className="form-check-input checkout"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
      </div>
      <div style={{ marginTop: "-4.5vh", marginLeft: "6.5vh" }}>
        <label className="lable">Are you Broker?</label>
      </div>
      <div
        style={{ textAlign: "center", marginBottom: "0.6vh", marginTop: "2vh" }}
      >
        {success && (
          <ThemeProvider theme={theme}>
            <Alert
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
              }}
              severity="success"
              onClose={() => setSuccess(false)}
            >
              Register Successful. Please login to continue!
            </Alert>
          </ThemeProvider>
        )}
        {error && (
          <ThemeProvider theme={theme}>
            <Alert
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
              }}
              severity="error"
              onClose={() => setError(false)}
            >
              {errorMessage}
            </Alert>
          </ThemeProvider>
        )}

        <button className="btn1" type="submit" onClick={handleChange}>
          CONFIRM
        </button>
      </div>
    </div>
  );
}
