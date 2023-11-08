import React from "react";
import { SelectBox } from "../selectbox/index";
import PropertyCardLarge from "../property/PropertyCardLarge";
import PropertyCardSmall from "../property/PropertyCardSmall";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import "../properties/";

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

const properties = [
  {
    name: "The Cressida - Chetan Garg Real Estate",
    propertyImage: "/images/img_prop_3.png",
    dealerName: "Cressida's Real Estate",
    possessionStartTime: "Dec, 2023",
    avgPrice: "Rs. 55.10 K/sq.mt",
    priceRate: "Rs 1.00 Cr - 3.10 Cr",
  },
  {
    name: "The Crown - Hem Raj Real Estate",
    propertyImage: "/images/img_prop_10.png",
    dealerName: "Dullah Real Estate",
    possessionStartTime: "Jan, 2024",
    avgPrice: "Rs. 67.70 K/sq.mt",
    priceRate: "Rs 2.00 Cr - 4.55 Cr",
  },
];

function DashboardCma() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          backgroundColor: "#E8F9FD",
          marginTop: "2vh",
        }}
      >
        <div
          className="input-group mb-3"
          style={{
            display: "flex",
            alignItems: "center",
            width: "250px",
            height: "40px",
            marginLeft: "6vh",
            marginTop: "2vh",
          }}
        >
          <span
            className="input-group-text icon_style"
            style={{
              backgroundColor: "white",
              border: " 1px solid #0D2855",
              borderRadius: "30px 0px 0px 30px",
              padding: "0.85vh",
              color: "#374957",
            }}
          >
            <img src="/images/search.png" alt="Not found!" />
          </span>
          <input
            placeholder="Search"
            type="text"
            aria-label="Search"
            style={{
              padding: "0.5vh",
            }}
          />
        </div>

        <div
          style={{
            marginTop: "0.5vh",
            color: "#092C4C",
            fontSize: "16px",
            fontFamily: "Poppins",
            fontWeight: "500",
            lineHeight: "26.4px",
            width: "230px",
            marginLeft: "90vh",
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
      </div>
      <div style={{ width: "82vw", marginLeft: "-8vh" }}>
        <div className="d-none d-md-block">
          {properties.map((props, index) => (
            <div
              className="properties"
              key={index}
              //   onClick={() => navigate("/property")}
            >
              <PropertyCardLarge {...props} />
            </div>
          ))}
        </div>

        <div className="d-block d-md-none">
          <Row className="my-4">
            {properties.map((props, index) => (
              <>
                <Col xs="1"></Col>
                <Col
                  xs="10"
                  className="mb-4"
                  //   onClick={() => navigate("/property")}
                >
                  <PropertyCardSmall
                    src={props.propertyImage}
                    text={props.name}
                    subText1={props.dealerName}
                    subText2={props.possessionStartTime}
                    price={props.priceRate}
                  />
                </Col>
                <Col xs="1"></Col>
              </>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default DashboardCma;
