import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropertyItem from "../properties/carousel/PropertyItem";

import getFontData from '../../utils/getFontData';

export default function PropertyExtras() {
  return (
    <div>
      <Row>
        <Col xs="0" md="1"></Col>
        <Col>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding:"12px",
              ...getFontData("20px", "700")
            }}>Similar Properties</p>
            <Row className='px-4'>
              <Col xs="6">
                <PropertyItem
                  src="images/property_3.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
              <Col xs="6">
                <PropertyItem
                  src="images/property_4.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
            </Row>
            <br/>
          </div>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding:"12px",
              ...getFontData("20px", "700")
            }}>Owner Listing Near Dwarka</p>
            <Row className='px-4'>
              <Col xs="6">
                <PropertyItem
                  src="images/property_5.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
              <Col xs="6">
                <PropertyItem
                  src="images/property_8.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
            </Row>
            <br/>
          </div>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding:"12px",
              ...getFontData("20px", "700")
            }}>Recently added near Dwarka</p>
            <Row className='px-4'>
              <Col xs="6">
                <PropertyItem
                  src="images/property_7.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
              <Col xs="6">
                <PropertyItem
                  src="images/property_8.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
            </Row>
            <br/>
          </div>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding:"12px",
              ...getFontData("20px", "700")
            }}>More Projects near Dwarka</p>
            <Row className='px-4'>
              <Col xs="6">
                <PropertyItem
                  src="images/property_9.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
              <Col xs="6">
                <PropertyItem
                  src="images/property_10.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </Col>
            </Row>
            <br/>
          </div>
        </Col>
        <Col xs="0" md="4"></Col>
      </Row>
    </div>
  )
}
