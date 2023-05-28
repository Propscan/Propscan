import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import getFontData from '../../utils/getFontData';

import "./propertyInfo.css"

export default function PropertyInfo() {
  return (
    <div>
      <Row className='my-5'>
        <Col xs="1"/>
        <Col>
        <Row>
          <Col xs="6">
          <div className='pb-2'>
            <p style={{marginBottom:"12px", ...getFontData("20px","700")}}>The Cressida - Chetan Garg Real Estate</p>
            <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>2,3 BHK Independent Floor in Dwarka, Delhi</p>
          </div>
            <img src="images/share_filled.svg" className='pe-2' /> 
            <img src="images/heart_filled.svg" /> 
          </Col>
          <Col xs="6">
            <div className='text-end'>
              <p style={{marginBottom:"16px", ...getFontData("20px","700")}}>Rs 1.00 Cr - 3.10 Cr </p>
              <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Avg. Price</p>
              <p style={getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}>Rs. 55.10 K/sq.mt</p>
              <button className='btn-info float-end'><span className='expert-btn-text px-3'>Contact</span></button>
            </div>
          </Col>
          <Col xs="8" className='mt-3'>
            <img className='img-fluid' src="images/property_1.png" />
          </Col>
          <Col xs="4" className='mt-3' style={{backgroundColor:"green"}}>
            <div className='d-flex flex-column justify-content-between align-items-stretch'>
            <img style={{borderRadius: "8px 0px 0px 8px"}} src="images/property_2.png" />
            <br/>
            <img style={{borderRadius: "8px 0px 0px 8px"}} src="images/property_1.png" />
            </div>
          </Col>
          <Col xs="12">
            <div className='stat property-specs'>
              <Row>
                <Col>
                <div>
                  Build Up Area
                  
                </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        </Col>
        <Col xs="1"/>
      </Row>
    </div>
  )
}

