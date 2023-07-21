import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Img, List, SelectBox, Text } from "components";

import "./filters.css"
import "../propertyInfo/propertyInfo.css"
import { SelectBox } from '../selectbox';

const propertyTypeOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const bhkTypeOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const saleTypeOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
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
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const furnishingStatusOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const postedByOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const possessionStateOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
  ];
  const languageOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
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

export default function PropertyListingFilters() {
    return (
      <div className='d-none d-md-block'>
        <div className='properties-filter'>
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[9%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group105"
                options={propertyTypeOptionsList}
                isSearchable={false}
                placeholder="Property Type"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group108"
                options={bhkTypeOptionsList}
                isSearchable={false}
                placeholder="BHK type"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group109"
                options={saleTypeOptionsList}
                isSearchable={false}
                placeholder="Sale type"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[6%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                
                isMulti={false}
                name="group110"
                options={budgetOptionsList}
                isSearchable={false}
                placeholder="Budget"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[4%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group112"
                options={areaOptionsList}
                isSearchable={false}
                placeholder="Area"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group113"
                options={amenitiesOptionsList}
                isSearchable={false}
                placeholder="Amenities"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group114"
                options={furnishingStatusOptionsList}
                isSearchable={false}
                placeholder="Furnishing Status"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[7%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group111"
                options={postedByOptionsList}
                isSearchable={false}
                placeholder="Posted by"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="group115"
                options={possessionStateOptionsList}
                isSearchable={false}
                placeholder="Possession State"
            />
            <SelectBox
                className="font-medium text-blue_gray_900 text-left text-sm w-[11%] md:w-full"
                placeholderClassName="text-blue_gray_900"
                isMulti={false}
                name="language"
                options={languageOptionsList}
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
                isSearchable={false}
                placeholder="Relevance"
            />
        </div>
      </div>
    )
}
