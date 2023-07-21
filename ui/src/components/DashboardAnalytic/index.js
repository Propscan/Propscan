import React from "react";
import LoggedInHeader from "../header/LoggedInHeader";
import DashBoardNavbar from "../propertyForm/DashboardNavbar/DashboardNavbar";

function index() {
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div
        style={{ marginBottom: "3vh", marginLeft: "26vw", marginRight: "3vw" }}
      >
        <DashBoardNavbar />
      </div>
    </div>
  );
}

export default index;
