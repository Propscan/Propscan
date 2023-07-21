import React, { useState } from "react";
import Signup from "./signup/SignUp";
import Login from "./login/Login";
import LoginFooter from "./LoginFooter";

function LoginHome() {
  const [loginType, setLoginType] = useState("");
  const handleBack = () => {
    setLoginType("")
  }
  return (
    <div>
      {loginType === 'login' ? <Login handleBack = {handleBack} />
        :
      loginType === 'signup' ? <Signup handleBack = {handleBack} />
        :
      <div class="row login">
        <div
          class={"col d-flex justify-content-center"}
          style={{ padding: 0 }}
        >
          <div className="login-form">
            <div style={{ textAlign: "center", marginTop:"22px"}}>
              <img src="images/loginPropscan.png" alt="Not found!" />
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
                    onClick={() => setLoginType("signup")}
                  >
                    Sign Up
                  </button>
                  <button
                    className="btn1"
                    type="submit"
                    onClick={() => setLoginType("login")}
                  >
                    Login
                  </button>
                </div>
              </div>
            <LoginFooter />
            {/* {loginType === 'signup' && <Signup />} */}
          </div>
        </div>
      </div>
    }
    </div>
  );
}

export default LoginHome;
