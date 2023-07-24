import React from "react";
import "./PropertyLocationDetails.css";

function PropertyLocationDetails(props) {
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
        <h2 style={{ marginTop: "0.5vh" }} className="heading">
          Where is your property located?
        </h2>
      </div>
      <div>
        <p className="para">
          An accurate location helps you connect with right buyers
        </p>
      </div>
      <div style={{ margin: "5vh", marginTop: "-2vh" }}>
        <div style={{ marginLeft: "5vh" }} className="input-group mb-3">
          <input
            type="text"
            name="State"
            className="rounded"
            placeholder="Type here"
            aria-label="state"
            aria-describedby="basic-addon1"
            style={{
              marginTop: "4vh",
              marginLeft: "-4vh",
              padding: "1.5vh",
              borderRadius: "30px",
              width: "18vw",
            }}
          />
          <label
            style={{
              marginLeft: "-42vh",
              color: "#0D2855",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "16px",
              marginTop: "0.5vh",
            }}
            htmlFor="State"
          >
            State
          </label>
        </div>
        <div
          className="input-group mb-3"
          style={{ marginTop: "2.5vh", marginLeft: "5vh" }}
        >
          <input
            type="text"
            name="City"
            className="rounded"
            value={props.city}
            onChange={(e) => props.setCity(e.target.value)}
            placeholder="Type here"
            aria-label="City"
            aria-describedby="basic-addon1"
            style={{
              marginTop: "4vh",
              marginLeft: "-4vh",
              padding: "1.5vh",
              borderRadius: "30px",
              width: "18vw",
            }}
          />
          <label
            style={{
              marginLeft: "-42vh",
              color: "#0D2855",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "16px",
              marginTop: "0.5vh",
            }}
            htmlFor="City"
          >
            City
          </label>
          <button
            type="button"
            className="btn btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{
              color: "#27296d",
              marginLeft: "18vh",
              marginTop: "3vh",
              fontWeight: "500",
            }}
          >
            Pick my location
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body"> ... </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="input-group mb-3"
          style={{ marginTop: "2.5vh", marginLeft: "5vh" }}
        >
          <input
            type="text"
            className="rounded"
            name="Apartment/Society"
            onChange={(e) => props.setLocality_Society(e.target.value)}
            value={props.locality_society}
            placeholder="Type here"
            aria-label="Apartment/Society"
            style={{
              marginTop: "4vh",
              marginLeft: "-4vh",
              padding: "1.5vh",
              borderRadius: "30px",
              width: "18vw",
            }}
            aria-describedby="basic-addon1"
          />
          <label
            style={{
              marginLeft: "-42vh",
              color: "#0D2855",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "16px",
              marginTop: "0.5vh",
            }}
            htmlFor="Apartment/Society"
          >
            Apartment/Society
          </label>
        </div>
        <div className="input-group mb-3" style={{ marginTop: "-0.5vh" }}>
          <input
            type="text"
            className="rounded"
            name="Locality"
            value={props.locality}
            onChange={(e) => props.setLocality(e.target.value)}
            placeholder="Type here"
            aria-label="Locality"
            aria-describedby="basic-addon1"
            style={{
              marginTop: "4vh",
              marginLeft: "1vh",
              padding: "1.5vh",
              borderRadius: "30px",
              width: "18vw",
            }}
          />
          <label
            style={{
              marginLeft: "-42vh",
              color: "#0D2855",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "16px",
              marginTop: "0.5vh",
            }}
            htmlFor="Locality"
          >
            Locality
          </label>
        </div>
        <div className="input-group mb-3" style={{ marginTop: "-0.5vh" }}>
          <input
            type="text"
            className="rounded"
            name="House.no(optional)"
            value={props.house_number}
            onChange={(e) => props.setHouse_number(e.target.value)}
            placeholder="Type here"
            aria-label=" House.no"
            aria-describedby="basic-addon1"
            style={{
              marginTop: "4vh",
              marginLeft: "1vh",
              padding: "1.5vh",
              borderRadius: "30px",
              width: "18vw",
            }}
          />
          <label
            style={{
              marginLeft: "-42vh",
              marginTop: "0.5vh",
              color: "#0D2855",
              fontSize: "16px",
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "500",
              lineHeight: "16px",
            }}
            htmlFor=" House.no(optional)"
          >
            House.no(optional)
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="button"
          onClick={() => props.updateFormPage("increase")}
          style={{ marginTop: "-1vh" }}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default PropertyLocationDetails;
