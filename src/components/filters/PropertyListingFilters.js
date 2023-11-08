import React from 'react'

import "./filters.css"
import "../property/propertyInfo.css"
import { SelectBox } from '../selectbox';

const propertyTypeOptionsList = [
    { label: "Apartment", value: "apartment" },
    { label: "Independent House", value: "independent house" },
    { label: "Independent Floor", value: "independent floor" },
    { label: "Plot", value: "plot" },
    { label: "Studio", value: "studio" },
    { label: "Duplex", value: "duplex" },
    { label: "Penthouse", value: "penthouse" },
    { label: "Villa", value: "villa" },
    { label: "Agriculture Land", value: "agriculture land" },
  ];
  const bhkTypeOptionsList = [
    { label: "1 RK", value: "1 rk" },
    { label: "1 BHK", value: "1 bhk" },
    { label: "2 BHK", value: "2 bhk" },
    { label: "3 BHK", value: "3 bhk" },
    { label: "3+ BHK", value: "3+ bhk" }
  ];
  const saleTypeOptionsList = [
    { label: "New", value: "new" },
    { label: "Resale", value: "resale" }
  ];
  const budgetOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const areaOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const amenitiesOptionsList = [
    { label: "Parking", value: "Parking" },
    { label: "Park", value: "Park" },
    { label: "Lift", value: "Lift" },
    { label: "Power Backup", value: "Power Backup" },
    { label: "Gymnasium", value: "Gymnasium" },
    { label: "Club House", value: "Club House" },
    { label: "Swimming Pool", value: "Swimming Pool" },
    { label: "Gas Pipeline", value: "Gas Pipeline" },
    { label: "Security Personnel", value: "Security Personnel" },
  ];
  const furnishingStatusOptionsList = [
    { label: "Semi-Furnished", value: "Semi-Furnished" },
    { label: "Unfurnished", value: "Unfurnished" },
    { label: "Furnished", value: "Furnished" },
  ];
  const postedByOptionsList = [
    { label: "Owner", value: "Owner" },
    { label: "Builder", value: "Builder" },
    { label: "Dealer", value: "Dealer" },
  ];
  const possessionStateOptionsList = [
    { label: "Ready to move", value: "Ready to move" },
    { label: "In 1 Year", value: "In 1 Year" },
    { label: "In 3 Years", value: "In 3 Years" },
    { label: "Beyond 3 Years", value: "Beyond 3 Years" },
  ];
  const reraOptionsList = [
    { label: "+ Rera Approved Properties", value: "+ Rera Approved Properties" },
    { label: "+ Rera Registered Dealers", value: "+ Rera Registered Dealers" }
  ];

  const sortByList = [
    {
        label: "Relevance",
        value: "Relevance"
    },
    {
        label: "Price High to Low",
        value: "Relevance"
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
  ]

export default function PropertyListingFilters(props) {
    return (
      <div className='d-none d-md-block'>
        <div className='properties-filter'>
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[9%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group105"
                options={propertyTypeOptionsList}
                value={props["propType"]}
                onChange={props["setPropType"]}
                isSearchable={false}
                placeholder="Property Type"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group108"
                options={bhkTypeOptionsList}
                value={props["bhkType"]}
                onChange={props["setBhkType"]}
                isSearchable={false}
                placeholder="BHK type"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group109"
                options={saleTypeOptionsList}
                value={props["saleType"]}
                onChange={props["setSaleType"]}
                isSearchable={false}
                placeholder="Sale type"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[6%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                
                isMulti={false}
                name="group110"
                options={budgetOptionsList}
                value={props["budgetType"]}
                onChange={props["setBudgetType"]}
                isSearchable={false}
                placeholder="Budget"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[4%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group112"
                options={areaOptionsList}
                value={props["areaType"]}
                onChange={props["setAreaType"]}
                isSearchable={false}
                placeholder="Area"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group113"
                options={amenitiesOptionsList}
                value={props["amenitiesType"]}
                onChange={props["setAmenitiesType"]}
                isSearchable={false}
                placeholder="Amenities"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group114"
                options={furnishingStatusOptionsList}
                value={props["furnishingType"]}
                onChange={props["setFurnishingType"]}
                isSearchable={false}
                placeholder="Furnishing Status"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group111"
                options={postedByOptionsList}
                value={props["postedBy"]}
                onChange={props["setPostedBy"]}
                isSearchable={false}
                placeholder="Posted by"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group115"
                options={possessionStateOptionsList}
                value={props["possession"]}
                onChange={props["setPossession"]}
                isSearchable={false}
                placeholder="Possession State"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="language"
                options={reraOptionsList}
                value={props["rera"]}
                onChange={props["setRera"]}
                isSearchable={false}
                placeholder="RERA  Approved"
            />
        </div>
        <div className='sortby-filters'>
            <span style={{paddingRight:"10px"}}>Sort By: </span>
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="sortby"   
                options={sortByList}
                value={props["sortBy"]}
                onChange={props["setSortBy"]}
                isSearchable={false}
                placeholder="Relevance"
            />
        </div>
      </div>
    )
}
