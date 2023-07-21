import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import "./BasicDetails.css";
import DashBoardNavbar from "../DashboardNavbar/DashboardNavbar";
// import axios from "axios";
// import { propscan_base_url } from "../../utils/Route";

function PropertyBasicDetails(props) {
  return (
    <div>
      <div
        style={{
          margin: "0 5vw",
        }}
      >
        <DashBoardNavbar />
      </div>
      <div>
        <h2 className="heading">
          Welcome back Brijlal, Fill out basic details
        </h2>
      </div>
      <div>
        <p className="p">I'm looking to </p>
      </div>
      <Stack direction="row" spacing={1} className="chip">
        <Chip
          label="Sell"
          name="listing_type"
          onClick={() => {
            props.setListing_Type("Sell");
          }}
          variant={props.Listing_Type === "Sell" ? "default" : "outlined"}
          component="a"
          href="#basic-chip"
          style={{
            color: "#0D2855",
            border: "1px solid #0D2855",
            borderRadius: "30px",
            backgroundColor:
              props.listing_type === "Sell" ? "#E8F9FD" : "white",
          }}
          clickable
        />
        <Chip
          label="Rent / Lease"
          name="listing_type"
          onClick={() => props.setListing_Type("Rent / Lease")}
          variant={
            props.listing_type === "Rent / Lease" ? "default" : "outlined"
          }
          component="a"
          href="#basic-chip"
          style={{
            color: "#0D2855",
            border: "1px solid #0D2855",
            borderRadius: "30px",
            backgroundColor:
              props.listing_type === "Rent / Lease" ? "#E8F9FD" : "white",
          }}
          clickable
        />
        <Chip
          label="PG"
          name="listing_type"
          onClick={() => props.setListing_Type("PG")}
          variant={props.listing_type === "PG" ? "default" : "outlined"}
          component="a"
          href="#basic-chip"
          style={{
            color: "#0D2855",
            border: "1px solid #0D2855",
            borderRadius: "30px",
            backgroundColor: props.listing_type === "PG" ? "#E8F9FD" : "white",
          }}
          clickable
        />
      </Stack>
      <p className="p1">What kind of property do you have? </p>
      <div className="radio">
        <div className="form-check">
          <input
            name="radio"
            className="form-check-input"
            type="radio"
            checked={props.property_sub_type === 1}
            value={props.property_sub_type}
            onChange={() => props.setProperty_sub_Type(1)}
            id="flexRadioDefault1"
          />
          <label
            className="form-check-label"
            style={{
              color: "#0D2855",
            }}
            htmlFor="radio"
          >
            Residential
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="radio"
            type="radio"
            checked={props.property_sub_type === 2}
            value={props.property_sub_type}
            onChange={() => props.setProperty_sub_Type(2)}
            id="flexRadioDefault2"
          />
          <label
            className="form-check-label"
            style={{
              color: "#0D2855",
            }}
            htmlFor="radio"
          >
            Commercial
          </label>
        </div>
      </div>

      <div
        style={{
          marginTop: "-11vh",
        }}
      >
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Flat / Apartment"
            onClick={() => {
              props.setProperty_Type("Flat / Apartment");
              props.setType(1);
            }}
            variant={
              props.property_type === "Flat / Apartment"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              // gap: "8px",
              backgroundColor:
                props.property_type === "Flat / Apartment"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="Independent House / villa"
            onClick={() => {
              props.setProperty_Type("Independent House / villa");
              props.setType(1);
            }}
            variant={
              props.property_type === "Independent House / villa"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.property_type === "Independent House / villa"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip1">
          <Chip
            label="Independent / Builder Floor"
            onClick={() => {
              props.setProperty_Type("Independent / Builder Floor");
              props.setType(1);
            }}
            variant={
              props.property_type === "Independent / Builder Floor"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.property_type === "Independent / Builder Floor"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="Plot / Land"
            onClick={() => {
              props.setProperty_Type("Plot / Land");
              props.setType(3);
            }}
            variant={
              props.property_type === "Plot / Land" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.property_type === "Plot / Land" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="1 RK / Studio Apartment"
            onClick={() => {
              props.setProperty_Type("1 RK / Studio Apartment");
              props.setType(2);
            }}
            variant={
              props.property_type === "1 RK / Studio Apartment"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.property_type === "1 RK / Studio Apartment"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip2">
          <Chip
            label="Service Apartment"
            onClick={() => {
              props.setProperty_Type("Service Apartment");
              props.setType(2);
            }}
            variant={
              props.property_type === "Service Apartment"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.property_type === "Service Apartment"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="Farmhouse"
            onClick={() => {
              props.setProperty_Type("Farmhouse");
              props.setType(2);
            }}
            variant={
              props.property_type === "Farmhouse" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.property_type === "Farmhouse" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Other"
            onClick={() => props.setProperty_Type("Other")}
            variant={props.property_type === "Other" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.property_type === "Other" ? "#E8F9FD" : "white",
            }}
            clickable
          />
        </Stack>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => props.updateFormPage("increase")}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PropertyBasicDetails;
