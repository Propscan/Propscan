import React, { useEffect, useState } from "react";
import PropertyOwnerFormPage1 from "./propertyBasicDetails/index";
import PropertyOwnerFormPage2 from "./propertyLocationDetails/index";
import PropertyOwnerFormPage3 from "./propertyPropertyProfile/index";
import PropertyOwnerFormPage4 from "./propertyPhotos/index";
import PropertyOwnerFormPage5 from "./PropertyPricing/index";
import PropertyOwnerFormPage6 from "./PropertyAmenties/index";
import axios from "axios";
import { propscan_base_url } from "../utils/Route";

function Index() {
  const [listing_type, setListing_Type] = useState();
  const [property_sub_type, setProperty_sub_Type] = useState();
  const [property_type, setProperty_Type] = useState();
  const [city, setCity] = useState();
  const [locality, setLocality] = useState();
  const [locality_society, setLocality_Society] = useState();
  const [house_number, setHouse_number] = useState();
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();
  const [balconies, setBalconies] = useState();
  const [other_rooms, setOther_Rooms] = useState();
  const [furnishing_type, setFurnishing_Type] = useState();
  const [availability_status, setAvailability_Status] = useState();
  const [age_of_property, setAge_Of_Property] = useState();
  const [total_floors, settotal_floors] = useState();
  const [ownership_type, setownership_type] = useState();
  const [type, setType] = useState();
  const [expected_price, setexpected_price] = useState();
  const [price_per_sq_ft, setprice_per_sq_ft] = useState();
  const [price_type, setprice_type] = useState();
  const [maintenance_staff, setmaintenance_staff] = useState(false);
  const [water_storage, setwater_storage] = useState(false);
  const [rain_water_harvesting, setrain_water_harvesting] = useState(false);
  const [vaastu_compliant, setvaastu_compliant] = useState(false);
  const [overlooking_pool, setoverlooking_pool] = useState(false);
  const [overlooking_park, setoverlooking_park] = useState(false);
  const [overlooking_club, setoverlooking_club] = useState(false);
  const [overlooking_main_road, setoverlooking_main_road] = useState(false);
  const [gated_society, setgated_society] = useState(false);
  const [corner_property, setcorner_property] = useState(false);
  const [property_facing_direction, setproperty_facing_direction] = useState();
  const [unique_description, setunique_description] = useState();
  const [location_advantages, setlocation_advantages] = useState();

  const data_type1 = {
    user: 4,
    is_listed: true,
    status: "Listed",
    contacted: false,
    listing_type: { listing_type },
    property_sub_type: { property_sub_type },
    property_type: { property_type },
    city: { city },
    locality: { locality },
    locality_society: { locality_society },
    sub_locality: "Sub-Locality Name",
    flat_number: "101",
    house_number: { house_number },
    floor_number: "1",
    bhk_type: "2BHK",
    bedrooms: { bedrooms },
    bathrooms: { bathrooms },
    balconies: { balconies },
    other_rooms: { other_rooms },
    furnishing_type: { furnishing_type },
    parking_available: true,
    covered_parking: true,
    total_floors: { total_floors },
    availability_status: { availability_status },
    age_of_property: { age_of_property },
    images_link: "http://example.com/images/property.jpg",
    ownership_type: { ownership_type },
    expected_price: { expected_price },
    price_per_sq_ft: { price_per_sq_ft },
    price_type: { price_type },
    maintenance_amount: 2000,
    expected_rental: 20000,
    booking_amount: 10000,
    annual_dues_payable: 2000,
    membership_charge: 1000,
    unique_description: { unique_description },
    brokerage: true,
    brokerage_type: "fixed",
    brokerage_amount: 50000,
    negotiable: true,
    maintenance_staff: { maintenance_staff },
    water_storage: { water_storage },
    rain_water_harvesting: { rain_water_harvesting },
    vaastu_compliant: { vaastu_compliant },
    solar_panels: false,
    overlooking_pool: { overlooking_pool },
    overlooking_park: { overlooking_park },
    overlooking_club: { overlooking_club },
    overlooking_main_road: { overlooking_main_road },
    gated_society: { gated_society },
    corner_property: { corner_property },
    property_facing_direction: { property_facing_direction },
    location_advantages: { location_advantages },
  };

  const data_type2 = {
    user: 4,
    status: "Listed",
    listing_type: { listing_type },
    property_type: { property_type },
    property_sub_type: { property_sub_type },
    city: { city },
    locality: { locality },
    locality_society: { locality_society },
    sub_locality: "Sublocality123",
    flat_number: "12A",
    bhk: 2,
    super_built_up_area: 1200.5,
    built_up_area: 1100.25,
    carpet_area: 1000.0,
    no_of_bedrooms: { bedrooms },
    no_of_bathrooms: { bathrooms },
    balconies: { balconies },
    other_rooms: { other_rooms },
    furnishing: { furnishing_type },
    parking: true,
    covered_parking: true,
    total_floors: { total_floors },
    floor_number: 10,
    availability_status: { availability_status },
    age_of_property: { age_of_property },
    images_links: "http://example.com/images/property123.jpg",
    ownership: { ownership_type },
    expected_price: { expected_price },
    price_per_sq_ft: { price_per_sq_ft },
    all_inclusive_price: true,
    tax_and_govt_charges_excluded: false,
    price_negotiable: true,
    maintenance_amount: 2000.0,
    expected_rental: 20000.0,
    booking_amount: 10000.0,
    annual_dues_payable: 500.0,
    membership_charge: 1500.0,
    unique_description: { unique_description },
    brokerage: true,
    brokerage_type: "fixed",
    brokerage_amount: 2000,
    negotiable: true,
    maintenance_staff: { maintenance_staff },
    water_storage: { water_storage },
    rain_water_harvesting: { rain_water_harvesting },
    vaastu_compliant: { vaastu_compliant },
    solar_panels: false,
    overlooking_pool: { overlooking_pool },
    overlooking_park: { overlooking_park },
    overlooking_club: { overlooking_club },
    overlooking_main_road: { overlooking_main_road },
    gated_society: { gated_society },
    corner_property: { corner_property },
    property_facing_direction: { property_facing_direction },
    location_advantages: { location_advantages },
  };

  const data_type3 = {
    user: 4,
    status: "Listed",
    listing_type: { listing_type },
    property_type: { property_type },
    property_sub_type: { property_sub_type },
    city: { city },
    locality: { locality },
    locality_society: { locality_society },
    sub_locality: "Sublocality456",
    plot_number: "45B",
    plot_area: 5000.0,
    length: 100,
    breadth: 50,
    boundary_wall: true,
    number_of_open_sides: 2,
    any_construction_done: false,
    no_of_sheds_constructed: null,
    no_of_rooms_constructed: null,
    no_of_washrooms_constructed: null,
    number_of_floors_allowed_for_construction: 3,
    possession_expected_date: "2023-12-01",
    images_link: "http://example.com/images/property456.jpg",
    ownership: { ownership_type },
    property_approving_authority: "rcuda",
    expected_price: { expected_price },
    price_per_sq_ft: { price_per_sq_ft },
    all_inclusive_price: true,
    tax_and_govt_charges_excluded: false,
    price_negotiable: true,
    maintenance_amount: 1000.0,
    expected_rental: null,
    booking_amount: 10000.0,
    annual_dues_payable: 200.0,
    membership_charge: 1500.0,
    unique_description: { unique_description },
    brokerage: false,
    brokerage_type: null,
    brokerage_amount: null,
    negotiable: null,
    maintenance_staff: { maintenance_staff },
    water_storage: { water_storage },
    rain_water_harvesting: { rain_water_harvesting },
    vaastu_compliant: { vaastu_compliant },
    solar_panels: true,
    overlooking_pool: { overlooking_pool },
    overlooking_park: { overlooking_park },
    overlooking_club: { overlooking_club },
    overlooking_main_road: { overlooking_main_road },
    gated_society: { gated_society },
    corner_property: { corner_property },
    property_facing_direction: { property_facing_direction },
    location_advantages: { location_advantages },
  };

  const handleSubmit = () => {
    if (type === 1) {
      axios
        .post(`${propscan_base_url}/property/create/type1`, data_type1)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else if (type === 2) {
      axios
        .post(`${propscan_base_url}/property/create/type2`, data_type2)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      axios
        .post(`${propscan_base_url}/property/create/type3`, data_type3)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const [formPageNum, setformPageNum] = useState(1);
  const updateFormPage = (actionType) => {
    if (actionType === "increase") {
      setformPageNum(formPageNum + 1);
    } else setformPageNum(formPageNum - 1);
  };
  return (
    <div>
      {formPageNum === 1 && (
        <PropertyOwnerFormPage1
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          setListing_Type={setListing_Type}
          listing_type={listing_type}
          property_sub_type={property_sub_type}
          setProperty_sub_Type={setProperty_sub_Type}
          property_type={property_type}
          setProperty_Type={setProperty_Type}
          type={type}
          setType={setType}
        />
      )}
      {formPageNum === 2 && (
        <PropertyOwnerFormPage2
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          city={city}
          setCity={setCity}
          locality_society={locality_society}
          setLocality_Society={setLocality_Society}
          locality={locality}
          setLocality={setLocality}
          house_number={house_number}
          setHouse_number={setHouse_number}
        />
      )}
      {formPageNum === 3 && (
        <PropertyOwnerFormPage3
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          bedrooms={bedrooms}
          setBedrooms={setBedrooms}
          bathrooms={bathrooms}
          setBathrooms={setBathrooms}
          balconies={balconies}
          setBalconies={setBalconies}
          other_rooms={other_rooms}
          setOther_Rooms={setOther_Rooms}
          furnishing_type={furnishing_type}
          setFurnishing_Type={setFurnishing_Type}
          availability_status={availability_status}
          setAvailability_Status={setAvailability_Status}
          age_of_property={age_of_property}
          setAge_Of_Property={setAge_Of_Property}
          total_floors={total_floors}
          settotal_floors={settotal_floors}
        />
      )}
      {formPageNum === 4 && (
        <PropertyOwnerFormPage4
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
        />
      )}
      {formPageNum === 5 && (
        <PropertyOwnerFormPage5
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          ownership_type={ownership_type}
          setownership_type={setownership_type}
          expected_price={expected_price}
          setexpected_price={setexpected_price}
          price_per_sq_ft={price_per_sq_ft}
          setprice_per_sq_ft={setprice_per_sq_ft}
          price_type={price_type}
          setprice_type={setprice_type}
          unique_description={unique_description}
          setunique_description={setunique_description}
        />
      )}
      {formPageNum === 6 && (
        <PropertyOwnerFormPage6
          updateFormPage={updateFormPage}
          formPageNum={formPageNum}
          maintenance_staff={maintenance_staff}
          setmaintenance_staff={setmaintenance_staff}
          water_storage={water_storage}
          setwater_storage={setwater_storage}
          rain_water_harvesting={rain_water_harvesting}
          setrain_water_harvesting={setrain_water_harvesting}
          vaastu_compliant={vaastu_compliant}
          setvaastu_compliant={setvaastu_compliant}
          overlooking_pool={overlooking_pool}
          setoverlooking_pool={setoverlooking_pool}
          overlooking_club={overlooking_club}
          setoverlooking_club={setoverlooking_club}
          overlooking_park={overlooking_park}
          setoverlooking_park={setoverlooking_park}
          overlooking_main_road={overlooking_main_road}
          setoverlooking_main_road={setoverlooking_main_road}
          property_facing_direction={property_facing_direction}
          setproperty_facing_direction={setproperty_facing_direction}
          gated_society={gated_society}
          setgated_society={setgated_society}
          corner_property={corner_property}
          setcorner_property={setcorner_property}
          location_advantages={location_advantages}
          setlocation_advantages={setlocation_advantages}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
}

export default Index;
