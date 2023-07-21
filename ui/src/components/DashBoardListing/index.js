import React from "react";
import LoggedInHeader from "../header/LoggedInHeader";
import DashBoardNavbar from "../propertyForm/DashboardNavbar/DashboardNavbar";
import { SelectBox } from "../selectbox";
import PropertyListing from "../properties/PropertyListing";
import Footer from "../footer/Footer";
import { useNavigate } from "react-router-dom";

const sortByList = [
  {
    label: "Relevance",
    value: "Relevance",
  },
  {
    label: "Price High to Low",
    value: "Relevance",
  },
  {
    label: "Price Low to High",
    value: "Price Low to High",
  },
  {
    label: "Area High to Low",
    value: "Area High to Low",
  },
  {
    label: "Area Low to High",
    value: "Area Low to High",
  },
  {
    label: "Last Updated",
    value: "Last Updated",
  },
  {
    label: "Date Added",
    value: "Date Added",
  },
];

function DashBoardListing() {
  const navigate = useNavigate();
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div
        style={{ marginBottom: "3vh", marginLeft: "26vw", marginRight: "3vw" }}
      >
        <DashBoardNavbar />
      </div>
      <div>
        <button
          onClick={() => navigate("/new-property-form")}
          style={{ marginLeft: "80%" }}
          type="button"
          class="btn3"
        >
          List New Property
        </button>
      </div>
      <div
        style={{
          marginTop: "-7vh",
          marginRight: "159vh",
          color: "#092C4C",
          fontSize: "16px",
          fontFamily: "Poppins",
          fontWeight: "500",
          lineHeight: "26.4px",
        }}
        className="sortby-filters"
      >
        <span style={{ paddingRight: "10px" }}>Sort By: </span>
        <SelectBox
          className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
          placeholderClassName="text-blue_gray_900"
          isMulti={false}
          name="sortby"
          options={sortByList}
          isSearchable={false}
          placeholder="Relevance"
        />
      </div>
      <div>
        <PropertyListing />
      </div>
      <div style={{ marginTop: "11vh" }}>
        <Footer />
      </div>
    </div>
  );
}

export default DashBoardListing;
