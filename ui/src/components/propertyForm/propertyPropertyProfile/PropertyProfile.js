import React from "react";
import "./PropertyProfile.css";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import AddIcon from "@mui/icons-material/Add";

function PropertyProfile(props) {
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
        <h2 className="heading">Tell us about your property</h2>
        <p className="para2 ">Add Room Details</p>
      </div>
      <div>
        <p className="para3">No.of Bedrooms</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="1"
            onClick={() => props.setBedrooms("1")}
            variant={props.bedrooms === "1" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              marginLeft: "4.5vh",
              backgroundColor: props.bedrooms === "1" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="2"
            onClick={() => props.setBedrooms("2")}
            variant={props.bedrooms === "2" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.bedrooms === "2" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="3"
            onClick={() => props.setBedrooms("3")}
            variant={props.bedrooms === "3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.bedrooms === "3" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="4"
            onClick={() => props.setBedrooms("4")}
            variant={props.bedrooms === "4" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.bedrooms === "4" ? "#E8F9FD" : "white",
            }}
          />
        </Stack>
      </div>
      <div className="icon">
        <AddIcon />
        Add Other
      </div>
      <div>
        <p className="para3">No.of Bathrooms</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="1"
            onClick={() => props.setBathrooms("1")}
            variant={props.bathrooms === "1" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              marginLeft: "4.5vh",
              backgroundColor: props.bathrooms === "1" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="2"
            onClick={() => props.setBathrooms("2")}
            variant={props.bathrooms === "2" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.bathrooms === "2" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="3"
            onClick={() => props.setBathrooms("3")}
            variant={props.bathrooms === "3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.bathrooms === "3" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="4"
            onClick={() => props.setBathrooms("4")}
            variant={props.bathrooms === "4" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.bathrooms === "4" ? "#E8F9FD" : "white",
            }}
          />
        </Stack>
      </div>
      <div className="icon">
        <AddIcon />
        Add Other
      </div>

      <div>
        <p className="para3">No.of Balconies</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="1"
            onClick={() => props.setBalconies("1")}
            variant={props.balconies === "1" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              marginLeft: "4.5vh",
              backgroundColor: props.balconies === "1" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="2"
            onClick={() => props.setBalconies("2")}
            variant={props.balconies === "2" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.balconies === "2" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="3"
            onClick={() => props.setBalconies("3")}
            variant={props.balconies === "3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor: props.balconies === "3" ? "#E8F9FD" : "white",
            }}
          />
          <Chip
            label="More than 3"
            onClick={() => props.setBalconies("More than 3")}
            variant={props.balconies === "More than 3" ? "default" : "outlined"}
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginTop: "-3vh",
              backgroundColor:
                props.balconies === "More than 3" ? "#E8F9FD" : "white",
            }}
          />
        </Stack>
      </div>
      <div className="icon">
        <AddIcon />
        Add Other
      </div>
      <div>
        <p className="para4">Add Area Details</p>
        <p className="para5">Atleast one area type is mandatory</p>
      </div>
      <div className="input-group mb-3 ">
        <select
          name="feets"
          id="feets"
          style={{  borderRadius: "30px", margin: "0px" }}
        >
          <option value="sq.ft">sq.ft</option>
          <option value="sq.yards">sq.yards</option>
          <option value="sq.m.">sq.m.</option>
          <option value="arces">arces</option>
          <option value="marla">marla</option>
          <option value="censt">censt</option>
        </select>
        <input
          type="text"
          placeholder="Carpet Area"
          aria-label="Carpet Area"
          style={{ borderRadius: "30px" }}
        />
      </div>
      <div style={{ display: "flex" }}>
        <div className="icon1">
          <AddIcon />
          Add Built-up Area
        </div>
        <div className="icon1">
          <AddIcon />
          Add Super Built-up Area
        </div>
      </div>
      <div>
        <p className="para6">Other rooms(optional)</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="+ Pooja Room"
            onClick={() => props.setOther_Rooms("+ Pooja Room")}
            variant={
              props.other_rooms === "+ Pooja Room" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.other_rooms === "+ Pooja Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Study Room"
            onClick={() => props.setOther_Rooms("+ Study Room")}
            variant={
              props.other_rooms === "+ Study Room" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.other_rooms === "+ Study Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Servant Room"
            onClick={() => props.setOther_Rooms("+ Servant Room")}
            variant={
              props.other_rooms === "+ Servant Room" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.other_rooms === "+ Servant Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Store Room"
            onClick={() => props.setOther_Rooms("+ Store Room")}
            variant={
              props.other_rooms === "+ Store Room" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.other_rooms === "+ Store Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>
      <div>
        <p className="para6">Furnishing(optional)</p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="+ Pooja Room"
            onClick={() => props.setFurnishing_Type("+ Pooja Room")}
            variant={
              props.furnishing_type === "+ Pooja Room" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.furnishing_type === "+ Pooja Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Study Room"
            onClick={() => props.setFurnishing_Type("+ Study Room")}
            variant={
              props.furnishing_type === "+ Study Room" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.furnishing_type === "+ Study Room" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="+ Servant Room"
            onClick={() => props.setFurnishing_Type("+ Servant Room")}
            variant={
              props.furnishing_type === "+ Servant Room"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.furnishing_type === "+ Servant Room"
                  ? "#E8F9FD"
                  : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>

      <div>
        <p className="para6" style={{ marginTop: "7vh" }}>
          Floor Details
        </p>
        <p className="para7">Total no of floors and your floor details</p>
      </div>
      <div className="d-flex flex-row">
        <div style={{ margin: "5vh", marginTop: "2vh" }}>
          <div className="input-group mb-3">
            Total Floors
            <input
              type="text"
              value={props.total_floors}
              onChange={(e) => props.settotal_floors(e.target.value)}
              placeholder="Type here"
              aria-label="state"
              aria-describedby="basic-addon1"
              style={{ marginTop: "4vh", marginLeft: "-12vh", padding: "1vh" }}
            />
          </div>
        </div>
        <div style={{ margin: "5vh", marginTop: "2vh" }}>
          <div className="input-group mb-3">
            Property on Floor
            <input
              type="text"
              //   class="form-control"
              placeholder="Type here"
              aria-label="state"
              aria-describedby="basic-addon1"
              style={{ marginTop: "4vh", marginLeft: "-18vh", padding: "1vh" }}
            />
          </div>
        </div>
      </div>
      <div>
        <p className="para6" style={{ marginTop: "1vh" }}>
          Availability Status
        </p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="Ready to move"
            onClick={() => props.setAvailability_Status("Ready to move")}
            variant={
              props.availability_status === "Ready to move"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.availability_status === "Ready to move"
                  ? "#E8F9FD"
                  : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="Under Construction"
            onClick={() => props.setAvailability_Status("Under Construction")}
            variant={
              props.availability_status === "Under Construction"
                ? "default"
                : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.availability_status === "Under Construction"
                  ? "#E8F9FD"
                  : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>
      <div>
        <p className="para6" style={{ marginTop: "8vh" }}>
          Age of Property
        </p>
      </div>
      <div>
        <Stack direction="row" spacing={1} className="chip3">
          <Chip
            label="0-1 Years"
            onClick={() => props.setAge_Of_Property("0-1 Years")}
            variant={
              props.age_of_property === "0-1 Years" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.age_of_property === "0-1 Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="1-5 Years"
            onClick={() => props.setAge_Of_Property("1-5 Years")}
            variant={
              props.age_of_property === "1-5 Years" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.age_of_property === "1-5 Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="5-10 Years"
            onClick={() => props.setAge_Of_Property("5-10 Years")}
            variant={
              props.age_of_property === "5-10 Years" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.age_of_property === "5-10 Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
          <Chip
            label="10+ Years"
            onClick={() => props.setAge_Of_Property("10+ Years")}
            variant={
              props.age_of_property === "10+ Years" ? "default" : "outlined"
            }
            component="a"
            href="#basic-chip"
            clickable
            style={{
              marginLeft: "2vh",
              backgroundColor:
                props.age_of_property === "10+ Years" ? "#E8F9FD" : "white",
              color: "#0D2855",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              marginTop: "-2vh",
            }}
          />
        </Stack>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => props.updateFormPage("increase")}
          style={{ marginTop: "8vh", marginLeft: "2vh" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PropertyProfile;
