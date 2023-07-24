import React from "react";
import CrmNavbar from "../crmnavbar";
import LoggedInHeader from "../../header/LoggedInHeader";
import DashBoardNavbar from "../../propertyForm/DashboardNavbar/DashboardNavbar";
import { SelectBox } from "../../selectbox/index";
import "./index.css";
import Table from "../Table";

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

function CrmListed() {
  return (
    <div>
      <LoggedInHeader></LoggedInHeader>
      <div
        style={{ marginBottom: "3vh", marginLeft: "26vw", marginRight: "3vw" }}
      >
        <DashBoardNavbar />
      </div>
      <div>
        <div className="row">
          <div className="col-2">
            <CrmNavbar></CrmNavbar>
          </div>
          <div className="col" style={{ marginLeft: "5vh" }}>
            <div style={{ display: "flex", marginLeft: "-6vh" }}>
              <p className="square"></p>
              <p className="listedPara">Listed</p>
            </div>
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
                  display: "flex",
                  marginTop: "3.5vh",
                }}
              >
                <p className="text1">State</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  style={{ marginTop: "1.4vh", marginLeft: "1vh" }}
                >
                  <path
                    d="M1 1.5L4 4.5L7 1.5"
                    stroke="#0D2855"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "3.5vh",
                  marginLeft: "6vh",
                }}
              >
                <p className="text1">City</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  style={{ marginTop: "1.4vh", marginLeft: "1vh" }}
                >
                  <path
                    d="M1 1.5L4 4.5L7 1.5"
                    stroke="#0D2855"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "3.5vh",
                  marginLeft: "6vh",
                }}
              >
                <p className="text1">Property Type</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  style={{ marginTop: "1.4vh", marginLeft: "1vh" }}
                >
                  <path
                    d="M1 1.5L4 4.5L7 1.5"
                    stroke="#0D2855"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "3.5vh",
                  marginLeft: "6vh",
                }}
              >
                <p className="text1">Property Category</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  style={{ marginTop: "1.4vh", marginLeft: "1vh" }}
                >
                  <path
                    d="M1 1.5L4 4.5L7 1.5"
                    stroke="#0D2855"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  display: "flex",
                  marginTop: "3.5vh",
                  marginLeft: "5vh",

                  width: "90px",
                }}
              >
                <p className="text1">Sale Type</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="6"
                  viewBox="0 0 8 6"
                  fill="none"
                  style={{ marginTop: "1.4vh", marginLeft: "1vh" }}
                >
                  <path
                    d="M1 1.5L4 4.5L7 1.5"
                    stroke="#0D2855"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                style={{
                  marginTop: "0.5vh",
                  color: "#092C4C",
                  fontSize: "16px",
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  lineHeight: "26.4px",
                  marginLeft: "6vh",
                  width: "230px",
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
            <div>
              <p className="text2">5/5 results</p>
            </div>
            <div>
              <Table />
            </div>
            <div>
              <button className="button2" type="button">
                Export
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrmListed;
