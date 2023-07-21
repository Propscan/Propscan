import React, { useState, useEffect } from "react";
import "./customer.css";
import axios from "axios";
import { propscan_base_url } from "../../utils/Route";
import LoginFooter from "../LoginFooter";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';

function Customer1(props) {
  const [full_name, setFull_Name] = useState("");
  const [phone_no, setPhone_No] = useState("");
  const [email, setEmail] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [sevAlert, setSevAlert] = useState("");
  const [msgAlert, setMsgAlert] = useState("");

  const handleChange = (e) => {
    setOpenAlert(false)
    e.preventDefault();

    // Check validities
    var emailEle = document.getElementById("email");
    var fullnameEle = document.getElementById("fullname");
    var phonenoEle = document.getElementById("phoneno");

    fullnameEle.checkValidity();
    fullnameEle.reportValidity();
    emailEle.checkValidity();
    emailEle.reportValidity();
    phonenoEle.checkValidity();
    phonenoEle.reportValidity();

    if(!(full_name && phone_no && email))
      return

    axios
      .post(`${propscan_base_url}/accounts/register`, {
        user: {
          "full_name": full_name,
          "phone_no": phone_no,
          "email": email,
          "user_type": "BUYER",
        },
      })
      .then((res) => {
        setSevAlert("success")
        setMsgAlert("Signup is successful. Please login to proceed!")
        setOpenAlert(true)
      })
      .catch((err) => {
        setSevAlert("error")
        setMsgAlert(err.response.data.error)
        setOpenAlert(true)
      });
  };

  useEffect(() => {
    function handleResizeImage() {
      const loginForm = document.querySelector('.login-form');
      const customerImage = document.querySelector('.customer-image');
      if(window.getComputedStyle(loginForm) && window.getComputedStyle(loginForm).height && customerImage){
        const loginFormHeight = window.getComputedStyle(loginForm).height;
        customerImage.style.height = loginFormHeight
      }
    }

    window.addEventListener('resize', handleResizeImage)
    handleResizeImage()
  })

  return (
    <div class="row login">
      <div style={{padding:0, display:"flex", alignItems:"center",justifyContent:"center"}}>
        <div className="d-none d-md-block customer-image">
          <img src="images/Group 42.png" alt="Not found!" style={{height:"100%"}}/>
        </div>
        <div class="login-form">
              <div style={{width:"100%", textAlign:"left", marginLeft:"21px", padding:0}}>
                <button
                  type="click"
                  class="btn back-btn2"
                  onClick={() => props.handleBack()}
                >
                  <NavigateBeforeIcon
                    style={{ padding: 0, margin:0, fontSize:"18px" }}
                  />
                  Back
                </button>
              </div>
          <div style={{ textAlign: "center" }}>
            <img src="images/loginPropscan.png" alt="Not found!" />
          </div>
        <div>
          <p className="paragraph1">Personal Information</p>
        </div>
        <div style={{padding:"0px 10px"}}> 
          <form onsubmit="return false">
          <div>
            <div>
              <div
                class="input-group"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  class="input-group-text icon_style"
                  style={{
                    backgroundColor: "white",
                    border: " 1px solid #0D2855",
                    borderRadius: "30px 0px 0px 30px",
                    padding: "5px",
                  }}
                >
                  <img src="images/name_icon.png" alt="Not found!" />
                </span>
                <input
                  type="text"
                  value={full_name}
                  onChange={(e) => setFull_Name(e.target.value)}
                  className="signup-input form-control"
                  placeholder="Full Name"
                  aria-label="Full Name"
                  id="fullname"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                class="input-group"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  class="input-group-text icon_style"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #0D2855",
                    borderRadius: "30px 0px 0px 30px",
                    padding: "5.5px"
                  }}
                >
                  <img src="images/smartphone_icon.png" alt="Not found!" />
                </span>
                <input
                  type="tel"
                  value={phone_no}
                  onChange={(e) => setPhone_No(e.target.value)}
                  class="signup-input form-control"
                  placeholder="+91  Mobile Number"
                  aria-label="phone"
                  id="phoneno"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div
                class="input-group"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  class="input-group-text icon_style"
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #0D2855",
                    borderRadius: "30px 0px 0px 30px",
                    padding: "8.5px",
                  }}
                >
                  <img src="images/email_icon.png" alt="Not found!" />
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class="signup-input form-control"
                  placeholder="Email Id"
                  aria-label="email"
                  required
                  id="email"
                  />
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBottom: "0.6vh" }}>
          <button className="btn1" type="submit" onClick={handleChange}>
            CONFIRM
          </button>
        </div>
          </form>
        </div>
        <LoginFooter />  
        </div>
      </div>
      <Collapse in={openAlert} style={{width:"auto", position:"absolute", bottom:21}}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpenAlert(false);
              }}
            >
              <CloseIcon style={{fontSize:"14px"}} />
            </IconButton>
          }
          style={{width:"auto", fontSize:"12px"}}
          severity={sevAlert}
          // sx={{ mb: 2 }}
        >
          {msgAlert}
        </Alert>
      </Collapse>
    </div>
  );
}

export default Customer1;
