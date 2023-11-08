import React from "react";
import ProgressStepper from "../progressStepper/index";
import LoggedInHeader from "../../header/LoggedInHeader";
import PropertyPhotos from "./PropertyPhotos";

export default function PropertyOwnerFormPage4(props) {
  return (
    <div>
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
              <ProgressStepper
                formPageNum={props.formPageNum}
              ></ProgressStepper>
            </div>
            <div class="col-10">
              <PropertyPhotos updateFormPage={props.updateFormPage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
