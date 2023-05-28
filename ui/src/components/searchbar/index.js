import React from 'react'
import { useNavigate } from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./searchbar.css"

export default function Searchbar() {
  const navigate = useNavigate();
  return (
    <div className='searchbar-setter'>
      <Row>
        <Col xs="0" md="2"></Col>
        <Col xs="12" md="8" className='p-2'>
          <div className='p-2 searchbar-main'>
            <Row>
              <Col xs="3" className='text-center my-auto'>
                <span className='searchbar-drop'>New Delhi <img src="images/img_arrowdown.svg" style={{paddingBottom:"2px", paddingLeft:"10px"}} /></span>
              </Col>
              <Col xs="9" style={{borderLeft: "1px solid #0D2855"}} className='my-auto'>
                <div style={{position:"relative"}}>
                  <input className='searchbar-input' placeholder='Search for loacality, Landmark, Project or Builder' />
                  <button className='btn-info float-end' onClick={() => navigate("/properties")}><span className='expert-btn-text px-3'>Search</span></button>
                  <div className='searchbar-text p-3'>
                    <br/>
                    <br/>
                    <span className='searchbar-text-bold'>Buy</span>
                    <span>Rent</span>
                    <span>Commercial</span>
                    <span>PG/Co-Living</span>
                    <span>Plots</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
        <Col xs="0" md="2"></Col>
      </Row>
    </div>
  )
}
