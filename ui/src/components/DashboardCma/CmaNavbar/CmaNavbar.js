import React from "react";
// import "./CrmNavbar.css";

function CmaNavbar() {
  return (
    <nav
      className="navbar-expand"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        width: "250px",
        height: "950px",
        padding: "3.5vh",
        marginTop: "-11vh",
        marginLeft: "-2vh",
      }}
    >
      <div className="container">
        <a
          className="nav-link a_style1"
          href="/"
          style={{
            backgroundColor: window.location.pathname === "/" ? "#E8F9FD" : "",
          }}
        >
          Active Listings
        </a>
        <a
          style={{
            backgroundColor: window.location.pathname === "/" ? "#E8F9FD" : "",
          }}
          className="nav-link active a_style1"
          href="/"
        >
          Pending Listings
        </a>
        <a
          href="/"
          style={{
            backgroundColor: window.location.pathname === "/" ? "#E8F9FD" : "",
          }}
          className="nav-link active a_style1"
        >
          Sold Price Listings
        </a>
        <a
          href="/properties-dashboard/crm/qualified"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/crm/qualified"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Cancelled/Off Market Listings
        </a>
      </div>
    </nav>
  );
}

export default CmaNavbar;
