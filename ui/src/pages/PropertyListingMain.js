import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import LoggedInHeader from '../components/header/LoggedInHeader';
import PropertyListingFilters from '../components/filters/PropertyListingFilters';
import PropertyListing from '../components/property/PropertyListing'
import getFontData from '../utils/getFontData';
import Footer from '../components/footer';

export default function PropertyListingMain() {
  const [propType, setPropType] = useState("");
  const [bhkType, setBhkType] = useState("");
  const [saleType, setSaleType] = useState("");
  const [budgetType, setBudgetype] = useState("");
  const [areaType, setAreaType] = useState("");
  const [amenitiesType, setAmenitiesType] = useState("");
  const [furnishingType, setFurnishingType] = useState("");
  const [postedBy, setPostedBy] = useState("");
  const [posession, setPosession] = useState("");
  const [rera, setRera] = useState("");
  const [sortBy, setSortBy] = useState("");

  return (
    <div>
        <div className="d-none d-lg-inline">
          <LoggedInHeader showSearchBar={true}/>
        </div>
        <div className="d-inline d-lg-none p-3">
          <Link to="/"  style={{ textDecoration: 'none'}}>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <img
                    style={{ width: "60px", height: "auto" }}
                    src="images/logo.png"
                    alt="img"
                />
                <span style={{paddingLeft:"12px", ...getFontData("16px", "500", {color:"#2B2B2B"})}}>PROPSCAN</span>
                <span style={getFontData("16px", "500", {color:"#2B2B2B"})}>.com</span>
            </div>
          </Link>
        </div>
        <PropertyListingFilters
          propType={propType} setPropType={setPropType}
          bhkType={bhkType} setBhkType={setBhkType}
          saleType={saleType} setSaleType={setSaleType}
          budgetType={budgetType} setBudgetype={setBudgetype}
          areaType={areaType} setAreaType={setAreaType}
          amenitiesType={amenitiesType} setAmenitiesType={setAmenitiesType}
          furnishingType={furnishingType} setFurnishingType={setFurnishingType}
          postedBy={postedBy} setPostedBy={setPostedBy}
          posession={posession} setPosession={setPosession}
          rera={rera} setRera={setRera}
          sortBy={sortBy} setSortBy={setSortBy}
        />
        <PropertyListing
          propType={propType}
          bhkType={bhkType}
          saleType={saleType}
          budgetType={budgetType}
          areaType={areaType}
          amenitiesType={amenitiesType}
          furnishingType={furnishingType}
          postedBy={postedBy}
          posession={posession}
          rera={rera}
          sortBy={sortBy}
        />
        <Footer />
    </div>
  )
}