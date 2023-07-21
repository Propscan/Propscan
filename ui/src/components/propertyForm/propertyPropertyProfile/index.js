import React from "react";
import ProgressStepper from "../progressStepper/index";
import LoggedInHeader from "../../header/LoggedInHeader";
import PropertyProfile from "./PropertyProfile";

function PropertyOwnerFormPage3(props) {
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
            <PropertyProfile
              updateFormPage={props.updateFormPage}
              bedrooms={props.bedrooms}
              setBedrooms={props.setBedrooms}
              bathrooms={props.bathrooms}
              setBathrooms={props.setBathrooms}
              balconies={props.balconies}
              setBalconies={props.setBalconies}
              other_rooms={props.other_rooms}
              setOther_Rooms={props.setOther_Rooms}
              furnishing_type={props.furnishing_type}
              setFurnishing_Type={props.setFurnishing_Type}
              availability_status={props.availability_status}
              setAvailability_Status={props.setAvailability_Status}
              age_of_property={props.age_of_property}
              setAge_Of_Property={props.setAge_Of_Property}
              total_floors={props.total_floors}
              settotal_floors={props.settotal_floors}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyOwnerFormPage3;
