import React, { useEffect, useState } from "react";
import axios from "axios";
import LoginFooter from "../LoginFooter";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import CloseIcon from '@mui/icons-material/Close';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import { propscan_base_url } from "../../utils/Route";
import Otp from "./otp";

function Login(props) {
  const [phone_no, setPhone_No] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [sevAlert, setSevAlert] = useState("");
  const [msgAlert, setMsgAlert] = useState("");

  const handleChange = (e) => {
    setOpenAlert(false)
    e.preventDefault();

    // Check validities
    var phonenoEle = document.getElementById("phoneno");
    phonenoEle.checkValidity();
    phonenoEle.reportValidity();
    
    if(!phone_no)
      return
    
    axios
    .post(`${propscan_base_url}/accounts/login_user/`, {
      phone_number: phone_no,
    })
    .then((res) =>{
      setSevAlert("error")
      setMsgAlert("Error while sending OTP")
      setOpenAlert(true)
    })
    .catch((err) => {
      console.log(err)
      setSevAlert("error")
      setMsgAlert(err.response.data.error)
      setOpenAlert(true)
      // console.log(err);
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
  console.log(msgAlert)
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
          </div>
          <div>
            <div>
              <div
                class="input-group"
                style={{ display: "flex", alignItems: "center", paddingTop:"42px" }}
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
              <div style={{textAlign:"center", fontFamily:"Segoe UI", fontSize:"12px"}}>Enter the registered phone number to receive OTP for login.</div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginBottom: "0.6vh" , paddingTop:"42px" }}>
          <button className="btn1" type="submit" onClick={handleChange}>
            GENERATE OTP
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

export default Login;
