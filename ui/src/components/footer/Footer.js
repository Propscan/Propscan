import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <Row style={{ color: "#FFFFFF" }}>
          <Col xs="7" md="3" className="my-3">
            <p className="footer-heading">COMPANY</p>
            <div className="footer-items">
              <p className="mb-2">Careers</p>
              <p className="mb-2">About Us</p>
              <p className="mb-2">For Partners</p>
              <p className="mb-2">Terms</p>
              <p className="mb-2">Annual Returns</p>
              <p className="mb-2">Privacy Policy</p>
              <p className="mb-2">Contact Us</p>
              <p className="mb-2">Unsubscribe</p>
              <p className="mb-2">Merger Hearing Advertisement</p>
            </div>
          </Col>
          <Col xs="5" md="3" className="my-3">
            <p className="footer-heading">Explore</p>
            <div className="footer-items">
              <p className="mb-2">News</p>
              <p className="mb-2">Home Loans</p>
              <p className="mb-2">Sitemap</p>
              <p className="mb-2">Rent Contracts</p>
              <p className="mb-2">International</p>
            </div>
          </Col>
          <Col xs="4" md="3" className="my-3">
            <p className="footer-heading">Services</p>
            <div className="footer-items">
              <p className="mb-2">Buy</p>
              <p className="mb-2">Sell</p>
              <p className="mb-2">Rent</p>
              <p className="mb-2">Co-Living</p>
              <p className="mb-2">Plots Buy</p>
              <p className="mb-2">And Many More</p>
            </div>
          </Col>
          <Col
            xs="8"
            md="3"
            className="my-3"
            style={{
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p className="footer-heading">Open Camera & Scan the QR</p>
            <div className="footer-items">
              <img src="/images/barcode.png" className="footer-barcode" alt="not found" />
            </div>
          </Col>
          <Col></Col>
        </Row>
      </div>
      <div className="d-flex align-items-center mt-3">
        <img
          src="/images/check.svg"
          alt="not found"
          style={{
            width: "24px",
            height: "24px",
            marginRight: "10px",
          }}
        />
        <span className="footer-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          ipsum orci, tincidunt et aliquam eget, pharetra id sapien. Sed dapibus
          ut enim eget viverra. Nam aliquet odio nulla, vitae imperdiet velit
          vestibulum id. Cras et turpis sed velit auctor euismod et id felis.
        </span>
      </div>
    </div>
  );
}
