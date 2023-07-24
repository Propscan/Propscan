import React from "react";
import LoggedInHeader from "../header/LoggedInHeader";
import DashBoardNavbar from "../propertyForm/DashboardNavbar/DashboardNavbar";
import CmaNavbar from "./CmaNavbar/CmaNavbar";
import DashboardCma from "./DashboardCma"


function index() {
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div
        style={{ marginBottom: "3vh", marginLeft: "26vw", marginRight: "3vw" }}
      >
        <DashBoardNavbar />
      </div>
      <div>
        <div className="row">
          <div className="col-2">
            <CmaNavbar></CmaNavbar>
          </div>
          <div class="col" style={{ marginLeft: "5vh" }}>
            <DashboardCma/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
