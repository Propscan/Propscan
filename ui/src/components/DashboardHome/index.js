import React from "react";
import LoggedInHeader from "../header/LoggedInHeader";
import "./DashBoard.css";
import DashBoardNavbar from "../propertyForm/DashboardNavbar/DashboardNavbar";
import { useNavigate } from "react-router-dom";
import Chart from "./Chart";
import CircularBar from "./CircularBar";
import Table from "./Table";
import PropertyCardSmall from "../property/PropertyCardSmall";
import Col from "react-bootstrap/Col";

function DashBoardHome() {
  const navigate = useNavigate();
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div
        style={{ marginBottom: "3vh", marginLeft: "26vw", marginRight: "3vw" }}
      >
        <DashBoardNavbar />
      </div>
      <button
        onClick={() => navigate("/new-property-form")}
        style={{ marginLeft: "80%" }}
        type="button"
        class="btn3"
      >
        List New Property
      </button>
      <div
        className="container"
        style={{
          background: "#FFFFFF",
          borderradius: "8px",
          marginTop: "-8vh",
          width: "100%",
        }}
      >
        <div className="row">
          <div
            className="col-1"
            style={{
              marginLeft: "-2vh",
              margin: "2.5vh",
              marginTop: "10vh",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              width: "20%",
              padding: "2vh",
              height: "78vh",
            }}
          >
            <p
              style={{ fontSize: "19px", marginLeft: "7vh" }}
              className="Units"
            >
              BRIJLAL CHARSI
            </p>
            <p
              style={{ fontSize: "17px", marginLeft: "10vh" }}
              className="Units"
            >
              Delhi,india
            </p>
            <CircularBar />
            <p
              style={{ fontSize: "18px", marginLeft: "8vh" }}
              className="Units"
            >
              Units Available
            </p>
          </div>
          <div
            className="col"
            style={{
              // marginLeft: "4vh",
              marginTop: "10vh",
              padding: "1vh",
              background: "#FFFFFF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              width: "30%",
              height: "78vh",
            }}
          >
            <p className="revenue">Revenue Overview</p>
            <p className="Rs">Rs. 12,00,000.00</p>

            <button
              className="button1"
              type="button"
              style={{
                marginLeft: "85%",
                marginTop: "-30vh",
              }}
            >
              Weekly
            </button>

            <div style={{ display: "flex" }}>
              <p className="number">+10.24%</p>
              <p className="LastWeek">From last week</p>
            </div>
            <Chart />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", marginTop: "3vh" }}>
        <div style={{ margin: "3vh", width: "60vw", marginLeft: "8vh" }}>
          <p style={{ marginLeft: "13vh" }} className="Units">
            CRM Overview
          </p>
          <div>
            <Table />
          </div>
        </div>
        <div>
          <p
            style={{
              marginTop: "7vh",
              marginLeft: "22vh",
              color: "#0D2855",
              fontSsize: "16px",
              fontFamily: "Poppins",
              fontWeight: "600",
              lineHeight: "16px",
            }}
          >
            Reminders
          </p>
          <textarea
            style={{ margin: "3vh", marginLeft: "15vh" }}
            name="Reminders"
            id=""
            cols="30"
            rows="12"
          ></textarea>
        </div>
      </div>
      <div>
        <p style={{ marginLeft: "15vh", marginTop: "3vh" }} className="MyUnits">
          My Units
        </p>
      </div>
      <div style={{ display: "flex", marginLeft: "-7vh" }}>
        <Col md="1" />
        <Col xs="2" md className="p-4">
          <PropertyCardSmall
            src="/images/img_image_1prop.png"
            text="0123 Boulevard Street, New Delhi"
            subText1="3 Bedrooms | 2 Bathrooms |"
            subText2="Size - 252 ft2"
            price="Rs. 10,000,00.00"
          />
        </Col>
        <Col xs="3" md className="p-4">
          <PropertyCardSmall
            src="/images/img_image_2prop.png"
            text="0123 Boulevard Street, New Delhi"
            subText1="3 Bedrooms | 2 Bathrooms |"
            subText2="Size - 252 ft2"
            price="Rs. 10,000,00.00"
          />
        </Col>
        <Col xs="3" md className="p-4">
          <PropertyCardSmall
            src="/images/img_image_3prop.png"
            text="0123 Boulevard Street, New Delhi"
            subText1="3 Bedrooms | 2 Bathrooms |"
            subText2="Size - 252 ft2"
            price="Rs. 10,000,00.00"
          />
        </Col>
        <Col md="1" />
      </div>
    </div>
  );
}

export default DashBoardHome;
