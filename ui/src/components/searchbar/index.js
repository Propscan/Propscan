import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { SelectBox } from '../selectbox';
import getFontData from '../../utils/getFontData';

import "./searchbar.css"

const searchSuggestions = ["Dwarka", "Pitampura", "Greater Kailash", "Defence Colony", "Saket", "Punjabi Bagh", "Lajpat Nagar", "Model Town", "Karol Bagh", "Shahdra"];

export default function Searchbar({defaultClass="searchbar-setter"}) {
  const navigate = useNavigate();
  const [squery, setSquery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  return (
    <div className={defaultClass}>
      <Row>
        <Col xs="0" md="1" lg="2"></Col>
        <Col xs="12" md="10" lg="8" className='p-2'>
          <div className='p-2 searchbar-main' style={{position:"relative"}}>
            <Row>
              <Col xs="4" sm="3" className='text-center my-auto p-0'>
                <SelectBox
                    className="font-medium text-blue_gray_900 text-left text-sm w-[9%] md:w-full"
                    placeholderClassName="text-blue_gray_900"
                    isMulti={false}
                    name="group105"
                    options={[
                      { label: "New Delhi", value: "New Delhi" },
                      { label: "Bangalore", value: "Bangalore" },
                      { label: "Mumbai", value: "Mumbai" },
                    ]}
                    isSearchable={false}
                    placeholder="New Delhi"
                    value="New Delhi"
                />
              </Col>
              <Col xs="8" sm="9" style={{borderLeft: "1px solid #0D2855", position:"relative"}} className='my-auto'>
                <div style={{zIndex:"2", display:"flex"}}>
                  <div style={{flexGrow:"100"}}>
                    <input className='searchbar-input' value={squery} onClick={() => setShowSuggestions(true)} onChange={(e) => setSquery(e.target.value)} placeholder={ window.innerWidth > 650 ? "Search for loacality, Landmark, Project or Builder":"Type here"} />
                  </div>
                  <button className='btn-info float-end px-2 py-1' onClick={() => navigate("/properties")}><span className='expert-btn-text px-1 px-lg-3'>Search</span></button>
                  {showSuggestions && <div className='search-suggestions'>
                    <span  style={{opacity:"0.5", padding:"7px 24px", ...getFontData("12px", "400")}}>POPULAR SEARCH</span>
                    {searchSuggestions.map((item) => (
                      <p onClick={(e) => {
                        setShowSuggestions(false);
                        setSquery(e.target.innerHTML.split(" <")[0]);
                      }}>{item} <span style={{opacity:"0.5", float: "right"}}>LOCALITY</span></p>
                    ))}
                  </div>}
                </div>
                {defaultClass != "" && 
                  <div className='searchbar-text p-3 d-none d-lg-block'>
                    <br/>
                    <br/>
                    <span className='searchbar-text-bold me-4 me-xl-5'>Buy</span>
                    <span className='me-4 me-xl-5'>Rent</span>
                    <span className='me-4 me-xl-5'>Commercial</span>
                    <span className='me-4 me-xl-5'>PG/Co-Living</span>
                    <span className='me-4 me-xl-5'>Plots</span>
                  </div>
                }
              </Col>
            </Row>
            {defaultClass != "" && 
              <div className='searchbar-text px-3 px-sm-5 px-md-5 d-lg-none mt-4 pb-3' style={{paddingTop:"36px"}}>
                <span className='searchbar-text-bold'>Buy</span>
                <span>Rent</span>
                <span>Commercial</span>
                <span>PG/Co-Living</span>
                <span>Plots</span>
              </div>
            }
          </div>
        </Col>
        <Col xs="0" md="1" lg="2"></Col>
      </Row>
    </div>
  );
}
