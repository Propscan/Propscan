import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PropertyCardSmall from "../property/PropertyCardSmall";
import Carousel from '../utils/carousel';

import getFontData from '../../utils/getFontData';

export default function PropertySpecificExtras() {
  return (
    <div>
      <Row>
        <Col xs="0" md="1"></Col>
        <Col xs="12" md="8" className='px-4'>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding: "12px",
              ...getFontData("20px", "700")
            }}>Similar Properties</p>
            <Carousel slides={2} responsive={[[1400, 2], [1024, 2], [780, 1]]} items={[
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_3.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>,
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_4.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>
            ]} />
            <br />
          </div>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding: "12px",
              ...getFontData("20px", "700")
            }}>Owner Listing Near Dwarka</p>
            <Carousel slides={2} responsive={[[1400, 2], [1024, 2], [780, 1]]} items={[
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_5.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>,
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_8.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>
            ]} />
            <br />
          </div>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding: "12px",
              ...getFontData("20px", "700")
            }}>Recently added near Dwarka</p>
            <Carousel slides={2} responsive={[[1400, 2], [1024, 2], [780, 1]]} items={[
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_7.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>,
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_8.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>
            ]} />
            <br />
          </div>
          <div className='property-extra-bck'>
            <p style={{
              borderBottom: "1px solid #092C4C",
              padding: "12px",
              ...getFontData("20px", "700")
            }}>More Projects near Dwarka</p>
            <Carousel slides={2} responsive={[[1400, 2], [1024, 2], [780, 1]]} items={[
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_9.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>,
              <div className='p-2'>
                <PropertyCardSmall
                  src="images/property_10.png"
                  text="0123 Boulevard Street, New Delhi"
                  subText1="3 Bedrooms | 2 Bathrooms |"
                  subText2="Size - 252 ft2"
                  price="Rs. 10,000,00.00"
                />
              </div>
            ]} />
            <br />
          </div>
        </Col>
        <Col xs="0" md="3"></Col>
      </Row>
    </div>
  )
}
