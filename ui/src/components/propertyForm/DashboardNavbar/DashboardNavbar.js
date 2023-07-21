import React from "react";
import "../propertyBasicDetails/BasicDetails.css";

function DashBoardNavbar() {
  return (
    <nav className="navbar navbar-expand-lg property-dashboard">
      <div className="container-fluid ">
        <a
          className="nav-link a_style"
          href="/properties-dashboard/home"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/home"
                ? "#E8F9FD"
                : "",
          }}
        >
          Dashboard
        </a>
        <a
          className="nav-link active a_style"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/listings"
                ? "#E8F9FD"
                : "",
          }}
          href="/properties-dashboard/listings"
        >
          My Listings
        </a>
        <a
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/crm"
                ? "#E8F9FD"
                : "",
          }}
          href="/properties-dashboard/crm"
          className="nav-link active a_style"
        >
          CRM
        </a>
        <a
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/cma "
                ? "#E8F9FD"
                : "",
          }}
          href="/properties-dashboard/cma"
          className="nav-link active a_style"
        >
          CMA
        </a>
        <a
          href="/properties-dashboard/meeting"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/meeting"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style"
        >
          Meeting Scheduler
        </a>
        <a
          href="/properties-dashboard/analytics"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/analytics"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style"
        >
          Analytics
        </a>
      </div>
    </nav>
  );
}

export default DashBoardNavbar;
