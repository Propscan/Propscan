import React from "react";
import ProgressStepper from "../progressStepper/index";
import LoggedInHeader from "../../header/LoggedInHeader";
import PropertyPricing from "./PropertyPricing";

export default function PropertyOwnerFormPage5(props) {
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
              <PropertyPricing
                updateFormPage={props.updateFormPage}
                ownership_type={props.ownership_type}
                setownership_type={props.setownership_type}
                expected_price={props.expected_price}
                setexpected_price={props.setexpected_price}
                price_per_sq_ft={props.price_per_sq_ft}
                setprice_per_sq_ft={props.setprice_per_sq_ft}
                price_type={props.price_type}
                setprice_type={props.setprice_type}
                unique_description={props.unique_description}
                setunique_description={props.setunique_description}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
