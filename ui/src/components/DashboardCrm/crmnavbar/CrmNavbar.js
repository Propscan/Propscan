import React from "react";
import "./CrmNavbar.css";

function CrmNavbar() {
  return (
    <nav
      className="navbar-expand"
      style={{
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        width: "250px",
        height: "650px",
        padding: "3.5vh",
        marginTop: "-11vh",
        marginLeft: "-2vh",
      }}
    >
      <div className="container">
        <a
          className="nav-link a_style1"
          href="/properties-dashboard/crm/overview"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/crm/overview"
                ? "#E8F9FD"
                : "",
          }}
        >
          Overview
        </a>
        <a
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/crm/listed"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
          href="/properties-dashboard/crm/listed"
        >
          Listed
        </a>
        <a
          href="/properties-dashboard/crm/enquiry-received"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/crm/enquiry-received"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Enquiry Received
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
          Qualified
        </a>
        <a
          href="/properties-dashboard/crm/call-scheduled"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/crm/call-scheduled"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Call Scheduled
        </a>
        <a
          href="/properties-dashboard/crm/meeting-scheduled"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/crm/meeting-scheduled"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          On-Site Meeting Scheduled
        </a>
        <a
          href="/properties-dashboard/crm/quotationsent"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/crm/quotationsent"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Quotation Sent
        </a>
        <a
          href="/properties-dashboard/crm/negotiation"
          style={{
            backgroundColor:
              window.location.pathname ===
              "/properties-dashboard/crm/negotiation"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Negotiation
        </a>
        <a
          href="/properties-dashboard/crm/sold"
          style={{
            backgroundColor:
              window.location.pathname === "/properties-dashboard/crm/sold"
                ? "#E8F9FD"
                : "",
          }}
          className="nav-link active a_style1"
        >
          Sold
        </a>
        <a href="/" className="nav-link active a_style1">
          Unlisted
        </a>
        <a href="/" className="nav-link active a_style1">
          Archived
        </a>
      </div>
    </nav>
  );
}

export default CrmNavbar;
