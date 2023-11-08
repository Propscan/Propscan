import React from "react";
import "./Amenties.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

function Amenties(props) {
  return (
    <div>
      <button
        onClick={() => props.updateFormPage("decrease")}
        type="button"
        className=" butto2"
      >
        Back
      </button>
      <div>
        <p className="p" style={{ width: "30vw", marginTop: "2vh" }}>
          Add amenities/unique features
        </p>
        <p style={{ marginTop: "-10vh", marginLeft: "6vh" }}>
          All field on this page are optional
        </p>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Amenities
        </h5>
      </div>
      <div
        style={{
          marginTop: "12vh",
          marginLeft: "2vh",
        }}
      >
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Maintenance Staff"
            onClick={() => props.setmaintenance_staff(true)}
            variant={props.maintenance_staff === true ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              backgroundColor:
                props.maintenance_staff === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Water Storage"
            onClick={() => props.setwater_storage(true)}
            variant={props.water_storage === true ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.water_storage === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Security / Fire Alarm"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip1">
          <Chip
            label="Visitor Parking"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <Chip
            label="Feng Shui/Vaastu Compliant"
            onClick={() => props.setvaastu_compliant(true)}
            variant={props.vaastu_compliant === true ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.vaastu_compliant === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Park"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip2">
          <Chip
            label="Intercom Facility"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <Chip
            label="Lift(s)"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Property Features
        </h5>
      </div>
      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="High Ceiling Height"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
            }}
            clickable
          />
          <Chip
            label="False Ceiling Lighting"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <Chip
            label="Piped-gas"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip2">
          <Chip
            label="Internet / wi-fi connectivity"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <p
            style={{
              color: "blue",
              marginTop: "1vh",
              fontSize: "14px",
              marginLeft: "2vh",
            }}
          >
            7 more
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            style={{
              marginTop: "2.2vh",
              marginLeft: "1vh",
            }}
          >
            <path
              d="M1 1.5L4 4.5L7 1.5"
              stroke="#0D2855"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Stack>
      </div>

      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Society/Building features
        </h5>
      </div>
      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Water softening plant"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
            }}
            clickable
          />
          <Chip
            label="Shopping centre"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" spacing={1} className="chip1">
          <Chip
            label="Fitness Centre / GYM"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
            }}
            clickable
          />
          <Chip
            label="Swimming Pool"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <p
            style={{
              color: "blue",
              marginTop: "1vh",
              fontSize: "14px",
              marginLeft: "2vh",
            }}
          >
            2 more
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            style={{
              marginTop: "2.2vh",
              marginLeft: "1vh",
            }}
          >
            <path
              d="M1 1.5L4 4.5L7 1.5"
              stroke="#0D2855"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Stack>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Additional Features
        </h5>
      </div>

      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Separate entry for servant room"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
            }}
            clickable
          />
          <Chip
            label="waste Disposal"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" spacing={1} className="chip1">
          <Chip
            label="No open drainage around"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
            }}
            clickable
          />
          <Chip
            label="Rain water harvesting"
            onClick={() => props.setrain_water_harvesting(true)}
            variant={
              props.rain_water_harvesting === true ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.rain_water_harvesting === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <p
            style={{
              color: "blue",
              marginTop: "1vh",
              fontSize: "14px",
              marginLeft: "2vh",
            }}
          >
            2 more
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="6"
            viewBox="0 0 8 6"
            fill="none"
            style={{
              marginTop: "2.2vh",
              marginLeft: "1vh",
            }}
          >
            <path
              d="M1 1.5L4 4.5L7 1.5"
              stroke="#0D2855"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Stack>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Water Source
        </h5>
      </div>
      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Municipal corporation"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
            }}
            clickable
          />
          <Chip
            label="Borewell/Tank"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <Chip
            label="24*7 Water"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Overlooking
        </h5>
      </div>
      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Pool"
            onClick={() => props.setoverlooking_pool(true)}
            variant={props.overlooking_pool === true ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              backgroundColor:
                props.overlooking_pool === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Park/Garden"
            onClick={() => props.setoverlooking_park(true)}
            variant={props.overlooking_park === true ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.overlooking_park === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Club"
            onClick={() => props.setoverlooking_club(true)}
            variant={props.overlooking_club === true ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.overlooking_club === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Main Road"
            onClick={() => props.setoverlooking_main_road(true)}
            variant={
              props.overlooking_main_road === true ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.overlooking_main_road === true ? "#E8F9FD" : "white",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip1">
          <Chip
            label="Other"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Other Features
        </h5>
      </div>
      <div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={props.gated_society === true}
            value={props.gated_society}
            onChange={() => props.setgated_society(true)}
            id="flexCheckDefault"
          />
          <label
            style={{ width: "10vw", marginTop: "0.5vh" }}
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            In a gated society
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            checked={props.corner_property === true}
            value={props.corner_property}
            onChange={() => props.setcorner_property(true)}
            id="flexCheckDefault"
          />
          <label
            style={{ width: "9vw", marginTop: "0.5vh" }}
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            Corner Property
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            style={{ width: "6vw", marginTop: "0.5vh" }}
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            Pet Friendly
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            style={{ width: "11vw", marginTop: "0.5vh" }}
            className="form-check-label"
            htmlFor="flexCheckDefault"
          >
            Wheelchair Friendly
          </label>
        </div>
      </div>

      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Power Back up
        </h5>
      </div>
      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="None"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
            }}
            clickable
          />
          <Chip
            label="Partial"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <Chip
            label="Full"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Property facing
        </h5>
      </div>
      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="North"
            onClick={() => props.setproperty_facing_direction("North")}
            variant={
              props.property_facing_direction === "North"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              backgroundColor:
                props.property_facing_direction === "North"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="South"
            onClick={() => props.setproperty_facing_direction("South")}
            variant={
              props.property_facing_direction === "South"
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
                props.property_facing_direction === "South"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="East"
            onClick={() => props.setproperty_facing_direction("East")}
            variant={
              props.property_facing_direction === "East"
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
                props.property_facing_direction === "East"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="West"
            onClick={() => props.setproperty_facing_direction("West")}
            variant={
              props.property_facing_direction === "West"
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
                props.property_facing_direction === "West"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="North-East"
            onClick={() => props.setproperty_facing_direction("North-East")}
            variant={
              props.property_facing_direction === "North-East"
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
                props.property_facing_direction === "North-East"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="North-West"
            onClick={() => props.setproperty_facing_direction("North-West")}
            variant={
              props.property_facing_direction === "North-West"
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
                props.property_facing_direction === "North-West"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip1">
          <Chip
            label="South-East"
            onClick={() => props.setproperty_facing_direction("South-East")}
            variant={
              props.property_facing_direction === "South-East"
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
                props.property_facing_direction === "South-East"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
          <Chip
            label="South-West"
            onClick={() => props.setproperty_facing_direction("South-West")}
            variant={
              props.property_facing_direction === "South-West"
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
                props.property_facing_direction === "South-West"
                  ? "#E8F9FD"
                  : "white",
            }}
            clickable
          />
        </Stack>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Type of flooring
        </h5>
      </div>
      <div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
        <select
          style={{
            border: "2px solid grey",
            backgroundColor: "white",
            width: "18vw",
            height: "6vh",
            padding: "1vh",
          }}
          name=""
          id=""
        >
          <option value="">Select</option>
          <option value="">Select</option>
          <option value="">Select</option>
          <option value="">Select</option>
        </select>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Width of facing road
        </h5>
      </div>
      <div div style={{ marginLeft: "6vh", marginTop: "2vh" }}>
        <input
          type="text"
          className="rounded"
          placeholder="Enter the width"
          style={{
            width: "20vw",
            height: "7vh",
            padding: "3vh",
            fontSize: "16px",
          }}
        />
        <select
          className="rounded border-0"
          style={{
            marginLeft: "-18vh",
            width: "6vw",
            height: "5vh",
            padding: "1vh",
          }}
          name="val"
          id="val"
        >
          <option value="Feet">Feet</option>
          <option value="inches">inches </option>
        </select>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Location Advantages
        </h5>
        <p style={{ marginTop: "-0.5vh", marginLeft: "6vh", fontSize: "14px" }}>
          Highlight the nearby landmarks*
        </p>
      </div>
      <div style={{ marginTop: "12vh", marginLeft: "2vh" }}>
        <Stack direction="row" spacing={1} className="chip">
          <Chip
            label="Close to Metro Station"
            onClick={() => props.setlocation_advantages("")}
            variant={props.location_advantages === "" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              backgroundColor:
                props.location_advantages === "" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Close to School"
            onClick={() => props.setlocation_advantages("")}
            variant={props.location_advantages === "" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
              backgroundColor:
                props.location_advantages === "" ? "#E8F9FD" : "white",
            }}
            clickable
          />
          <Chip
            label="Close to Hospital"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
        <Stack direction="row" cell spacing={1} className="chip1">
          <Chip
            label="Close to Market"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
          <Chip
            label="Close to Railway Station"
            variant="outlined"
            component="a"
            href="#basic-chip"
            style={{
              color: "#0D2855",
              border: "1px solid #0D2855",
              borderRadius: "30px",
              gap: "8px",
            }}
            clickable
          />
        </Stack>
        <div>
          <p
            style={{
              marginTop: "-3vh",
              marginLeft: "5vh",
              color: "#00008B",
              fontWeight: "500",
            }}
          >
            Show more
          </p>
        </div>
        <div>
          <p style={{ marginTop: "-1vh", marginLeft: "5vh", fontSize: "14px" }}>
            *Please provide correct information,otherwise your listing might get
            blocked
          </p>
        </div>
      </div>
      <div>
        <h5
          style={{
            marginTop: "5vh",
            marginLeft: "6vh",
          }}
        >
          Suggest a Property Feature
        </h5>
        <p style={{ marginTop: "-0.5vh", marginLeft: "6vh", fontSize: "14px" }}>
          That you want us to add in the form
        </p>
        <input
          style={{ marginLeft: "6vh", width: "17vw", padding: "2vh" }}
          type="text"
          className="rounded"
          placeholder="Enter your USP's here"
        />
        <p style={{ marginLeft: "6vh", fontSize: "14px" }}>
          You can add as many Features seperated by comma
        </p>
      </div>
      <div
        style={{
          backgroundColor: "#E8F9FD",
          width: "35vw",
          height: "25vh",
          marginLeft: "5vh",
        }}
      >
        <div style={{ marginLeft: "8vh", paddingTop: "4vh" }}>
          <h5>Updated Description </h5>
        </div>
        <div style={{ marginLeft: "7vh" }}>
          <p>
            Based on the additional inputs made by you , we have updated your
            property description
          </p>
          <p style={{ color: "blue" }}>Review</p>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={props.handleSubmit}
          style={{ marginTop: "5vh", marginLeft: "5vh" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default Amenties;
