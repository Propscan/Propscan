import React from "react";
import LoggedInHeader from "../../header/LoggedInHeader";
import DashBoardNavbar from "../../propertyForm/DashboardNavbar/DashboardNavbar";
import CrmNavbar from "../CrmNavbar";
import CrmCard from "../Card/CrmCard";

function CrmOverview() {
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
            <CrmNavbar></CrmNavbar>
          </div>
          <div class="col" style={{ marginLeft: "5vh" }}>
            <CrmCard></CrmCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmOverview;
