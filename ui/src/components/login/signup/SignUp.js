import React, { useState } from "react";
import Owner from "../owner/Owner1";
import Customer from "../customer/Customer1";
import "./SignUp.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import LoginFooter from "../LoginFooter";

function SignUp(props) {
  const [signupType, setSignupType] = useState("");
  const handleBack = () => {
    setSignupType("")
  }
  return (
    <div>
      {
        signupType === 'customer' ? <Customer handleBack={handleBack}/>
        :
        signupType === 'broker' ? <Owner handleBack={handleBack}/>
        :
        <div class="row login">
        <div
          class={"col d-flex justify-content-center"}
          style={{ padding: 0 }}
        >
        <div className="login-form">
          <div>
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
              <div style={{width:"100%", textAlign:"center"}}>
                <img src="images/loginPropscan.png" alt="Not found!" />
              </div>
          </div>
            <div>
              <div className="mb-3" style={{ marginTop: "15px" }}>
                <p className="info-paragraph">Your Trusted Real Estate Partner</p>
              </div>
              <div className="continue-text">Continue as</div>
              <div style={{ textAlign: "center", marginTop:'64px'}}>
                <button
                  className="btn1"
                  type="submit"
                  onClick={() => setSignupType("customer")}
                >
                  Customer
                </button>
                <button
                  className="btn1"
                  type="submit"
                  onClick={() => setSignupType("broker")}
                >
                  Owner/Broker
                </button>
              </div>
            </div>
          <LoginFooter />      
          </div>
      </div>
    </div>
}
  </div>
  );
}

export default SignUp;
