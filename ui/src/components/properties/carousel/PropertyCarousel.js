import React from 'react';

import Col from 'react-bootstrap/Col';

import "./propertyCarousel.css";
import PropertyItem from "./PropertyItem";


export default function Property() {
  return (
    <>
      <Col md="1" />
      <Col xs="6" md className='p-4'>
        <PropertyItem
          src="images/img_image_1prop.png"
          text="0123 Boulevard Street, New Delhi"
          subText1="3 Bedrooms | 2 Bathrooms |"
          subText2="Size - 252 ft2"
          price="Rs. 10,000,00.00"
        />
      </Col>
      <Col xs="6" md className='p-4'>
        <PropertyItem
          src="images/img_image_2prop.png"
          text="0123 Boulevard Street, New Delhi"
          subText1="3 Bedrooms | 2 Bathrooms |"
          subText2="Size - 252 ft2"
          price="Rs. 10,000,00.00"
        />
      </Col>
      <Col xs="6" md className='p-4'>
        <PropertyItem
          src="images/img_image_3prop.png"
          text="0123 Boulevard Street, New Delhi"
          subText1="3 Bedrooms | 2 Bathrooms |"
          subText2="Size - 252 ft2"
          price="Rs. 10,000,00.00"
        />
      </Col>
      <Col md="1" />
    </>
  )
}
