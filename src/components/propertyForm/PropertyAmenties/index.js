import React from "react";
import ProgressStepper from "../progressStepper/index";
import LoggedInHeader from "../../header/LoggedInHeader";
import PropertyAmenties from "./Amenties";

export default function PropertyOwnerFormPage6(props) {
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
              <PropertyAmenties
                updateFormPage={props.updateFormPage}
                maintenance_staff={props.maintenance_staff}
                setmaintenance_staff={props.setmaintenance_staff}
                water_storage={props.water_storage}
                setwater_storage={props.setwater_storage}
                rain_water_harvesting={props.rain_water_harvesting}
                setrain_water_harvesting={props.setrain_water_harvesting}
                vaastu_compliant={props.vaastu_compliant}
                setvaastu_compliant={props.setvaastu_compliant}
                overlooking_pool={props.overlooking_pool}
                setoverlooking_pool={props.setoverlooking_pool}
                overlooking_club={props.overlooking_club}
                setoverlooking_club={props.setoverlooking_club}
                overlooking_park={props.overlooking_park}
                setoverlooking_park={props.setoverlooking_park}
                overlooking_main_road={props.overlooking_main_road}
                setoverlooking_main_road={props.setoverlooking_main_road}
                property_facing_direction={props.property_facing_direction}
                setproperty_facing_direction={
                  props.setproperty_facing_direction
                }
                gated_society={props.gated_society}
                setgated_society={props.setgated_society}
                corner_property={props.corner_property}
                setcorner_property={props.setcorner_property}
                location_advantages={props.location_advantages}
                setlocation_advantages={props.setlocation_advantages}
                handleSubmit={props.handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
