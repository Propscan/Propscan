import React from "react";

import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

import PropertyCardLarge from './PropertyCardLarge';
import PropertyCardSmall from './PropertyCardSmall';
import getFormatedRate from '../../utils/money';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './properties.css';

const somedata = [
    {
        "user": 1,
        "is_listed": true,
        "status": "Listed",
        "contacted": false,
        "listing_type": "rent",
        "property_sub_type": "residential",
        "property_type": "apartment",
        "city": "City Name",
        "locality": "Locality Name",
        "locality_society": "Locality Society Name",
        "sub_locality": "Sub-Locality Name",
        "flat_number": "101",
        "house_number": "102",
        "floor_number": "1",
        "bhk_type": "2 BHK",
        "bedrooms": 2,
        "bathrooms": 1,
        "balconies": 1,
        "other_rooms": "Study Room",
        "furnishing_type": "semi_furnished",
        "parking_available": true,
        "covered_parking": true,
        "total_floors": 10,
        "availability_status": "ready_to_move",
        "age_of_property": 5,
        "images_link": "<http://example.com/images/property.jpg>",
        "ownership_type": "freehold",
        "expected_price": 5000000,
        "price_per_sq_ft": 5000.00,
        "price_type": "all_inclusive_price",
        "maintenance_amount": 2000,
        "expected_rental": 20000,
        "booking_amount": 10000,
        "annual_dues_payable": 2000,
        "membership_charge": 1000,
        "unique_description": "This is a 2BHK flat located in a prime locality...",
        "brokerage": true,
        "brokerage_type": "fixed",
        "brokerage_amount": 50000,
        "negotiable": true,
        "maintenance_staff": true,
        "water_storage": true,
        "rain_water_harvesting": false,
        "vaastu_compliant": true,
        "solar_panels": false,
        "overlooking_pool": false,
        "overlooking_park": true,
        "overlooking_club": false,
        "overlooking_main_road": true,
        "gated_society": true,
        "corner_property": false,
        "property_facing_direction": "north",
        "location_advantages": "Located near a school and a shopping mall..."
    },
    {
        "user": 1,
        "is_listed": true,
        "status": "Listed",
        "contacted": false,
        "listing_type": "rent",
        "property_sub_type": "residential",
        "property_type": "apartment",
        "city": "City Name",
        "locality": "Locality Name",
        "locality_society": "Locality Society Name",
        "sub_locality": "Sub-Locality Name",
        "flat_number": "101",
        "house_number": "102",
        "floor_number": "1",
        "bhk_type": "1 BHK",
        "bedrooms": 2,
        "bathrooms": 1,
        "balconies": 1,
        "other_rooms": "Study Room",
        "furnishing_type": "semi_furnished",
        "parking_available": true,
        "covered_parking": true,
        "total_floors": 10,
        "availability_status": "ready_to_move",
        "age_of_property": 5,
        "images_link": "<http://example.com/images/property.jpg>",
        "ownership_type": "freehold",
        "expected_price": 5000000,
        "price_per_sq_ft": 5000.00,
        "price_type": "all_inclusive_price",
        "maintenance_amount": 2000,
        "expected_rental": 20000,
        "booking_amount": 10000,
        "annual_dues_payable": 2000,
        "membership_charge": 1000,
        "unique_description": "This is a 1 BHK flat located in a prime locality...",
        "brokerage": true,
        "brokerage_type": "fixed",
        "brokerage_amount": 50000,
        "negotiable": true,
        "maintenance_staff": true,
        "water_storage": true,
        "rain_water_harvesting": false,
        "vaastu_compliant": true,
        "solar_panels": false,
        "overlooking_pool": false,
        "overlooking_park": true,
        "overlooking_club": false,
        "overlooking_main_road": true,
        "gated_society": true,
        "corner_property": false,
        "property_facing_direction": "north",
        "location_advantages": "Located near a school and a shopping mall..."
    }
]

const propertiesData = [
    {
        name: "The Cressida - Chetan Garg Real Estate",
        propertyImage: "images/img_prop_3.png",
        dealerName: "Cressida's Real Estate",
        possessionStartTime: "Dec, 2023",
        avgPrice: "Rs. 55.10 K/sq.mt",
        priceRate: "Rs 1.00 Cr - 3.10 Cr"
    },
    {
        name: "The Crown - Hem Raj Real Estate",
        propertyImage: "images/img_prop_4.png",
        dealerName: "Dullah Real Estate",
        possessionStartTime: "Jan, 2024",
        avgPrice: "Rs. 67.70 K/sq.mt",
        priceRate: "Rs 2.00 Cr - 4.55 Cr"
    },
    {
        name: "The Sheela's - Jamna Real Estate",
        propertyImage: "images/img_prop_1.png",
        dealerName: "Cressida's Real Estate",
        possessionStartTime: "Feb, 2024",
        avgPrice: "Rs. 59.30 K/sq.mt",
        priceRate: "Rs 1.15 Cr - 2.25 Cr"
    },
    {
        name: "The RT Palace Flats - Sanjay Real Estate",
        propertyImage: "images/img_prop_2.png",
        dealerName: "Dullah Real Estate",
        possessionStartTime: "Feb, 2024",
        avgPrice: "Rs. 59.30 K/sq.mt",
        priceRate: "Rs 1.15 Cr - 2.25 Cr"
    }
]

export default function PropertyListing(props) {
    const propType = props["propType"];
    const bhkType = props["bhkType"];
    const saleType = props["saleType"];
    const budgetType = props["budgetType"];
    const areaType = props["areaType"];
    const amenitiesType = props["amenitiesType"];
    const furnishingType = props["furnishingType"];
    const postedBy = props["postedBy"];
    const posession = props["posession"];
    const rera = props["rera"];
    const sortBy = props["sortBy"];
    
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;
    let properties = [];
    data["properties"] = somedata;

    console.log(data["properties"])
    console.log(props);
    if(data["properties"].length === 0) {
        properties = propertiesData;
    } else {
        for (const property of data["properties"]) {
            if(propType !== "" && property["property_type"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== propType.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(bhkType !== "" && property["bhk_type"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== bhkType.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(saleType !== "" && property["listing_type"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== saleType.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(budgetType !== "" && property["expected_price"] > budgetType) continue;
            if(areaType !== "" && property["area"] > areaType) continue;
            if(amenitiesType !== "" && property["amenities"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== amenitiesType.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(furnishingType !== "" && property["furnishing_type"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== furnishingType.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(postedBy !== "" && property["posted_by"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== postedBy.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(posession !== "" && property["possession_status"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== posession.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(rera !== "" && property["rera_status"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== rera.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            if(sortBy !== "" && property["sort_by"].toLowerCase().replace(/[^a-z0-9]/gi, '') !== sortBy.toLowerCase().replace(/[^a-z0-9]/gi, '')) continue;
            properties.push({
                name: property["unique_description"],
                propertyImage:  property["main_image_link"] || "images/img_prop_3.png",
                dealerName: "Cressida's Real Estate",
                possessionStartTime: "Dec, 2023",
                avgPrice: `Rs. ${getFormatedRate(property["price_per_sq_ft"])} /sq.ft`,
                priceRate: `Rs ${getFormatedRate(property["expected_price"])} - ${getFormatedRate(parseInt(property["expected_price"])+10000)}`,
                unique_description: property["location_advantages"]
            })
        }
    }

    return (
        <>
            <div className="d-none d-md-block">
                {properties.length>0?properties.map((props, index) =>
                    <div className='properties' key={index} onClick={() => navigate("/property")}>
                        <PropertyCardLarge {...props}  />
                    </div>
                ): <p className='text-center p-5'>Duhh, There is no property to display :(</p>}
            </div>
            <div className="d-block d-md-none">
                {properties.lenght>0?(<Row className='my-4'>
                    {properties.map((props, index) =>
                    <div key={index}>
                        <Col xs="1" ></Col>
                            <Col xs="10" className='mb-4'
                                onClick={() => navigate("/property")}
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
                    </div>
                    )}
                </Row>) : <p className='text-center p-5'>Duhh, There is no property to display :(</p>}
            </div>
        </>
    )
}
