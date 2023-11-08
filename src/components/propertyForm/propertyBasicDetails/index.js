import React from "react";
import ProgressStepper from "../progressStepper/index";
import LoggedInHeader from "../../header/LoggedInHeader";
import BasciDetails from "./BasicDetails";

function PropertyOwner(props) {
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div>
        <div class="row">
          <div
            class="col"
            style={{
              border: "1px solid rgba(0, 0, 0, 0.1)",
              mixBlendMode: "darken",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            <ProgressStepper formPageNum={props.formPageNum}></ProgressStepper>
          </div>
          <div class="col-10">
            <BasciDetails
              updateFormPage={props.updateFormPage}
              setListing_Type={props.setListing_Type}
              listing_type={props.listing_type}
              property_sub_type={props.property_sub_type}
              setProperty_sub_Type={props.setProperty_sub_Type}
              property_type={props.property_type}
              setProperty_Type={props.setProperty_Type}
              type={props.type}
              setType={props.setType}
            ></BasciDetails>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyOwner;
