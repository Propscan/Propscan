import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import getFontData from '../../utils/getFontData';

import LoggedInHeader from '../header/LoggedInHeader';

import "./propertyInfo.css"

export default function PropertyInfo() {
  return (
    <div>
      <LoggedInHeader />
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
            <div className='text-end mb-5 pb-3'>
              <p style={{marginBottom:"16px", ...getFontData("20px","700")}}>Rs 1.00 Cr - 3.10 Cr </p>
              <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Avg. Price</p>
              <p style={getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}>Rs. 55.10 K/sq.mt</p>
              <button className='btn-info float-end'><span className='expert-btn-text px-3'>Contact</span></button>
            </div>
          </Col>
          <Col xs="8" className='mt-3'>
            <img style={{
              width:"100%",
              height: "auto"
            }} src="images/property_1.png" />
          </Col>
          <Col xs="4" className='mt-3'>
            <div className='d-flex flex-column justify-content-between' style={{height:"100%"}}>
              <div>
                <img className='fluid' style={{borderRadius: "8px 0px 0px 8px"}} src="images/property_2.png" />
              </div>
              <div style={{position:"relative"}}>
                <img className='fluid' style={{borderRadius: "8px 0px 0px 8px"}} src="images/property_1.png" />
                <div className='property-img-overlay'></div>
                <span className='property-img-center' style={{
                  ...getFontData("20px", "700", {
                    "color":"#FFFFFF"
                  })
                }}>+10 Photos</span>
              </div>
            </div>
          </Col>
          <Col xs="12">
            <div className='stat property-specs mt-3'>
              <Row className='py-3 px-0'>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Build Up Area</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>1100 Sq.ft</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Age of Property</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>New</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Possession status</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>Ready to move</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Facing</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>East Facing</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Furnishing</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>Semi Furnishing</p>
                  </div>
                </Col>
                <Col className='px-0'>
                  <div className='text-center'>
                    <p style={{...getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}}>Floor</p>
                    <p style={{marginBottom:"0px", ...getFontData("16px", "500", {lineHeight:"16px", color:"#092C4C"})}}>1 out of 12 floors</p>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="12" className='d-flex align-items-center'>
            <img src='images/property_location.svg' />
            <div className='p-4'>
              <span style={getFontData("20px", "700", {lineHeight:"26px"})}>Property Location</span><br/>
              <span style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Falana Falana Street, Dwarka, New Delhi</span>
            </div>
          </Col>
          <Col xs="9">
            <div className='property-extra-bck'>
              <p style={{
                borderBottom: "1px solid #092C4C",
                padding:"12px",
                ...getFontData("20px", "700")
              }}>Overview</p>
              <Row className='pe-3'>
                <Col xs="4" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Brokerage</p>
                  <p style={getFontData("16px", "500", {lineHeight:"16px"})}>No Charge</p>
                </Col>
                <Col xs="4" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Price</p>
                  <p style={getFontData("16px", "500", {lineHeight:"16px"})}>Rs. 1.00 Cr</p>
                </Col>
                <Col xs="4" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Balcony</p>
                  <p style={getFontData("16px", "500", {lineHeight:"16px"})}>2</p>
                </Col>
                <Col xs="4" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Bedroom</p>
                  <p style={getFontData("16px", "500", {lineHeight:"16px"})}>2</p>
                </Col>
                <Col xs="4" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Bathroom</p>
                  <p style={getFontData("16px", "500", {lineHeight:"16px"})}>2</p>
                </Col>
                <Col xs="4" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Parking</p>
                  <p style={getFontData("16px", "500", {lineHeight:"16px"})}>2 Closed parking</p>
                </Col>
                <Col xs="12" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>Added</p>
                  <p style={getFontData("16px", "500", {lineHeight:"16px"})}>More than a month Ago</p>
                </Col>
                <Col xs="12" className='mb-4'>
                  <p style={getFontData("16px", "400", {lineHeight:"16px", color:"#4F4F4F"})}>About this  Property</p>
                  <p style={getFontData("16px", "500", {lineHeight:"21px"})}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs="3">
            Contact Form
          </Col>
          <Col xs="9">
            <div className='property-extra-bck'>
              <p style={{
                borderBottom: "1px solid #092C4C",
                padding:"12px",
                ...getFontData("20px", "700")
              }}>Amenities</p>
              <div className='d-flex align-items-center px-3'>
                <div className='text-center p-3'>
                  <img src="images/car.svg" className='mb-2' />
                  <p>Parking</p>
                </div>
                <div className='text-center p-3'>
                  <img src="images/game.svg" className='mb-2' />
                  <p>Game Zone</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs="3" />
        </Row>
        </Col>
        <Col xs="1"/>
      </Row>
    </div>
  )
}

