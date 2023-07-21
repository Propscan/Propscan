import React from 'react';

import { useNavigate } from "react-router-dom";


import PropertyListCard from './PropertyListCard';
import PropertyItem from './PropertyItem';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './properties.css'

export default function PropertyListing() {
    const navigate = useNavigate();
    const properties = [
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
    return (
        <>
            <div className="d-none d-md-block">
                {properties.map((props, index) =>
                    <div className='properties' key={index} onClick={() => navigate("/property")}>
                        <PropertyListCard {...props}  />
                    </div>
                )}
            </div>
            {/* <div className='properties' key={index}> */}
            {/* </div> */}
            <div className="d-block d-md-none">
                <Row className='my-4'>
                    {properties.map((props, index) =>
                    <>
                        <Col xs="1"></Col>
                            <Col xs="10" className='mb-4'
                                onClick={() => navigate("/property")}
                            >
                                <PropertyItem
                                    src={props.propertyImage}
                                    text={props.name}
                                    subText1={props.dealerName}
                                    subText2={props.possessionStartTime}
                                    price={props.priceRate}
                                />
                            </Col>
                        <Col xs="1"></Col>
                    </>
                    )}
                </Row>
            </div>
        </>
    )
}
