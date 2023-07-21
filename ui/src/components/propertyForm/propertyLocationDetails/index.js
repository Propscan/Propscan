import React from "react";
import ProgressStepper from "../progressStepper/index";
import LoggedInHeader from "../../header/LoggedInHeader";
import PropertyLocationDetails from "./PropertyLocationDetails";

function PropertyOwnerFormPage2(props) {
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div>
        <div class="row">
          <div
            class="col"
            style={{
              borderRight: "1px solid rgba(0, 0, 0, 0.1)",
              mixBlendMode: "darken",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
          >
            <ProgressStepper formPageNum={props.formPageNum}></ProgressStepper>
          </div>
          <div class="col-10">
            <PropertyLocationDetails
              updateFormPage={props.updateFormPage}
              city={props.city}
              setCity={props.setCity}
              locality_society={props.locality_society}
              setLocality_Society={props.setLocality_Society}
              locality={props.locality}
              setLocality={props.setLocality}
              house_number={props.house_number}
              setHouse_number={props.setHouse_number}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyOwnerFormPage2;
